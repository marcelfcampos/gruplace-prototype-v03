
        // ============================================================
        // 2. GERENCIAMENTO DE ABAS (TABS) INTERATIVAS
        // ============================================================
        const tabButtons = document.querySelectorAll('.tab-btn');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove o estado ativo de todas as abas
                tabButtons.forEach(btn => {
                    btn.classList.remove('tab-btn--active');
                });

                // Adiciona o estado ativo na aba clicada
                button.classList.add('tab-btn--active');
            });
        });
    