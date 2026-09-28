        /* ============================================================
           2. BOTÃO "COMEÇAR"
           ============================================================ */

        const startButton =
            document.getElementById('start-btn');

        startButton.addEventListener('click', () => {

            window.location.href = '2-primeiro-acesso-interesses.html';

        });

        /* ============================================================
           3. LINK "JÁ TENHO UMA CONTA"
           ============================================================ */

        const loginButton =
            document.getElementById('login-link');

        loginButton.addEventListener('click', () => {

            alert(
                'Redirecionando para a tela de login...'
            );

        });
