
        // ============================================================
        // 2. INTERATIVIDADE DAS PILLS DE INTERESSES (alternar seleção)
        // ============================================================
        const interestPills = document.querySelectorAll('.interest-pill');
        interestPills.forEach(pill => {
            pill.addEventListener('click', () => {
                pill.classList.toggle('interest-pill--selected');
            });
        });

        // ============================================================
        // 3. SIMULAÇÃO DE CLIQUE NO BOTÃO "EDITAR INTERESSES"
        // ============================================================
        const editInterestsBtn = document.getElementById('edit-interests');
        editInterestsBtn.addEventListener('click', () => {
            alert('Modo de edição de interesses ativado!');
        });

        // ============================================================
        // 4. SIMULAÇÃO DE CLIQUE NO BOTÃO "VER TODAS" AS LOJAS
        // ============================================================
        const viewAllStoresBtn = document.getElementById('view-all-stores');
        viewAllStoresBtn.addEventListener('click', () => {
            alert('Exibindo a lista completa de lojas seguidas.');
        });

        // ============================================================
        // 5. SIMULAÇÃO DE CLIQUE NO BOTÃO "SAIR"
        // ============================================================
        const logoutBtn = document.getElementById('logout-btn');
        logoutBtn.addEventListener('click', () => {
            if (confirm('Deseja realmente sair da sua conta?')) {
                alert('Você saiu da conta com sucesso.');
            }
        });

// ============================================================
// 6. LOJAS SEGUIDAS — contador e lista vindos do localStorage
// ============================================================
(function () {
    const Follow = window.GruplaceFollow;
    const carrossel = document.querySelector('.store-carousel');
    const statEl = document.querySelector('.profile-stats .profile-stat-item .profile-stat-value');
    if (!Follow || !carrossel) return;

    function criarLogo(id, nome) {
        const logo = document.createElement('div');
        if (id === 'zara') {
            logo.className = 'store-logo store-logo--dark store-logo--zara';
            logo.textContent = 'ZARA';
        } else if (id === 'sephora') {
            logo.className = 'store-logo store-logo--dark store-logo--sephora';
            logo.textContent = 'S';
        } else if (id === 'renner') {
            logo.className = 'store-logo store-logo--light store-logo--renner';
            logo.textContent = 'R';
        } else if (['nike', 'adidas', 'natura', 'madero'].includes(id)) {
            logo.className = 'store-logo store-logo--light' + (id === 'nike' ? ' store-logo--nike' : '');
            const img = document.createElement('img');
            img.src = 'assets/img/marcas/logo-' + id + '.svg';
            img.alt = nome;
            img.className = 'store-logo-icon';
            logo.appendChild(img);
        } else {
            logo.className = 'store-logo store-logo--dark';
            logo.textContent = nome.charAt(0).toUpperCase();
        }
        return logo;
    }

    function render() {
        const lojas = Follow.getAll();
        if (statEl) statEl.textContent = String(lojas.length);
        carrossel.innerHTML = '';
        if (lojas.length === 0) {
            const vazio = document.createElement('span');
            vazio.className = 'store-carousel-label';
            vazio.textContent = 'Você ainda não segue nenhuma loja.';
            carrossel.appendChild(vazio);
            return;
        }
        lojas.forEach(loja => {
            const item = document.createElement('div');
            item.className = 'store-carousel-item';
            item.appendChild(criarLogo(loja.id, loja.nome));
            const label = document.createElement('span');
            label.className = 'store-carousel-label';
            label.textContent = loja.nome;
            item.appendChild(label);
            carrossel.appendChild(item);
        });
    }

    render();
    Follow.onChange(render);
})();

// ============================================================
// 7. CONTADOR DE FAVORITOS — vindo do localStorage (GruplaceFavorites)
// ============================================================
(function () {
    const Fav = window.GruplaceFavorites;
    const item = document.querySelector('.profile-stat-item--bordered .profile-stat-value');
    if (!Fav || !item) return;

    function atualizar() {
        item.textContent = String(Fav.getAll().length);
    }
    atualizar();
    Fav.onChange(atualizar);
})();

// ============================================================
// 8. INTERESSES — lista e contador vindos do localStorage
// ============================================================
(function () {
    const Int = window.GruplaceInterests;
    const container = document.querySelector('.interest-pills');
    if (!Int || !container) return;

    const statItem = Array.from(document.querySelectorAll('.profile-stat-item')).find(el => {
        const l = el.querySelector('.profile-stat-label');
        return l && l.textContent.trim() === 'Interesses';
    });
    const statValue = statItem && statItem.querySelector('.profile-stat-value');

    function render() {
        const lista = Int.getAll();
        if (statValue) statValue.textContent = String(lista.length);
        container.innerHTML = '';
        if (lista.length === 0) {
            const vazio = document.createElement('span');
            vazio.className = 'store-carousel-label';
            vazio.textContent = 'Você ainda não selecionou nenhum interesse.';
            container.appendChild(vazio);
            return;
        }
        lista.forEach(i => {
            const pill = document.createElement('span');
            pill.className = 'interest-pill';
            pill.textContent = i.nome;
            container.appendChild(pill);
        });
    }

    render();
    Int.onChange(render);
})();
