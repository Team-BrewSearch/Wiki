(function() {
    'use strict';

    const PAGES = [
        { id: 'home',    label: 'Home',     file: 'DisgaeaDS/disgaeads.html' },
        { id: 'dsarcfl', label: 'DSARCFL', file: 'DisgaeaDS/archive/dsarcfl.html', tag: 'archive' },
        { id: 'dseq',    label: 'DSEQ',    file: 'DisgaeaDS/archive/dseq.html',    tag: 'music' },
        { id: 'sbnk',    label: 'SBNK',    file: 'DisgaeaDS/audio/sbnk.html',      tag: 'bank' },
        { id: 'sseq',    label: 'SSEQ',    file: 'DisgaeaDS/audio/sseq.html',      tag: 'sequence' },
        { id: 'strm',    label: 'STRM',    file: 'DisgaeaDS/audio/strm.html',      tag: 'stream' },
        { id: 'swar',    label: 'SWAR',    file: 'DisgaeaDS/audio/swar.html',      tag: 'wave archive' },
        { id: 'swav',    label: 'SWAV',    file: 'DisgaeaDS/audio/swav.html',      tag: 'wave' },
        { id: 'imy',     label: 'IMY',     file: 'DisgaeaDS/compression/imy.html', tag: 'image' },
        { id: 'mpd',     label: 'MPD',     file: 'DisgaeaDS/map/mpd.html',         tag: 'map' },
        { id: 'mpds',    label: 'MPDS',    file: 'DisgaeaDS/map/mpds.html',        tag: 'compressed' }
    ];

    function getRelativePath(targetFile) {
        const currentPath = window.location.pathname;
        const currentParts = currentPath.split('/').filter(function(p) { return p.length > 0; });
        const targetParts = targetFile.split('/').filter(function(p) { return p.length > 0; });

        const disgaeaIdx = currentParts.indexOf('DisgaeaDS');
        let currentDepth = 0;
        if (disgaeaIdx !== -1) {
            currentDepth = currentParts.length - disgaeaIdx - 1;
        } else if (currentParts[currentParts.length - 1] !== 'index.html') {
            const lastSegment = currentParts[currentParts.length - 1] || '';
            const looksLikeFile = lastSegment.includes('.');
            currentDepth = (currentPath.endsWith('/') || !looksLikeFile) ? 0 : 1;
        }

        let up = currentDepth;
        let down = targetParts.slice();
        if (disgaeaIdx !== -1 && targetParts[0] === 'DisgaeaDS') {
            up = currentDepth - 1;
            down = targetParts.slice(1);
        }

        let result = '';
        for (let i = 0; i < up; i++) {
            result += '../';
        }
        for (let i = 0; i < down.length; i++) {
            result += down[i];
            if (i < down.length - 1) {
                result += '/';
            }
        }

        return result || './';
    }

    function buildSidebar() {
        const current = window.location.pathname.split('/').pop() || 'index.html';
        const indexRel = getRelativePath('index.html');

        let linksHtml = '';
        PAGES.forEach(function(page) {
            const relHref = getRelativePath(page.file);
            const isActive = current === page.file.split('/').pop();
            const activeClass = isActive ? ' active' : '';
            const ariaCurrent = isActive ? ' aria-current="page"' : '';
            const tagHtml = page.tag ? '<span class="item-tag">' + page.tag + '</span>' : '';
            linksHtml += '<a class="sidebar-item' + activeClass + '" href="' + relHref + '"' + ariaCurrent + '><span class="item-label">' + page.label + '</span>' + tagHtml + '</a>';
        });

        return '<a class="skip-link" href="#main">Skip to content</a>' +
            '<button class="sidebar-toggle" id="sidebarToggle" aria-label="Toggle navigation">' +
            '<span class="menu-icon">☰</span><span class="close-icon">✕</span></button>' +
            '<div class="sidebar-overlay" id="sidebarOverlay"></div>' +
            '<nav class="sidebar" id="sidebar" role="navigation" aria-label="Main navigation">' +
            '<div class="sidebar-brand">' +
            '<a href="' + indexRel + '">' +
            '<span class="brand-icon">📖</span>' +
            '<span>BrewSearch Reverse Engineering Wiki</span>' +
            '</a></div>' +
            '<div class="sidebar-nav">' +
            '<div class="sidebar-section">' +
            '<div class="sidebar-section-title">Disgaea DS</div>' + linksHtml +
            '</div></div></nav>';
    }

    function injectLayout() {
        const content = document.getElementById('content');
        if (!content) return;

        document.body.insertAdjacentHTML('afterbegin', buildSidebar());

        const main = document.createElement('main');
        main.className = 'main';
        main.id = 'main';
        main.setAttribute('role', 'main');
        main.setAttribute('tabindex', '-1');
        content.parentNode.insertBefore(main, content);
        main.appendChild(content);
    }

    function toggleSidebar() {
        document.body.classList.toggle('sidebar-open');
    }

    function closeSidebar() {
        document.body.classList.remove('sidebar-open');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectLayout);
    } else {
        injectLayout();
    }

    document.addEventListener('click', function(e) {
        if (e.target.id === 'sidebarToggle' || e.target.closest('#sidebarToggle')) {
            toggleSidebar();
        }
        if (e.target.id === 'sidebarOverlay') {
            closeSidebar();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSidebar();
        }
    });
})();