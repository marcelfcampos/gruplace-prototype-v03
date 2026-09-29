        /* ============================================================
           1. ALTERNAR ESTADO DE SEGUIR LOJA
           ============================================================ */
        const followBtn =
            document.getElementById('btn-follow');

        followBtn.addEventListener('click', () => {

            if (followBtn.textContent.includes('Seguir')) {

                followBtn.textContent = 'Seguindo';

                followBtn.classList.add(
                    'follow-button-active'
                );

            } else {

                followBtn.textContent = '+ Seguir';

                followBtn.classList.remove(
                    'follow-button-active'
                );
            }
        });


        /* ============================================================
           2. SINCRONIZAR FAVORITO DO TOPO COM O RODAPÉ
           ============================================================ */
        const topFavBtn =
            document.getElementById('btn-top-favorite');

        const footerSaveBtn =
            document.getElementById('btn-footer-save');

        let isFavorited = false;


        function toggleFavorite() {

            isFavorited = !isFavorited;

            const topSvg =
                topFavBtn.querySelector('svg');

            const footerSvg =
                footerSaveBtn.querySelector('svg');

            const footerText =
                footerSaveBtn.querySelector('span');


            if (isFavorited) {

                topSvg.outerHTML =
                    `<svg xmlns="http://www.w3.org/2000/svg"
                        class="icon-md icon-favorite-filled"
                        viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                        2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                        C13.09 3.81 14.76 3 16.5 3
                        19.58 3 22 5.42 22 8.5
                        c0 3.78-3.4 6.86-8.55 11.54
                        L12 21.35z"/>
                    </svg>`;

                footerSvg.outerHTML =
                    `<svg xmlns="http://www.w3.org/2000/svg"
                        class="icon-md icon-favorite-filled"
                        viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                        2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                        C13.09 3.81 14.76 3 16.5 3
                        19.58 3 22 5.42 22 8.5
                        c0 3.78-3.4 6.86-8.55 11.54
                        L12 21.35z"/>
                    </svg>`;

                footerText.textContent = 'Salvo';

                footerSaveBtn.classList.add(
                    'footer-action-button-active'
                );

            } else {

                topFavBtn.querySelector('svg').outerHTML =
                    `<svg xmlns="http://www.w3.org/2000/svg"
                        class="icon-md"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364
                            L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364
                            L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>`;

                footerSaveBtn.querySelector('svg').outerHTML =
                    `<svg xmlns="http://www.w3.org/2000/svg"
                        class="icon-md footer-action-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364
                            L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364
                            L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>`;

                footerText.textContent = 'Salvar';

                footerSaveBtn.classList.remove(
                    'footer-action-button-active'
                );
            }
        }


        topFavBtn.addEventListener(
            'click',
            toggleFavorite
        );

        footerSaveBtn.addEventListener(
            'click',
            toggleFavorite
        );


        /* ============================================================
           3. SIMULAÇÃO DE COMPARTILHAMENTO
           ============================================================ */
        const handleShare = () => {

            if (navigator.share) {

                navigator.share({
                    title: (document.querySelector('.product-title') || document.body).textContent.trim(),
                    text: 'Confira este produto incrível no gruplace!',
                    url: window.location.href,
                }).catch(() => { });

            } else {

                alert(
                    'Link copiado para a área de transferência!'
                );
            }
        };


        document
            .getElementById('btn-top-share')
            .addEventListener(
                'click',
                handleShare
            );

        document
            .getElementById('btn-footer-share')
            .addEventListener(
                'click',
                handleShare
            );

        /* ============================================================
           4. AÇÃO DO BOTÃO VOLTAR
           ============================================================ */
        const backBtn = document.querySelector('.hero-icon-button[aria-label="Voltar"]');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                window.location.href = '3-inicio-feed.html';
            });
        }

        /* ============================================================
           5. BOTÃO VER NA LOJA
           ============================================================ */
        const ctaBtn = document.querySelector('.cta-button');
        if (ctaBtn) {
            ctaBtn.addEventListener('click', () => {
                window.location.href = (window.LOJA_DESTINO || '7-pagina-da-loja-nike.html');
            });
        }


/* ============================================================
   6. PRODUTO DINÂMICO — preenche a tela conforme a URL
   ============================================================ */
(function () {
    const LOJAS = {
        nike:    '7-pagina-da-loja-nike.html',
        sephora: '7-pagina-da-loja-sephora.html',
        zara:    '7-pagina-da-loja-zara.html',
        adidas:  '7-pagina-da-loja-adidas.html',
        renner:  '7-pagina-da-loja-renner.html',
        natura:  '7-pagina-da-loja-natura.html',
        madero:  '7-pagina-da-loja-madero.html'
    };
    const p = new URLSearchParams(window.location.search);
    const marca = (p.get('marca') || 'nike').trim();
    window.LOJA_DESTINO = LOJAS[marca.toLowerCase()] || LOJAS.nike;

    if (!p.get('marca')) return; // sem parâmetros: mantém o produto Nike do HTML

    const titulo = p.get('titulo') || '';
    const preco = p.get('preco') || '';
    const desconto = p.get('desconto') || '';
    const img = p.get('img') || '';
    const alt = p.get('alt') || titulo;

    const set = (sel, texto) => {
        const el = document.querySelector(sel);
        if (el && texto) el.textContent = texto;
    };
    set('.store-name', marca);
    set('.product-title', titulo);
    set('.price-value', preco);

    const imgEl = document.getElementById('product-img');
    if (imgEl) {
        try {
            const u = new URL(img, window.location.href);
            if (img && ['http:', 'https:', 'file:'].includes(u.protocol)) imgEl.src = img;
        } catch (e) { /* mantém a imagem do HTML */ }
        imgEl.alt = alt;
    }

    const descEl = Array.from(document.querySelectorAll('span, div, p'))
        .find(e => e.children.length === 0 && /OFF/i.test(e.textContent));
    if (descEl) {
        if (desconto) descEl.textContent = desconto;
        else descEl.style.display = 'none';
    }

    const texto = Array.from(document.querySelectorAll('p'))
        .find(e => e.textContent.includes('Air Force'));
    if (texto) {
        texto.textContent = titulo + ' da ' + marca + '. Confira os detalhes e as ofertas na loja.';
    }

    document.title = 'gruplace - ' + titulo;
})();
