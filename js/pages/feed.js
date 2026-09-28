/* ============================================================
           1. ÍCONES DE NAVEGAÇÃO — fonte única
           ============================================================ */
        const NAV_ICONS = {
            inicio: `            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 10.5 12 3l9 7.5"></path>
                <path d="M5 9.8V21h14V9.8"></path>
            </svg>`,
            lojas: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" aria-hidden="true">
                <path d="M3 9l1.5-5h15L21 9"></path>
                <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"></path>
                <path d="M9 20v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6"></path>
                <path d="M3 9h18"></path>
            </svg>`,
            favoritos: `<svg xmlns="http://www.w3.org/2000/svg" class="nav-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
            ia: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                <path d="M12 12l2.1 12.1"></path>
                <path d="M12 12l4.3-8.6"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>`,
            perfil: `<svg xmlns="http://www.w3.org/2000/svg" class="nav-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="9" r="3.4"></circle><path d="M5 20c1.4-3.2 4-4.6 7-4.6s5.6 1.4 7 4.6"></path></svg>`
        };
        document.querySelectorAll('[data-nav-icon]').forEach(icon => {
            const name = icon.dataset.navIcon;

            if (NAV_ICONS[name]) {
                icon.innerHTML = NAV_ICONS[name];
            }
        });

        /* ============================================================
           2. FAVORITAR
           ============================================================ */
        document.querySelectorAll('article button[aria-label="Favoritar"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const svg = btn.querySelector('svg');
                const ativo = svg.classList.toggle('favorite-icon-filled');
                svg.classList.toggle('favorite-icon-empty', !ativo);
                btn.setAttribute('aria-pressed', ativo ? 'true' : 'false');
            });
        });

        /* ============================================================
           3. BOTÃO DE FILTROS
           ============================================================ */
        const filterButton = document.querySelector('.filter-button');
        if (filterButton) {
            filterButton.addEventListener('click', () => {
                window.location.href = '4-filtro-do-feed-aberto.html';
            });
        }
