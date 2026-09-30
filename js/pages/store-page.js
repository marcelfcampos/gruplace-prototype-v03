
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
        const tabPanels = document.querySelectorAll('#tab-content [data-panel]');

        function abrirAba(nome) {
            tabButtons.forEach(btn => {
                const ativa = btn.dataset.tab === nome;
                btn.classList.toggle('tab-btn--active', ativa);
                btn.classList.toggle('tab-btn--hoverable', !ativa);
            });
            tabPanels.forEach(painel => {
                painel.style.display = painel.dataset.panel === nome ? '' : 'none';
            });
        }

        tabButtons.forEach(button => {
            button.addEventListener('click', () => abrirAba(button.dataset.tab));
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

/* ============================================================
   SEGUIR SINCRONIZADO v3 — usa o mesmo estado do feed (GruplaceFollow)
   ============================================================ */
(function () {
    const Follow = window.GruplaceFollow;
    const original = document.getElementById('btn-follow');
    const tituloEl = document.querySelector('.store-title');
    if (!original || !tituloEl) return;
    if (!Follow) {
        console.error('GruplaceFollow não carregou: confira a tag js/shared/follow-store.js nesta página.');
        return;
    }
    // Clona o botão para remover o handler antigo que só troca o texto.
    const btn = original.cloneNode(true);
    original.replaceWith(btn);

    const nome = tituloEl.textContent.trim();
    const id = Follow.criarId(nome);
    const aplicar = () => {
        const ativo = Follow.has(id);
        btn.textContent = ativo ? 'Seguindo' : '+ Seguir';
        btn.classList.toggle('store-follow-btn--following', ativo);
        btn.setAttribute('aria-pressed', ativo ? 'true' : 'false');
    };
    aplicar();
    btn.addEventListener('click', () => {
        Follow.toggle({ id: id, nome: nome });
        aplicar();
    });
    Follow.onChange(aplicar);
    console.log('[seguir] loja:', nome, '| id:', id, '| seguindo:', Follow.has(id));
})();
