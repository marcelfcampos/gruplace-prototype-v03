
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
