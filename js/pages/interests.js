/* Quando aberta pelo perfil (?origem=perfil), Voltar e Continuar retornam ao perfil */
const ORIGEM_PERFIL = new URLSearchParams(window.location.search).get('origem') === 'perfil';


        /* ============================================================
           2. SELEÇÃO DOS INTERESSES
           ============================================================ */

        const interestPills =
            document.querySelectorAll('.interest-pill');

        interestPills.forEach(pill => {

            pill.addEventListener('click', () => {

                pill.classList.toggle('is-selected');
                salvarInteresses();

            });

        });


        /* ============================================================
           3. AÇÃO DO BOTÃO VOLTAR
           ============================================================ */

        document.getElementById('back-btn').addEventListener('click', () => {

            window.location.href = ORIGEM_PERFIL ? '11-perfil.html' : 'index.html';

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

                window.location.href = ORIGEM_PERFIL ? '11-perfil.html' : '3-inicio-feed.html';

            }

        });


/* ============================================================
   5. PERSISTÊNCIA DOS INTERESSES (GruplaceInterests)
   ============================================================ */
function salvarInteresses() {
    const Int = window.GruplaceInterests;
    if (!Int) return;
    const lista = Array.from(document.querySelectorAll('.interest-pill.is-selected')).map(p => ({
        id: p.dataset.interest,
        nome: p.textContent.replace(/\s+/g, ' ').trim()
    }));
    Int.set(lista);
}

(function () {
    const Int = window.GruplaceInterests;
    if (!Int) return;
    document.querySelectorAll('.interest-pill').forEach(p => {
        if (Int.has(p.dataset.interest)) p.classList.add('is-selected');
    });
})();
