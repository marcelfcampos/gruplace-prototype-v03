
        // ============================================================
        // 1. INTERATIVIDADE DO BOTÃO SEGUIR
        // ============================================================
        const followBtn = document.getElementById('btn-follow');
        followBtn.addEventListener('click', () => {
            if (followBtn.textContent.includes('Seguir')) {
                followBtn.textContent = 'Seguindo';
                followBtn.classList.add('store-follow-btn--following');
            } else {
                followBtn.textContent = '+ Seguir';
                followBtn.classList.remove('store-follow-btn--following');
            }
        });

        // ============================================================
        // 2. INTERATIVIDADE DAS ABAS (TABS)
        // ============================================================
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContent = document.getElementById('tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove estilo ativo de todas as abas
                tabButtons.forEach(btn => {
                    btn.classList.remove('tab-btn--active');
                });

                // Ativa a aba clicada
                button.classList.add('tab-btn--active');

                // Simula alteração de conteúdo baseada na aba selecionada
                const tabName = button.getAttribute('data-tab');
                if (tabName === 'visao-geral') {
                    tabContent.innerHTML = `
                        <section class="store-highlights">
                            <h2 class="section-title store-highlights-title">Destaques da loja</h2>
                            <div class="highlight-card">
                                <div class="highlight-card-media">
                                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80" alt="Nova coleção verão 2025" class="highlight-card-image">
                                    <div class="highlight-card-badge">Lançamento</div>
                                </div>
                                <div class="highlight-card-body">
                                    <h3 class="highlight-card-title">Nova coleção verão 2025</h3>
                                    <p class="highlight-card-text">Confira as peças da nova coleção da Zara.</p>
                                </div>
                            </div>
                            <div class="carousel-dots">
                                <span class="carousel-dot carousel-dot--active"></span>
                                <span class="carousel-dot"></span>
                                <span class="carousel-dot"></span>
                                <span class="carousel-dot"></span>
                            </div>
                        </section>
                        <section class="store-about">
                            <h2 class="section-title store-about-title">Sobre a loja</h2>
                            <p class="store-about-text">A Zara é uma marca de moda internacional que oferece roupas, calçados e acessórios com estilo, qualidade e autenticidade.</p>
                        </section>
                    `;
                } else {
                    tabContent.innerHTML = `
                        <div class="tab-empty-state">
                            <p class="tab-empty-state-text">Nenhum item encontrado em "${button.textContent}" no momento.</p>
                        </div>
                    `;
                }
            });
        });
    

/* ============================================================
   BOTÃO VOLTAR — volta para a tela 3
   ============================================================ */
(function () {
    const backBtn = document.querySelector('.store-back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = '3-inicio-feed.html';
        });
    }
})();
