
        /* ============================================================
           2. SELEÇÃO DE CHIPS DE FILTRO (Toggle de Estado Ativo/Inativo)
           ============================================================ */
        const filterChips = document.querySelectorAll('.filter-chip');

        filterChips.forEach(chip => {
            chip.addEventListener('click', () => {
                chip.classList.toggle('filter-chip-active');
            });
        });

        /* ============================================================
           3. AÇÃO DO BOTÃO "LIMPAR TUDO"
           ============================================================ */
        const clearAllBtn = document.getElementById('clear-all');
        clearAllBtn.addEventListener('click', () => {
            filterChips.forEach(chip => {
                chip.classList.remove('filter-chip-active');
            });
        });

        /* ============================================================
           4. AÇÃO DO BOTÃO "APLICAR FILTROS"
           ============================================================ */
        const applyBtn = document.getElementById('apply-filters');
        applyBtn.addEventListener('click', () => {
            window.location.href = '3-inicio-feed.html';
        });

        /* ============================================================
           5. AÇÃO DO BOTÃO VOLTAR
           ============================================================ */
        const backBtn = document.querySelector('.back-button');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                window.location.href = '3-inicio-feed.html';
            });
        }
