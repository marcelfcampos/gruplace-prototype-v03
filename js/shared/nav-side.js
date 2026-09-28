/* ============================================================
   GRUPLACE — NAVEGAÇÃO / POSIÇÃO DA SIDEBAR
   ============================================================ */

const toggleNavButton =
    document.getElementById('toggle-nav-side');

const toggleNavLabel =
    document.getElementById('toggle-nav-label');

const rootElement =
    document.documentElement;

if (toggleNavButton) {
    toggleNavButton.addEventListener('click', () => {
        const currentPosition =
            rootElement.dataset.navSide === 'right'
                ? 'right'
                : 'left';

        const newPosition =
            currentPosition === 'right'
                ? 'left'
                : 'right';

        rootElement.dataset.navSide =
            newPosition;

        toggleNavLabel.textContent =
            newPosition === 'right'
                ? 'Menu à esquerda'
                : 'Menu à direita';

        try {
            localStorage.setItem(
                'gruplace:navSide',
                newPosition
            );
        } catch (error) {
            // Mantém o funcionamento caso o localStorage não esteja disponível.
        }
    });

    try {
        const savedPosition =
            localStorage.getItem('gruplace:navSide');

        if (
            savedPosition === 'right' ||
            savedPosition === 'left'
        ) {
            rootElement.dataset.navSide =
                savedPosition;

            toggleNavLabel.textContent =
                savedPosition === 'right'
                    ? 'Menu à esquerda'
                    : 'Menu à direita';
        }
    } catch (error) {
        // Mantém a posição padrão definida no atributo data-nav-side.
    }
}
