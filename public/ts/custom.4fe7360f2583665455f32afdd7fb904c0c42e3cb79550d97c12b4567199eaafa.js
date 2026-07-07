(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".right-sidebar");
    if (!sidebar) return;
    const closeBtn = document.createElement("button");
    closeBtn.className = "right-sidebar-close";
    closeBtn.innerHTML = "\u2715";
    closeBtn.setAttribute("aria-label", "\u5173\u95ED\u9762\u677F");
    sidebar.insertBefore(closeBtn, sidebar.firstChild);
    const divider = document.createElement("hr");
    divider.className = "right-sidebar-close-divider";
    sidebar.insertBefore(divider, sidebar.firstChild.nextSibling);
    const toggleBtn = document.createElement("button");
    toggleBtn.id = "right-sidebar-toggle";
    toggleBtn.textContent = "\u5DE5\u5177\u7BB1";
    toggleBtn.setAttribute("aria-label", "\u6253\u5F00\u53F3\u4FA7\u9762\u677F");
    document.body.appendChild(toggleBtn);
    const overlay = document.createElement("div");
    overlay.className = "right-sidebar-overlay";
    document.body.appendChild(overlay);
    function openPanel() {
      sidebar.classList.add("right-sidebar-open");
      overlay.classList.add("visible");
    }
    function closePanel() {
      sidebar.classList.remove("right-sidebar-open");
      overlay.classList.remove("visible");
    }
    function togglePanel() {
      if (sidebar.classList.contains("right-sidebar-open")) {
        closePanel();
      } else {
        openPanel();
      }
    }
    toggleBtn.addEventListener("click", openPanel);
    closeBtn.addEventListener("click", closePanel);
    overlay.addEventListener("click", closePanel);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && sidebar.classList.contains("right-sidebar-open")) {
        closePanel();
      }
    });
  });
})();
