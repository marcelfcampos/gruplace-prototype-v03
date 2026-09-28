
        // ============================================================
        // 1. FUNCIONALIDADE DE BUSCA DINÂMICA POR LOJAS
        // ============================================================

        const searchInput =
            document.getElementById('search-input');

        const storeCards =
            document.querySelectorAll('.store-card');

        searchInput.addEventListener('input', (e) => {

            const term =
                e.target.value.toLowerCase().trim();

            storeCards.forEach(card => {

                const storeName =
                    card.querySelector('h3')
                        .textContent
                        .toLowerCase();

                const storeCategory =
                    card.querySelector('p')
                        .textContent
                        .toLowerCase();

                if (
                    storeName.includes(term) ||
                    storeCategory.includes(term)
                ) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });


        // ============================================================
        // 2. INTERATIVIDADE DOS BOTÕES DE CATEGORIA
        // ============================================================

        const categoryBtns =
            document.querySelectorAll('.category-btn');

        categoryBtns.forEach(btn => {

            btn.addEventListener('click', () => {

                categoryBtns.forEach(b => {

                    b.querySelector('.category-icon')
                        .classList
                        .remove('category-icon--selected');

                });

                btn.querySelector('.category-icon')
                    .classList
                    .add('category-icon--selected');

                const catName =
                    btn.querySelector('span').textContent;

                searchInput.value = catName;

                searchInput.dispatchEvent(
                    new Event('input')
                );
            });
        });


        // ============================================================
        // 3. CLIQUE NOS CARDS DE LOJAS EM DESTAQUE
        // ============================================================

        storeCards.forEach(card => {

            card.addEventListener('click', () => {

                const storeName =
                    card.querySelector('h3').textContent;

                alert(
                    `Você clicou na loja: ${storeName}`
                );
            });
        });

