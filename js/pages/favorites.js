
    /* =========================================================
       1. FILTRO POR CATEGORIA
       ========================================================= */
    const categoryFilterButtons = document.querySelectorAll('.category-filter-button');
    const productCards = document.querySelectorAll('.product-card');

    function setActiveCategoryButton(activeButton) {
      categoryFilterButtons.forEach((button) => {
        const isActive = button === activeButton;
        button.classList.toggle('category-filter-button--active', isActive);
        button.classList.toggle('category-filter-button--inactive', !isActive);
      });
    }

    function filterProductsByCategory(category) {
      productCards.forEach((productCard) => {
        const productCategory = productCard.dataset.category;
        const shouldDisplay = category === 'todos' || productCategory === category;
        productCard.style.display = shouldDisplay ? 'flex' : 'none';
      });
    }

    categoryFilterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category;
        setActiveCategoryButton(button);
        filterProductsByCategory(selectedCategory);
      });
    });

    /* =========================================================
       2. BUSCA
       ========================================================= */
    const favoritesSearchInput = document.getElementById('favorites-search-input');

    function filterProductsBySearch(searchTerm) {
      productCards.forEach((productCard) => {
        const productName = productCard.dataset.name || '';
        const matchesSearch = productName.toLowerCase().includes(searchTerm);
        productCard.style.display = matchesSearch ? 'flex' : 'none';
      });
    }

    if (favoritesSearchInput) {
      favoritesSearchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();
        filterProductsBySearch(searchTerm);
      });
    }

    /* =========================================================
       3. REMOÇÃO DOS FAVORITOS
       ========================================================= */
    const favoriteToggleButtons = document.querySelectorAll('.favorite-toggle-button');

    favoriteToggleButtons.forEach((favoriteButton) => {
      favoriteButton.addEventListener('click', () => {
        const productCard = favoriteButton.closest('.product-card');
        if (!productCard) {
          return;
        }

        productCard.classList.add('product-card--removing');
        window.setTimeout(() => {
          productCard.remove();
        }, 300);
      });
    });

    /* =========================================================
       INICIALIZAÇÃO
       ========================================================= */
    loadSidebarPosition();
  