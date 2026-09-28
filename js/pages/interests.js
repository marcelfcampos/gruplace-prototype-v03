
        /* ============================================================
           2. SELEÇÃO DOS INTERESSES
           ============================================================ */

        const interestPills =
            document.querySelectorAll('.interest-pill');

        interestPills.forEach(pill => {

            pill.addEventListener('click', () => {

                pill.classList.toggle('is-selected');

            });

        });


        /* ============================================================
           3. AÇÃO DO BOTÃO VOLTAR
           ============================================================ */

        document.getElementById('back-btn').addEventListener('click', () => {

            window.location.href = 'index.html';

        });


        /* ============================================================
           4. AÇÃO DO BOTÃO CONTINUAR
           ============================================================ */

        document.getElementById('continue-btn').addEventListener('click', () => {

            const selected =
                document.querySelectorAll('.interest-pill.is-selected');

            const interests =
                Array.from(selected).map(item => item.textContent.trim());

            if (interests.length === 0) {

                alert(
                    'Por favor, selecione pelo menos um interesse para continuar.'
                );

            } else {

                window.location.href = '3-inicio-feed.html';

            }

        });

