/*! CE SSRU IoT Equipment Borrow & Return System (v1.1.4) */
(function () {
  "use strict";

  var STORAGE_KEY = "ce_ssru_iot_borrow_v1";
  var CDN_HTML2CANVAS = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
  var CDN_JSPDF = "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js";
  var CDN_XLSX = "https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js";

  var scriptPromises = {};

  function loadScriptOnce(url) {
    if (scriptPromises[url]) return scriptPromises[url];
    scriptPromises[url] = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = url;
      s.async = true;
      s.crossOrigin = "anonymous";
      s.onload = function () { resolve(); };
      s.onerror = function () {
        delete scriptPromises[url];
        reject(new Error("ไม่สามารถโหลดไลบรารีจาก " + url));
      };
      document.head.appendChild(s);
    });
    return scriptPromises[url];
  }

  function todayISO() {
    var d = new Date();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  function addDaysISO(baseISO, days) {
    var parts = (baseISO || todayISO()).split("-");
    var d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    d.setDate(d.getDate() + days);
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  function formatThaiDate(iso) {
    if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return "-";
    var months = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    var p = iso.split("-");
    var y = Number(p[0]) + 543;
    var m = months[Number(p[1]) - 1] || p[1];
    return Number(p[2]) + " " + m + " " + y;
  }

  function generateDocId() {
    var d = new Date();
    var be = d.getFullYear() + 543;
    var mm = String(d.getMonth() + 1).padStart(2, "0");
    var dd = String(d.getDate()).padStart(2, "0");
    var rand = String(Math.floor(1000 + Math.random() * 9000));
    return "CE-IOT-" + be + mm + dd + "-" + rand;
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function sanitizeFilename(name) {
    return String(name || "document").replace(/[^a-zA-Z0-9ก-๙_-]+/g, "_").replace(/^_+|_+$/g, "");
  }

  function downloadBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 800);
  }

  var toastTimer = null;
  function showToast(msg, type) {
    var old = document.querySelector(".ce-bw-toast");
    if (old && old.parentNode) old.parentNode.removeChild(old);
    if (toastTimer) clearTimeout(toastTimer);
    var el = document.createElement("div");
    el.className = "ce-bw-toast" + (type ? " is-" + type : "");
    el.setAttribute("role", "status");
    el.textContent = msg;
    document.body.appendChild(el);
    toastTimer = setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 3800);
  }

  function conditionLabel(code) {
    if (code === "damaged") return "ชำรุด / ไม่สมบูรณ์";
    if (code === "lost") return "สูญหาย";
    return "ปกติ ครบถ้วน";
  }

  function init() {
    var root = document.getElementById("ce-borrow-app");
    if (!root || root.dataset.bwInit === "1") return;
    root.dataset.bwInit = "1";

    var state = {
      mode: "borrow",
      docId: generateDocId(),
      search: "",
      catFilter: "all",
      customItems: []
    };

    // DOM References
    var modeBtns = root.querySelectorAll(".ce-bw-mode-btn");
    var searchInput = root.querySelector("#ce-bw-search");
    var catBtns = root.querySelectorAll(".ce-bw-cat-pill");
    var btnSelectKit = root.querySelector("#ce-bw-select-kit");
    var btnClearSel = root.querySelector("#ce-bw-clear-sel");
    var tbody = root.querySelector("#ce-bw-catalog-body");
    var emptyFilterEl = root.querySelector("#ce-bw-empty-filter");

    var customNameEl = root.querySelector("#ce-bw-custom-name");
    var customQtyEl = root.querySelector("#ce-bw-custom-qty");
    var btnAddCustom = root.querySelector("#ce-bw-add-custom");
    var customListEl = root.querySelector("#ce-bw-custom-list");

    var fStudentId = root.querySelector("#bw-student-id");
    var fFullName = root.querySelector("#bw-full-name");
    var fYear = root.querySelector("#bw-year");
    var fPhone = root.querySelector("#bw-phone");
    var fCourse = root.querySelector("#bw-course");
    var fAdvisor = root.querySelector("#bw-advisor");
    var fBorrowDate = root.querySelector("#bw-borrow-date");
    var fDueDate = root.querySelector("#bw-due-date");
    var fReturnDate = root.querySelector("#bw-return-date");
    var fInspector = root.querySelector("#bw-inspector");
    var fPurpose = root.querySelector("#bw-purpose");
    var fTerms = root.querySelector("#bw-terms");
    var fTermsLabel = root.querySelector("#bw-terms-label");
    var durBtns = root.querySelectorAll(".ce-bw-dur-btn");

    var jsonInput = root.querySelector("#ce-bw-json-input");
    var importBox = root.querySelector("#ce-bw-import-box");

    var dockTitle = root.querySelector("#ce-bw-dock-title");
    var dockDocId = root.querySelector("#ce-bw-doc-id");
    var metricKinds = root.querySelector("#ce-bw-metric-kinds");
    var metricQty = root.querySelector("#ce-bw-metric-qty");
    var slipList = root.querySelector("#ce-bw-slip-list");
    var statusBox = root.querySelector("#ce-bw-status-box");
    var btnResetAll = root.querySelector("#ce-bw-reset-all");

    var btnExportPdf = root.querySelector("#ce-bw-exp-pdf");
    var btnExportDoc = root.querySelector("#ce-bw-exp-doc");
    var btnExportXlsx = root.querySelector("#ce-bw-exp-xlsx");
    var btnExportCsv = root.querySelector("#ce-bw-exp-csv");
    var btnExportJson = root.querySelector("#ce-bw-exp-json");
    var btnExportPrint = root.querySelector("#ce-bw-exp-print");

    // Initialize default dates
    if (fBorrowDate && !fBorrowDate.value) fBorrowDate.value = todayISO();
    if (fDueDate && !fDueDate.value) fDueDate.value = addDaysISO(fBorrowDate ? fBorrowDate.value : todayISO(), 7);
    if (fReturnDate && !fReturnDate.value) fReturnDate.value = todayISO();

    function getCatalogRows() {
      return Array.prototype.slice.call(tbody ? tbody.querySelectorAll("tr.ce-bw-item-row") : []);
    }

    function enhanceCatalogRows() {
      getCatalogRows().forEach(function (tr) {
        var nameCell = tr.children[2];
        var qtyCell = tr.querySelector("td.col-qty");
        var catLabel = tr.getAttribute("data-cat-label") || "";

        if (nameCell) {
          var meta = nameCell.querySelector(".ce-bw-item-meta");
          if (meta && catLabel && !meta.querySelector(".ce-bw-cat-badge")) {
            var badge = document.createElement("span");
            badge.className = "ce-bw-cat-badge";
            badge.textContent = catLabel;
            meta.appendChild(badge);
          }
          if (!nameCell.querySelector(".ce-bw-return-ctrl")) {
            var ctrl = document.createElement("div");
            ctrl.className = "ce-bw-return-ctrl";
            ctrl.innerHTML =
              '<select class="ce-bw-cond-select" aria-label="สภาพอุปกรณ์">' +
              '<option value="ok">สภาพปกติ ครบถ้วน</option>' +
              '<option value="damaged">ชำรุด / ไม่สมบูรณ์</option>' +
              '<option value="lost">สูญหาย</option>' +
              "</select>" +
              '<input type="text" class="ce-bw-cond-note" placeholder="หมายเหตุสภาพ (ถ้ามี)">';
            nameCell.appendChild(ctrl);
          }
        }

        if (qtyCell && !qtyCell.querySelector(".ce-bw-stepper")) {
          var qtyInput = qtyCell.querySelector(".ce-bw-qty-input");
          var stepper = document.createElement("div");
          stepper.className = "ce-bw-stepper";
          var btnDown = document.createElement("button");
          btnDown.type = "button";
          btnDown.className = "ce-bw-step-btn";
          btnDown.setAttribute("data-step", "down");
          btnDown.setAttribute("aria-label", "ลดจำนวน");
          btnDown.textContent = "−";
          var btnUp = document.createElement("button");
          btnUp.type = "button";
          btnUp.className = "ce-bw-step-btn";
          btnUp.setAttribute("data-step", "up");
          btnUp.setAttribute("aria-label", "เพิ่มจำนวน");
          btnUp.textContent = "+";
          stepper.appendChild(btnDown);
          if (qtyInput) stepper.appendChild(qtyInput);
          stepper.appendChild(btnUp);
          qtyCell.innerHTML = "";
          qtyCell.appendChild(stepper);
        }
      });
    }

    function readSelectedItems() {
      var list = [];
      getCatalogRows().forEach(function (tr) {
        var chk = tr.querySelector(".ce-bw-chk");
        if (!chk || !chk.checked) return;
        var qtyInput = tr.querySelector(".ce-bw-qty-input");
        var condSel = tr.querySelector(".ce-bw-cond-select");
        var condNote = tr.querySelector(".ce-bw-cond-note");
        var qty = Math.max(1, parseInt(qtyInput ? qtyInput.value : "1", 10) || 1);
        list.push({
          sku: tr.getAttribute("data-sku") || "",
          name: tr.getAttribute("data-name") || "",
          nameEn: tr.getAttribute("data-en") || "",
          category: tr.getAttribute("data-cat-label") || "",
          qty: qty,
          condition: condSel ? condSel.value : "ok",
          note: condNote ? condNote.value.trim() : "",
          isCustom: false
        });
      });
      state.customItems.forEach(function (ci, idx) {
        list.push({
          sku: "EXT-" + String(idx + 1).padStart(2, "0"),
          name: ci.name,
          nameEn: "Custom Hardware / Module",
          category: "อุปกรณ์เพิ่มเติม",
          qty: Math.max(1, parseInt(ci.qty, 10) || 1),
          condition: ci.condition || "ok",
          note: ci.note || "",
          isCustom: true
        });
      });
      return list;
    }

    function collectPayload() {
      var items = readSelectedItems();
      var totalQty = items.reduce(function (acc, it) { return acc + it.qty; }, 0);
      return {
        schema: "ce-ssru-iot-v1",
        mode: state.mode === "return" ? "return" : "borrow",
        docId: state.docId,
        generatedAt: new Date().toISOString(),
        borrower: {
          studentId: fStudentId ? fStudentId.value.trim() : "",
          fullName: fFullName ? fFullName.value.trim() : "",
          yearLevel: fYear ? fYear.value : "",
          phone: fPhone ? fPhone.value.trim() : "",
          courseOrProject: fCourse ? fCourse.value.trim() : "",
          advisor: fAdvisor ? fAdvisor.value.trim() : "",
          borrowDate: fBorrowDate ? fBorrowDate.value : "",
          dueDate: fDueDate ? fDueDate.value : "",
          returnDate: fReturnDate ? fReturnDate.value : "",
          inspectorName: fInspector ? fInspector.value.trim() : "",
          purpose: fPurpose ? fPurpose.value.trim() : "",
          acceptedTerms: fTerms ? !!fTerms.checked : false
        },
        items: items,
        summary: {
          kindCount: items.length,
          totalQty: totalQty
        }
      };
    }

    function saveDraft() {
      try {
        var rowsState = {};
        getCatalogRows().forEach(function (tr) {
          var sku = tr.getAttribute("data-sku");
          var chk = tr.querySelector(".ce-bw-chk");
          var qty = tr.querySelector(".ce-bw-qty-input");
          var cond = tr.querySelector(".ce-bw-cond-select");
          var note = tr.querySelector(".ce-bw-cond-note");
          if (chk && chk.checked) {
            rowsState[sku] = {
              checked: true,
              qty: Math.max(1, parseInt(qty ? qty.value : "1", 10) || 1),
              cond: cond ? cond.value : "ok",
              note: note ? note.value : ""
            };
          }
        });
        var payload = {
          mode: state.mode,
          docId: state.docId,
          rows: rowsState,
          customItems: state.customItems,
          borrower: collectPayload().borrower
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch (e) { /* ignore storage quota */ }
    }

    function applyImportedData(data, switchToReturn) {
      if (!data || typeof data !== "object") return false;
      if (data.docId) state.docId = String(data.docId);

      // Reset catalog checkboxes first
      getCatalogRows().forEach(function (tr) {
        var chk = tr.querySelector(".ce-bw-chk");
        var qty = tr.querySelector(".ce-bw-qty-input");
        var cond = tr.querySelector(".ce-bw-cond-select");
        var note = tr.querySelector(".ce-bw-cond-note");
        if (chk) chk.checked = false;
        if (qty) qty.value = "1";
        if (cond) cond.value = "ok";
        if (note) note.value = "";
        tr.classList.remove("is-selected");
      });

      state.customItems = [];

      // Support either draft format (.rows map) or exported JSON format (.items array)
      if (data.rows && typeof data.rows === "object") {
        getCatalogRows().forEach(function (tr) {
          var sku = tr.getAttribute("data-sku");
          var r = data.rows[sku];
          if (r && r.checked) {
            var chk = tr.querySelector(".ce-bw-chk");
            var qty = tr.querySelector(".ce-bw-qty-input");
            var cond = tr.querySelector(".ce-bw-cond-select");
            var note = tr.querySelector(".ce-bw-cond-note");
            if (chk) chk.checked = true;
            if (qty) qty.value = String(Math.max(1, parseInt(r.qty, 10) || 1));
            if (cond && r.cond) cond.value = r.cond;
            if (note && r.note) note.value = r.note;
            tr.classList.add("is-selected");
          }
        });
      }

      if (Array.isArray(data.items)) {
        var rowMap = {};
        getCatalogRows().forEach(function (tr) {
          rowMap[tr.getAttribute("data-sku")] = tr;
        });
        data.items.forEach(function (it) {
          var tr = rowMap[it.sku];
          if (tr && !it.isCustom) {
            var chk = tr.querySelector(".ce-bw-chk");
            var qty = tr.querySelector(".ce-bw-qty-input");
            var cond = tr.querySelector(".ce-bw-cond-select");
            var note = tr.querySelector(".ce-bw-cond-note");
            if (chk) chk.checked = true;
            if (qty) qty.value = String(Math.max(1, parseInt(it.qty, 10) || 1));
            if (cond && it.condition) cond.value = it.condition;
            if (note && it.note) note.value = it.note;
            tr.classList.add("is-selected");
          } else if (it.name) {
            state.customItems.push({
              name: String(it.name),
              qty: Math.max(1, parseInt(it.qty, 10) || 1),
              condition: it.condition || "ok",
              note: it.note || ""
            });
          }
        });
      }

      if (Array.isArray(data.customItems)) {
        state.customItems = data.customItems.map(function (ci) {
          return {
            name: String(ci.name || ""),
            qty: Math.max(1, parseInt(ci.qty, 10) || 1),
            condition: ci.condition || "ok",
            note: ci.note || ""
          };
        }).filter(function (ci) { return ci.name.length > 0; });
      }

      var b = data.borrower || {};
      if (fStudentId && b.studentId !== undefined) fStudentId.value = b.studentId;
      if (fFullName && b.fullName !== undefined) fFullName.value = b.fullName;
      if (fYear && b.yearLevel !== undefined) fYear.value = b.yearLevel;
      if (fPhone && b.phone !== undefined) fPhone.value = b.phone;
      if (fCourse && b.courseOrProject !== undefined) fCourse.value = b.courseOrProject;
      if (fAdvisor && b.advisor !== undefined) fAdvisor.value = b.advisor;
      if (fBorrowDate && b.borrowDate) fBorrowDate.value = b.borrowDate;
      if (fDueDate && b.dueDate) fDueDate.value = b.dueDate;
      if (fReturnDate && b.returnDate) fReturnDate.value = b.returnDate;
      if (fInspector && b.inspectorName !== undefined) fInspector.value = b.inspectorName;
      if (fPurpose && b.purpose !== undefined) fPurpose.value = b.purpose;
      if (fTerms && typeof b.acceptedTerms === "boolean") fTerms.checked = b.acceptedTerms;

      if (switchToReturn) {
        setMode("return");
      } else if (data.mode) {
        setMode(data.mode);
      }

      renderCustomItems();
      applyFilter();
      updateSummary();
      return true;
    }

    function restoreDraft() {
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        var data = JSON.parse(raw);
        applyImportedData(data, false);
      } catch (e) { /* ignore corrupt draft */ }
    }

    function setMode(mode) {
      if (mode !== "borrow" && mode !== "return" && mode !== "policy") mode = "borrow";
      state.mode = mode;
      root.setAttribute("data-mode", mode);
      Array.prototype.forEach.call(modeBtns, function (btn) {
        var active = btn.getAttribute("data-tab") === mode;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", active ? "true" : "false");
      });
      if (dockTitle) {
        dockTitle.textContent = mode === "return"
          ? "ใบส่งคืนและตรวจรับอุปกรณ์"
          : "สรุปรายการคำขอยืมอุปกรณ์";
      }
      updateSummary();
      saveDraft();
    }

    function applyFilter() {
      var q = (state.search || "").trim().toLowerCase();
      var cat = state.catFilter;
      var visibleCount = 0;

      getCatalogRows().forEach(function (tr) {
        var chk = tr.querySelector(".ce-bw-chk");
        var isChecked = !!(chk && chk.checked);
        var rowCat = tr.getAttribute("data-cat") || "";
        var text = (
          (tr.getAttribute("data-sku") || "") + " " +
          (tr.getAttribute("data-name") || "") + " " +
          (tr.getAttribute("data-en") || "") + " " +
          (tr.getAttribute("data-cat-label") || "")
        ).toLowerCase();

        var matchCat = (cat === "all") || (cat === "selected" ? isChecked : rowCat === cat);
        var matchSearch = !q || text.indexOf(q) !== -1;

        var show = matchCat && matchSearch;
        tr.classList.toggle("is-hidden", !show);
        if (show) visibleCount++;
      });

      if (emptyFilterEl) {
        emptyFilterEl.classList.toggle("is-visible", visibleCount === 0);
      }
    }

    function renderCustomItems() {
      if (!customListEl) return;
      customListEl.innerHTML = "";
      state.customItems.forEach(function (ci, idx) {
        var chip = document.createElement("span");
        chip.className = "ce-bw-custom-chip";
        chip.innerHTML =
          '<span>' + escapeHtml(ci.name) + ' &times; ' + ci.qty + '</span>' +
          '<button type="button" class="ce-bw-custom-del" data-idx="' + idx + '" title="ลบรายการนี้">&times;</button>';
        customListEl.appendChild(chip);
      });
    }

    function updateSummary() {
      var items = readSelectedItems();
      var totalQty = items.reduce(function (sum, it) { return sum + it.qty; }, 0);

      if (dockDocId) dockDocId.textContent = state.docId;
      if (metricKinds) metricKinds.textContent = String(items.length);
      if (metricQty) metricQty.textContent = String(totalQty);

      if (slipList) {
        slipList.innerHTML = "";
        if (items.length === 0) {
          var emptyLi = document.createElement("li");
          emptyLi.className = "ce-bw-slip-empty";
          emptyLi.textContent = "ยังไม่ได้เลือกอุปกรณ์ กรุณาติ๊กเลือกรายการทางซ้าย";
          slipList.appendChild(emptyLi);
        } else {
          items.forEach(function (it) {
            var li = document.createElement("li");
            var extra = state.mode === "return" && it.condition !== "ok"
              ? " [" + conditionLabel(it.condition) + "]"
              : "";
            li.innerHTML =
              '<span class="ce-bw-slip-name" title="' + escapeHtml(it.name) + '">' +
              escapeHtml(it.sku) + " " + escapeHtml(it.name) + escapeHtml(extra) +
              "</span>" +
              '<span class="ce-bw-slip-qty">x' + it.qty + "</span>";
            slipList.appendChild(li);
          });
        }
      }

      if (statusBox) {
        var check = checkFormReadiness(false);
        statusBox.classList.remove("is-ready", "is-warn");
        if (check.ok) {
          statusBox.classList.add("is-ready");
          statusBox.textContent = "ข้อมูลครบถ้วน พร้อมดาวน์โหลดเอกสารได้ทันที";
        } else {
          statusBox.classList.add("is-warn");
          statusBox.textContent = check.message;
        }
      }
    }

    function clearValidationMarks() {
      var bad = root.querySelectorAll(".is-invalid");
      Array.prototype.forEach.call(bad, function (el) {
        el.classList.remove("is-invalid");
      });
    }

    function checkFormReadiness(markFields) {
      if (markFields) clearValidationMarks();
      var items = readSelectedItems();
      if (items.length === 0) {
        return { ok: false, message: "กรุณาเลือกอุปกรณ์อย่างน้อย 1 รายการ", focusEl: searchInput };
      }

      var required = [
        { el: fStudentId, msg: "กรุณากรอกรหัสนักศึกษา" },
        { el: fFullName, msg: "กรุณากรอกชื่อ-สกุล" },
        { el: fYear, msg: "กรุณาเลือกชั้นปี" }
      ];

      if (state.mode !== "return") {
        required.push({ el: fPurpose, msg: "กรุณาระบุเหตุผลในการยืม / ชื่อโครงงาน" });
      }

      for (var i = 0; i < required.length; i++) {
        var r = required[i];
        if (r.el && !r.el.value.trim()) {
          if (markFields) r.el.classList.add("is-invalid");
          return { ok: false, message: r.msg, focusEl: r.el };
        }
      }

      if (state.mode !== "return" && fTerms && !fTerms.checked) {
        if (markFields && fTermsLabel) fTermsLabel.classList.add("is-invalid");
        return { ok: false, message: "กรุณายอมรับเงื่อนไขการยืมอุปกรณ์", focusEl: fTerms };
      }

      return { ok: true, message: "พร้อมดาวน์โหลด" };
    }

    function validateOrNotify() {
      var res = checkFormReadiness(true);
      if (!res.ok) {
        showToast(res.message, "error");
        if (res.focusEl && typeof res.focusEl.scrollIntoView === "function") {
          res.focusEl.scrollIntoView({ behavior: "smooth", block: "center" });
          try { res.focusEl.focus({ preventScroll: true }); } catch (e) {}
        }
        return false;
      }
      return true;
    }

    // Build A4 HTML string (shared for PDF capture, Word export, and Print view)
    function buildOfficialSheetHtml(payload, forWord) {
      var isReturn = payload.mode === "return";
      var b = payload.borrower;
      var docTitle = isReturn
        ? "ใบส่งคืนและตรวจรับอุปกรณ์ IoT"
        : "ใบคำขอยืมอุปกรณ์เซนเซอร์ IoT";

      var dueStatusText = "";
      if (isReturn && b.dueDate && b.returnDate) {
        var dDue = new Date(b.dueDate);
        var dRet = new Date(b.returnDate);
        var diff = Math.round((dRet - dDue) / 86400000);
        if (diff > 0) dueStatusText = " (เกินกำหนด " + diff + " วัน)";
        else dueStatusText = " (ส่งคืนตรงตามกำหนด)";
      }

      var itemRowsHtml = payload.items.map(function (it, idx) {
        var condCol = isReturn
          ? '<td style="text-align:center;">' + escapeHtml(conditionLabel(it.condition)) +
            (it.note ? "<br><small>(" + escapeHtml(it.note) + ")</small>" : "") + "</td>"
          : '<td style="text-align:center;">[ &nbsp; ] ปกติ</td>';
        return (
          "<tr>" +
          '<td style="text-align:center;">' + (idx + 1) + "</td>" +
          '<td style="font-family:monospace;font-weight:bold;">' + escapeHtml(it.sku) + "</td>" +
          "<td><strong>" + escapeHtml(it.name) + "</strong>" +
          (it.nameEn ? '<br><span style="color:#475569;font-size:11px;">' + escapeHtml(it.nameEn) + "</span>" : "") +
          "</td>" +
          '<td style="text-align:center;">' + escapeHtml(it.category || "-") + "</td>" +
          '<td style="text-align:center;font-weight:bold;">' + it.qty + "</td>" +
          condCol +
          "</tr>"
        );
      }).join("");

      var returnExtraMeta = isReturn
        ? '<tr><td class="k">วันที่ส่งคืนจริง</td><td>' + escapeHtml(formatThaiDate(b.returnDate) + dueStatusText) +
          '</td><td class="k">ผู้ตรวจรับคืน</td><td>' + escapeHtml(b.inspectorName || "................................................") + "</td></tr>"
        : "";

      var noteBox = isReturn
        ? "คำรับรองการส่งคืน: ข้าพเจ้าได้ส่งคืนอุปกรณ์ตามรายการข้างต้นแก่เจ้าหน้าที่สาขาวิชาวิศวกรรมคอมพิวเตอร์เรียบร้อยแล้ว"
        : "คำรับรองผู้ยืม: ข้าพเจ้าขอรับรองว่าจะดูแลรักษาอุปกรณ์ที่ยืมให้อยู่ในสภาพสมบูรณ์ ใช้งานเฉพาะด้านการศึกษาและโครงงาน และส่งคืนตามกำหนดเวลา หากชำรุดหรือสูญหายยินดีรับผิดชอบตามระเบียบของสาขาวิชา";

      var headerBg = isReturn ? "#0f766e" : "#1e3a8a";

      if (forWord) {
        return (
          '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">' +
          '<head><meta charset="utf-8"><title>' + escapeHtml(docTitle) + "</title>" +
          "<style>" +
          "@page { size: A4; margin: 1.5cm; }" +
          "body { font-family: 'TH SarabunPSK', 'IBM Plex Sans Thai', Tahoma, sans-serif; font-size: 14pt; color: #111827; }" +
          "h1 { font-size: 18pt; margin: 0 0 4pt 0; color: " + headerBg + "; }" +
          ".sub { font-size: 12pt; color: #475569; margin: 0 0 10pt 0; }" +
          "table { width: 100%; border-collapse: collapse; margin-bottom: 10pt; font-size: 12.5pt; }" +
          "th, td { border: 1px solid #94a3b8; padding: 5pt 6pt; vertical-align: top; }" +
          "th { background-color: " + headerBg + "; color: #ffffff; }" +
          ".k { background-color: #f1f5f9; font-weight: bold; width: 18%; }" +
          ".note { border: 1px solid #cbd5e1; background: #f8fafc; padding: 8pt; font-size: 12pt; margin-bottom: 18pt; }" +
          ".sig-table td { border: none; text-align: center; padding-top: 28pt; width: 33.3%; }" +
          "</style></head><body>" +
          "<h1>" + escapeHtml(docTitle) + "</h1>" +
          '<p class="sub">สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏสวนสุนันทา | เลขที่อ้างอิง: <strong>' + escapeHtml(payload.docId) + "</strong></p>" +
          "<table>" +
          '<tr><td class="k">รหัสนักศึกษา</td><td>' + escapeHtml(b.studentId) + '</td><td class="k">ชื่อ-สกุล</td><td>' + escapeHtml(b.fullName) + "</td></tr>" +
          '<tr><td class="k">ชั้นปี</td><td>' + escapeHtml(b.yearLevel) + '</td><td class="k">เบอร์โทรศัพท์</td><td>' + escapeHtml(b.phone || "-") + "</td></tr>" +
          '<tr><td class="k">รายวิชา/โครงงาน</td><td>' + escapeHtml(b.courseOrProject || "-") + '</td><td class="k">อาจารย์ที่ปรึกษา</td><td>' + escapeHtml(b.advisor || "-") + "</td></tr>" +
          '<tr><td class="k">วันที่ยืม</td><td>' + escapeHtml(formatThaiDate(b.borrowDate)) + '</td><td class="k">กำหนดส่งคืน</td><td>' + escapeHtml(formatThaiDate(b.dueDate)) + "</td></tr>" +
          returnExtraMeta +
          '<tr><td class="k">เหตุผลในการยืม</td><td colspan="3">' + escapeHtml(b.purpose || "-") + "</td></tr>" +
          "</table>" +
          "<table><thead><tr>" +
          '<th style="width:6%;">ลำดับ</th><th style="width:12%;">รหัส</th><th>ชื่ออุปกรณ์</th><th style="width:18%;">หมวดหมู่</th><th style="width:9%;">จำนวน</th><th style="width:18%;">' + (isReturn ? "สภาพการคืน" : "ตรวจรับ") + "</th>" +
          "</tr></thead><tbody>" + itemRowsHtml + "</tbody></table>" +
          '<p><strong>สรุปรวม:</strong> ' + payload.summary.kindCount + " รายการ (จำนวนรวม " + payload.summary.totalQty + " ชิ้น)</p>" +
          '<div class="note">' + escapeHtml(noteBox) + "</div>" +
          '<table class="sig-table"><tr>' +
          "<td>ลงชื่อ .......................................<br>(" + escapeHtml(b.fullName || "ผู้ยืม/ผู้ส่งคืน") + ")<br>" + (isReturn ? "ผู้ส่งคืนอุปกรณ์" : "ผู้ยืมอุปกรณ์") + "</td>" +
          "<td>ลงชื่อ .......................................<br>(" + escapeHtml(b.advisor || "อาจารย์ที่ปรึกษา/ผู้สอน") + ")<br>ผู้อนุมัติ</td>" +
          "<td>ลงชื่อ .......................................<br>(" + escapeHtml(b.inspectorName || "เจ้าหน้าที่ห้องปฏิบัติการ") + ")<br>ผู้จ่าย / ผู้ตรวจรับ</td>" +
          "</tr></table></body></html>"
        );
      }

      return (
        '<div class="ce-bw-a4-sheet">' +
        '<div class="ce-bw-a4-head' + (isReturn ? " is-return" : "") + '">' +
        '<div><p class="ce-bw-a4-org">สาขาวิชาวิศวกรรมคอมพิวเตอร์ • คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม • มรภ.สวนสุนันทา</p>' +
        '<h2 class="ce-bw-a4-title">' + escapeHtml(docTitle) + "</h2></div>" +
        '<div class="ce-bw-a4-ref">เลขที่เอกสาร<strong>' + escapeHtml(payload.docId) + "</strong>พิมพ์/สร้าง: " + escapeHtml(formatThaiDate(todayISO())) + "</div>" +
        "</div>" +
        '<table class="ce-bw-a4-meta">' +
        '<tr><td class="k">รหัสนักศึกษา</td><td>' + escapeHtml(b.studentId) + '</td><td class="k">ชื่อ-สกุล</td><td>' + escapeHtml(b.fullName) + "</td></tr>" +
        '<tr><td class="k">ชั้นปี</td><td>' + escapeHtml(b.yearLevel) + '</td><td class="k">เบอร์โทรติดต่อ</td><td>' + escapeHtml(b.phone || "-") + "</td></tr>" +
        '<tr><td class="k">รายวิชา/โครงงาน</td><td>' + escapeHtml(b.courseOrProject || "-") + '</td><td class="k">อาจารย์ที่ปรึกษา</td><td>' + escapeHtml(b.advisor || "-") + "</td></tr>" +
        '<tr><td class="k">วันที่ยืม</td><td>' + escapeHtml(formatThaiDate(b.borrowDate)) + '</td><td class="k">กำหนดส่งคืน</td><td>' + escapeHtml(formatThaiDate(b.dueDate)) + "</td></tr>" +
        returnExtraMeta +
        '<tr><td class="k">เหตุผลในการยืม</td><td colspan="3">' + escapeHtml(b.purpose || "-") + "</td></tr>" +
        "</table>" +
        '<table class="ce-bw-a4-items' + (isReturn ? " is-return" : "") + '">' +
        "<thead><tr>" +
        '<th style="width:42px;text-align:center;">ลำดับ</th>' +
        '<th style="width:74px;">รหัส</th>' +
        "<th>รายการอุปกรณ์</th>" +
        '<th style="width:110px;text-align:center;">หมวดหมู่</th>' +
        '<th style="width:54px;text-align:center;">จำนวน</th>' +
        '<th style="width:120px;text-align:center;">' + (isReturn ? "สภาพการคืน" : "ตรวจรับ") + "</th>" +
        "</tr></thead><tbody>" + itemRowsHtml + "</tbody></table>" +
        '<p style="margin:0 0 10px;font-weight:700;">สรุปรวม: ' + payload.summary.kindCount + " รายการ (จำนวนรวมทั้งหมด " + payload.summary.totalQty + " ชิ้น)</p>" +
        '<div class="ce-bw-a4-note">' + escapeHtml(noteBox) + "</div>" +
        '<div class="ce-bw-a4-sigs">' +
        '<div class="ce-bw-a4-sig-box"><div class="ce-bw-a4-sig-line">' + escapeHtml(b.fullName || "ผู้ยืม/ผู้ส่งคืน") + "<br>" + (isReturn ? "ผู้ส่งคืนอุปกรณ์" : "ผู้ยืมอุปกรณ์") + "</div></div>" +
        '<div class="ce-bw-a4-sig-box"><div class="ce-bw-a4-sig-line">' + escapeHtml(b.advisor || "....................................") + "<br>อาจารย์ที่ปรึกษา / ผู้สอน</div></div>" +
        '<div class="ce-bw-a4-sig-box"><div class="ce-bw-a4-sig-line">' + escapeHtml(b.inspectorName || "....................................") + "<br>เจ้าหน้าที่ห้องปฏิบัติการ</div></div>" +
        "</div>" +
        "</div>"
      );
    }

    function buildBaseFilename(payload) {
      var prefix = payload.mode === "return" ? "CE-SSRU-IoT-Return" : "CE-SSRU-IoT-Borrow";
      var sid = sanitizeFilename(payload.borrower.studentId || payload.docId);
      return prefix + "-" + sid;
    }

    function exportPDF() {
      if (!validateOrNotify()) return;
      var payload = collectPayload();
      var origHtml = btnExportPdf.innerHTML;
      btnExportPdf.disabled = true;
      btnExportPdf.textContent = "กำลังสร้างไฟล์ PDF...";

      Promise.all([loadScriptOnce(CDN_HTML2CANVAS), loadScriptOnce(CDN_JSPDF)])
        .then(function () {
          var stage = document.createElement("div");
          stage.className = "ce-bw-a4-stage";
          stage.innerHTML = buildOfficialSheetHtml(payload, false);
          document.body.appendChild(stage);

          var ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
          return ready.then(function () {
            return window.html2canvas(stage, {
              scale: 2,
              backgroundColor: "#ffffff",
              useCORS: true,
              logging: false
            });
          }).then(function (canvas) {
            document.body.removeChild(stage);
            var jsPDF = window.jspdf.jsPDF;
            var pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4", compress: true });
            var pageW = pdf.internal.pageSize.getWidth();
            var pageH = pdf.internal.pageSize.getHeight();
            var imgW = pageW;
            var imgH = (canvas.height * imgW) / canvas.width;
            var imgData = canvas.toDataURL("image/jpeg", 0.92);

            var heightLeft = imgH;
            var position = 0;
            pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH, undefined, "FAST");
            heightLeft -= pageH;

            while (heightLeft > 3) {
              position = heightLeft - imgH;
              pdf.addPage();
              pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH, undefined, "FAST");
              heightLeft -= pageH;
            }

            pdf.save(buildBaseFilename(payload) + ".pdf");
            showToast("ดาวน์โหลดไฟล์ PDF เรียบร้อยแล้ว", "success");
          });
        })
        .catch(function (err) {
          showToast("สร้าง PDF ไม่สำเร็จ (" + (err && err.message ? err.message : "CDN") + ") กรุณาลอง Word หรือ พิมพ์", "error");
        })
        .finally(function () {
          btnExportPdf.disabled = false;
          btnExportPdf.innerHTML = origHtml;
        });
    }

    function exportWord() {
      if (!validateOrNotify()) return;
      var payload = collectPayload();
      var html = "\uFEFF" + buildOfficialSheetHtml(payload, true);
      var blob = new Blob([html], { type: "application/msword;charset=utf-8" });
      downloadBlob(blob, buildBaseFilename(payload) + ".doc");
      showToast("ดาวน์โหลดไฟล์ Word (.doc) เรียบร้อยแล้ว", "success");
    }

    function exportCSV() {
      if (!validateOrNotify()) return;
      var payload = collectPayload();
      var b = payload.borrower;
      var isReturn = payload.mode === "return";
      var rows = [
        ["เอกสาร", isReturn ? "ใบส่งคืนอุปกรณ์ IoT" : "ใบคำขอยืมอุปกรณ์ IoT"],
        ["เลขที่อ้างอิง", payload.docId],
        ["รหัสนักศึกษา", b.studentId],
        ["ชื่อ-สกุล", b.fullName],
        ["ชั้นปี", b.yearLevel],
        ["เบอร์โทร", b.phone],
        ["รายวิชา/โครงงาน", b.courseOrProject],
        ["อาจารย์ที่ปรึกษา", b.advisor],
        ["วันที่ยืม", b.borrowDate],
        ["กำหนดส่งคืน", b.dueDate],
        ["วันที่ส่งคืนจริง", isReturn ? b.returnDate : "-"],
        ["ผู้ตรวจรับ", isReturn ? b.inspectorName : "-"],
        ["เหตุผลในการยืม", b.purpose],
        [],
        ["ลำดับ", "รหัสอุปกรณ์", "ชื่ออุปกรณ์", "ชื่อภาษาอังกฤษ", "หมวดหมู่", "จำนวน", "สภาพอุปกรณ์", "หมายเหตุ"]
      ];

      payload.items.forEach(function (it, idx) {
        rows.push([
          idx + 1,
          it.sku,
          it.name,
          it.nameEn,
          it.category,
          it.qty,
          isReturn ? conditionLabel(it.condition) : "พร้อมยืม",
          it.note || ""
        ]);
      });

      var csv = rows.map(function (r) {
        return r.map(function (cell) {
          var s = String(cell === undefined || cell === null ? "" : cell);
          if (/[",\n\r]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
          return s;
        }).join(",");
      }).join("\r\n");

      var blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
      downloadBlob(blob, buildBaseFilename(payload) + ".csv");
      showToast("ดาวน์โหลดไฟล์ CSV เรียบร้อยแล้ว", "success");
    }

    function exportXLSX() {
      if (!validateOrNotify()) return;
      var payload = collectPayload();
      var origHtml = btnExportXlsx.innerHTML;
      btnExportXlsx.disabled = true;
      btnExportXlsx.textContent = "กำลังสร้าง Excel...";

      loadScriptOnce(CDN_XLSX)
        .then(function () {
          var XLSX = window.XLSX;
          var b = payload.borrower;
          var isReturn = payload.mode === "return";

          var itemAoA = [
            ["ลำดับ", "รหัสอุปกรณ์", "ชื่ออุปกรณ์ (TH)", "ชื่ออุปกรณ์ (EN)", "หมวดหมู่", "จำนวน", "สภาพการตรวจรับ", "หมายเหตุ"]
          ];
          payload.items.forEach(function (it, idx) {
            itemAoA.push([
              idx + 1,
              it.sku,
              it.name,
              it.nameEn,
              it.category,
              it.qty,
              isReturn ? conditionLabel(it.condition) : "ปกติ",
              it.note || ""
            ]);
          });

          var metaAoA = [
            ["หัวข้อ", "รายละเอียด"],
            ["ประเภทเอกสาร", isReturn ? "ใบส่งคืนและตรวจรับอุปกรณ์ IoT" : "ใบคำขอยืมอุปกรณ์ IoT"],
            ["เลขที่อ้างอิง", payload.docId],
            ["รหัสนักศึกษา", b.studentId],
            ["ชื่อ-สกุล", b.fullName],
            ["ชั้นปี", b.yearLevel],
            ["เบอร์โทรติดต่อ", b.phone],
            ["รายวิชา / โครงงาน", b.courseOrProject],
            ["อาจารย์ที่ปรึกษา", b.advisor],
            ["วันที่ยืม", formatThaiDate(b.borrowDate)],
            ["กำหนดส่งคืน", formatThaiDate(b.dueDate)],
            ["วันที่ส่งคืนจริง", isReturn ? formatThaiDate(b.returnDate) : "-"],
            ["ผู้ตรวจรับคืน", isReturn ? b.inspectorName : "-"],
            ["เหตุผลในการยืม", b.purpose],
            ["จำนวนรายการ", payload.summary.kindCount],
            ["จำนวนชิ้นรวม", payload.summary.totalQty]
          ];

          var wb = XLSX.utils.book_new();
          var wsItems = XLSX.utils.aoa_to_sheet(itemAoA);
          wsItems["!cols"] = [{ wch: 7 }, { wch: 11 }, { wch: 44 }, { wch: 36 }, { wch: 18 }, { wch: 9 }, { wch: 18 }, { wch: 24 }];
          var wsMeta = XLSX.utils.aoa_to_sheet(metaAoA);
          wsMeta["!cols"] = [{ wch: 22 }, { wch: 48 }];

          XLSX.utils.book_append_sheet(wb, wsItems, "รายการอุปกรณ์");
          XLSX.utils.book_append_sheet(wb, wsMeta, "ข้อมูลผู้ยืมคืน");
          XLSX.writeFile(wb, buildBaseFilename(payload) + ".xlsx");
          showToast("ดาวน์โหลดไฟล์ Excel (.xlsx) เรียบร้อยแล้ว", "success");
        })
        .catch(function () {
          showToast("โหลดโมดูล .xlsx ไม่สำเร็จ ระบบสลับเป็นดาวน์โหลด .csv ให้แทน", "error");
          exportCSV();
        })
        .finally(function () {
          btnExportXlsx.disabled = false;
          btnExportXlsx.innerHTML = origHtml;
        });
    }

    function exportJSON() {
      if (!validateOrNotify()) return;
      var payload = collectPayload();
      var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
      downloadBlob(blob, buildBaseFilename(payload) + ".json");
      showToast("บันทึกไฟล์ข้อมูล .json เรียบร้อยแล้ว (ใช้นำเข้าตอนคืนอุปกรณ์ได้)", "success");
    }

    function printSheet() {
      if (!validateOrNotify()) return;
      var payload = collectPayload();
      var printRoot = document.getElementById("ce-bw-print-root");
      if (!printRoot) {
        printRoot = document.createElement("div");
        printRoot.id = "ce-bw-print-root";
        document.body.appendChild(printRoot);
      }
      printRoot.innerHTML = buildOfficialSheetHtml(payload, false);
      window.print();
    }

    // Event Bindings
    Array.prototype.forEach.call(modeBtns, function (btn) {
      btn.addEventListener("click", function () {
        setMode(btn.getAttribute("data-tab"));
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        state.search = searchInput.value;
        applyFilter();
      });
    }

    Array.prototype.forEach.call(catBtns, function (btn) {
      btn.addEventListener("click", function () {
        Array.prototype.forEach.call(catBtns, function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        state.catFilter = btn.getAttribute("data-cat") || "all";
        applyFilter();
      });
    });

    if (btnSelectKit) {
      btnSelectKit.addEventListener("click", function () {
        getCatalogRows().forEach(function (tr) {
          var chk = tr.querySelector(".ce-bw-chk");
          if (chk) chk.checked = true;
          tr.classList.add("is-selected");
        });
        updateSummary();
        applyFilter();
        saveDraft();
        showToast("เลือกอุปกรณ์ทั้งชุด BBox-01 (23 รายการ) แล้ว", "success");
      });
    }

    if (btnClearSel) {
      btnClearSel.addEventListener("click", function () {
        getCatalogRows().forEach(function (tr) {
          var chk = tr.querySelector(".ce-bw-chk");
          var qty = tr.querySelector(".ce-bw-qty-input");
          if (chk) chk.checked = false;
          if (qty) qty.value = "1";
          tr.classList.remove("is-selected");
        });
        state.customItems = [];
        renderCustomItems();
        updateSummary();
        applyFilter();
        saveDraft();
      });
    }

    if (tbody) {
      tbody.addEventListener("change", function (e) {
        var tr = e.target.closest("tr.ce-bw-item-row");
        if (!tr) return;
        var chk = tr.querySelector(".ce-bw-chk");
        if (e.target.classList.contains("ce-bw-qty-input")) {
          var v = parseInt(e.target.value, 10);
          if (isNaN(v) || v < 1) v = 1;
          e.target.value = String(v);
          if (chk && !chk.checked) chk.checked = true;
        }
        if (chk) tr.classList.toggle("is-selected", chk.checked);
        updateSummary();
        saveDraft();
      });

      tbody.addEventListener("click", function (e) {
        var stepBtn = e.target.closest(".ce-bw-step-btn");
        if (stepBtn) {
          var tr = stepBtn.closest("tr.ce-bw-item-row");
          var qtyInput = tr.querySelector(".ce-bw-qty-input");
          var chk = tr.querySelector(".ce-bw-chk");
          var cur = parseInt(qtyInput.value, 10) || 1;
          var delta = stepBtn.getAttribute("data-step") === "up" ? 1 : -1;
          var next = Math.max(1, cur + delta);
          qtyInput.value = String(next);
          if (delta > 0 && chk && !chk.checked) {
            chk.checked = true;
            tr.classList.add("is-selected");
          }
          updateSummary();
          saveDraft();
          return;
        }

        var nameLbl = e.target.closest(".ce-bw-item-name");
        if (nameLbl) {
          var row = nameLbl.closest("tr.ce-bw-item-row");
          var box = row.querySelector(".ce-bw-chk");
          if (box) {
            box.checked = !box.checked;
            row.classList.toggle("is-selected", box.checked);
            updateSummary();
            saveDraft();
          }
        }
      });
    }

    if (btnAddCustom) {
      btnAddCustom.addEventListener("click", function () {
        var name = customNameEl ? customNameEl.value.trim() : "";
        var qty = customQtyEl ? Math.max(1, parseInt(customQtyEl.value, 10) || 1) : 1;
        if (!name) {
          showToast("กรุณาพิมพ์ชื่ออุปกรณ์เพิ่มเติมก่อนกดเพิ่ม", "error");
          if (customNameEl) customNameEl.focus();
          return;
        }
        state.customItems.push({ name: name, qty: qty, condition: "ok", note: "" });
        if (customNameEl) customNameEl.value = "";
        if (customQtyEl) customQtyEl.value = "1";
        renderCustomItems();
        updateSummary();
        saveDraft();
      });
    }

    if (customListEl) {
      customListEl.addEventListener("click", function (e) {
        var del = e.target.closest(".ce-bw-custom-del");
        if (!del) return;
        var idx = parseInt(del.getAttribute("data-idx"), 10);
        if (!isNaN(idx)) {
          state.customItems.splice(idx, 1);
          renderCustomItems();
          updateSummary();
          saveDraft();
        }
      });
    }

    [fStudentId, fFullName, fYear, fPhone, fCourse, fAdvisor, fBorrowDate, fDueDate, fReturnDate, fInspector, fPurpose, fTerms]
      .forEach(function (el) {
        if (!el) return;
        el.addEventListener("input", function () {
          el.classList.remove("is-invalid");
          if (el === fTerms && fTermsLabel) fTermsLabel.classList.remove("is-invalid");
          updateSummary();
          saveDraft();
        });
        el.addEventListener("change", function () {
          el.classList.remove("is-invalid");
          if (el === fTerms && fTermsLabel) fTermsLabel.classList.remove("is-invalid");
          updateSummary();
          saveDraft();
        });
      });

    Array.prototype.forEach.call(durBtns, function (btn) {
      btn.addEventListener("click", function () {
        var days = parseInt(btn.getAttribute("data-days"), 10) || 7;
        var base = fBorrowDate && fBorrowDate.value ? fBorrowDate.value : todayISO();
        if (fDueDate) fDueDate.value = addDaysISO(base, days);
        updateSummary();
        saveDraft();
      });
    });

    function handleJsonFile(file) {
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var parsed = JSON.parse(String(reader.result || ""));
          if (applyImportedData(parsed, true)) {
            showToast("นำเข้าข้อมูลจากไฟล์ " + file.name + " สำเร็จ", "success");
          }
        } catch (err) {
          showToast("ไฟล์ .json ไม่ถูกต้องหรือไม่ใช่ไฟล์จากระบบนี้", "error");
        }
      };
      reader.readAsText(file, "utf-8");
    }

    if (jsonInput) {
      jsonInput.addEventListener("change", function () {
        if (jsonInput.files && jsonInput.files[0]) {
          handleJsonFile(jsonInput.files[0]);
          jsonInput.value = "";
        }
      });
    }

    if (importBox) {
      importBox.addEventListener("dragover", function (e) {
        e.preventDefault();
        importBox.classList.add("is-dragover");
      });
      importBox.addEventListener("dragleave", function () {
        importBox.classList.remove("is-dragover");
      });
      importBox.addEventListener("drop", function (e) {
        e.preventDefault();
        importBox.classList.remove("is-dragover");
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleJsonFile(e.dataTransfer.files[0]);
        }
      });
    }

    if (btnResetAll) {
      btnResetAll.addEventListener("click", function () {
        localStorage.removeItem(STORAGE_KEY);
        state.docId = generateDocId();
        state.customItems = [];
        getCatalogRows().forEach(function (tr) {
          var chk = tr.querySelector(".ce-bw-chk");
          var qty = tr.querySelector(".ce-bw-qty-input");
          var cond = tr.querySelector(".ce-bw-cond-select");
          var note = tr.querySelector(".ce-bw-cond-note");
          if (chk) chk.checked = false;
          if (qty) qty.value = "1";
          if (cond) cond.value = "ok";
          if (note) note.value = "";
          tr.classList.remove("is-selected");
        });
        [fStudentId, fFullName, fYear, fPhone, fCourse, fAdvisor, fInspector, fPurpose].forEach(function (el) {
          if (el) el.value = "";
        });
        if (fBorrowDate) fBorrowDate.value = todayISO();
        if (fDueDate) fDueDate.value = addDaysISO(todayISO(), 7);
        if (fReturnDate) fReturnDate.value = todayISO();
        if (fTerms) fTerms.checked = false;
        clearValidationMarks();
        renderCustomItems();
        applyFilter();
        updateSummary();
        showToast("ล้างข้อมูลแบบฟอร์มทั้งหมดแล้ว");
      });
    }

    if (btnExportPdf) btnExportPdf.addEventListener("click", exportPDF);
    if (btnExportDoc) btnExportDoc.addEventListener("click", exportWord);
    if (btnExportXlsx) btnExportXlsx.addEventListener("click", exportXLSX);
    if (btnExportCsv) btnExportCsv.addEventListener("click", exportCSV);
    if (btnExportJson) btnExportJson.addEventListener("click", exportJSON);
    if (btnExportPrint) btnExportPrint.addEventListener("click", printSheet);

    enhanceCatalogRows();
    restoreDraft();
    applyFilter();
    updateSummary();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
