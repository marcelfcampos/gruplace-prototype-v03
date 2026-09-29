/* ============================================================
   FAVORITOS — fonte única de dados (tela 3 e tela 9)
   Persistência: localStorage, chave "gruplace:favoritos"
   ============================================================ */
(function () {
    const KEY = 'gruplace:favoritos';
    const CATEGORIAS = {
        nike: 'moda', sephora: 'beleza', zara: 'moda', adidas: 'moda',
        renner: 'moda', natura: 'beleza', madero: 'gastronomia'
    };

    function ler() {
        try {
            const v = JSON.parse(localStorage.getItem(KEY) || '[]');
            return Array.isArray(v) ? v : [];
        } catch (e) { return []; }
    }
    function gravar(lista) {
        try { localStorage.setItem(KEY, JSON.stringify(lista)); } catch (e) { /* sem localStorage */ }
    }
    function slug(s) {
        return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    }
    function criarId(marca, titulo) { return slug(marca) + '-' + slug(titulo); }
    function has(id) { return ler().some(i => i.id === id); }
    function getAll() { return ler(); }

    // Alterna o favorito. Retorna true se ficou favoritado, false se foi removido.
    function toggle(dados) {
        const lista = ler();
        const pos = lista.findIndex(i => i.id === dados.id);
        if (pos >= 0) {
            lista.splice(pos, 1);
            gravar(lista);
            return false;
        }
        lista.push(Object.assign({}, dados, {
            categoria: dados.categoria || CATEGORIAS[slug(dados.marca)] || 'moda'
        }));
        gravar(lista);
        return true;
    }
    function remove(id) { gravar(ler().filter(i => i.id !== id)); }

    // Avisa quando outra aba altera os favoritos ou a página volta do cache do navegador.
    function onChange(fn) {
        window.addEventListener('storage', e => { if (e.key === KEY || e.key === null) fn(); });
        window.addEventListener('pageshow', e => { if (e.persisted) fn(); });
    }

    window.GruplaceFavorites = { criarId, has, getAll, toggle, remove, onChange };
})();
