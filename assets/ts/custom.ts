/**
 * 右侧边栏折叠面板 交互逻辑
 */

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.right-sidebar');
    if (!sidebar) return;

    /* ─── 创建关闭按钮 ─── */
    const closeBtn = document.createElement('button');
    closeBtn.className = 'right-sidebar-close';
    closeBtn.innerHTML = '✕';
    closeBtn.setAttribute('aria-label', '关闭面板');
    sidebar.insertBefore(closeBtn, sidebar.firstChild);

    /* ─── 创建关闭按钮下方分隔线 ─── */
    const divider = document.createElement('hr');
    divider.className = 'right-sidebar-close-divider';
    sidebar.insertBefore(divider, sidebar.firstChild.nextSibling);

    /* ─── 创建开关按钮（页面右侧浮动） ─── */
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'right-sidebar-toggle';
    toggleBtn.textContent = '工具箱';
    toggleBtn.setAttribute('aria-label', '打开右侧面板');
    document.body.appendChild(toggleBtn);

    /* ─── 创建遮罩层 ─── */
    const overlay = document.createElement('div');
    overlay.className = 'right-sidebar-overlay';
    document.body.appendChild(overlay);

    /* ─── 打开面板 ─── */
    function openPanel() {
        sidebar.classList.add('right-sidebar-open');
        overlay.classList.add('visible');
    }

    /* ─── 关闭面板 ─── */
    function closePanel() {
        sidebar.classList.remove('right-sidebar-open');
        overlay.classList.remove('visible');
    }

    /* ─── 切换面板 ─── */
    function togglePanel() {
        if (sidebar.classList.contains('right-sidebar-open')) {
            closePanel();
        } else {
            openPanel();
        }
    }

    /* ─── 事件绑定 ─── */
    toggleBtn.addEventListener('click', togglePanel);
    closeBtn.addEventListener('click', closePanel);
    overlay.addEventListener('click', togglePanel);

    /* Esc 键关闭 */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('right-sidebar-open')) {
            closePanel();
        }
    });
});
