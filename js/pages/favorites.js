/* =========================================================
   0. RENDERIZA OS FAVORITOS SALVOS (mesmo molde de card da tela)
   ========================================================= */
(function () {
    const Fav = window.GruplaceFavorites;
    const grid = document.getElementById('products-grid-container');
    if (!Fav || !grid) return;

    function criarCard(item) {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.dataset.id = item.id;
        card.dataset.category = item.categoria || 'moda';
        card.dataset.name = ((item.titulo || '') + ' ' + (item.marca || '')).toLowerCase();
        card.innerHTML = `
          <button type="button" class="favorite-toggle-button" aria-label="Favorito">
            <svg class="favorite-toggle-icon" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.8 8.6c0 5.5-8.8 10.4-8.8 10.4S3.2 14.1 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z"></path>
            </svg>
          </button>
          <div class="product-image-container"><img class="product-image" src="" alt=""></div>
          <div class="product-brand-row">
            <span class="product-brand"></span>
            <button type="button" class="store-follow-button">Seguir</button>
          </div>
          <h3 class="product-title"></h3>
          <div class="product-price-row">
            <span class="product-price"></span>
            <span class="product-discount"></span>
          </div>
          <button type="button" class="store-link-button">
            Ver na loja
            <svg class="store-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M7 17 17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </button>`;
        const img = card.querySelector('.product-image');
        img.src = item.img || '';
        img.alt = item.alt || item.titulo || '';
        card.querySelector('.product-brand').textContent = item.marca || '';
        card.querySelector('.product-title').textContent = item.titulo || '';
        card.querySelector('.product-price').textContent = item.preco || '';
        const desc = card.querySelector('.product-discount');
        if (item.desconto) desc.textContent = item.desconto; else desc.remove();
        return card;
    }

    grid.innerHTML = '';
    Fav.getAll().forEach(item => grid.appendChild(criarCard(item)));
    Fav.onChange(() => window.location.reload());
})();


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

        if (window.GruplaceFavorites && productCard.dataset.id) {
          window.GruplaceFavorites.remove(productCard.dataset.id);
        }
        productCard.classList.add('product-card--removing');
        window.setTimeout(() => {
          productCard.remove();
        }, 300);
      });
    });

  