/* ============================================================
   SEGUIR LOJAS — fonte única de dados (tela 3 e perfil)
   Persistência: localStorage, chave "gruplace:seguindo"
   ============================================================ */
(function () {
    const KEY = 'gruplace:seguindo';

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
    function criarId(nome) { return slug(nome); }
    function getAll() { return ler(); }
    function has(id) { return ler().some(i => i.id === id); }
    function count() { return ler().length; }

    // Alterna. Retorna true se passou a seguir, false se deixou de seguir.
    function toggle(loja) {
        const lista = ler();
        const pos = lista.findIndex(i => i.id === loja.id);
        if (pos >= 0) {
            lista.splice(pos, 1);
            gravar(lista);
            return false;
        }
        lista.push({ id: loja.id, nome: loja.nome });
        gravar(lista);
        return true;
    }

    // Avisa quando outra aba altera o estado ou a página volta do cache do navegador.
    function onChange(fn) {
        window.addEventListener('storage', e => { if (e.key === KEY || e.key === null) fn(); });
        window.addEventListener('pageshow', e => { if (e.persisted) fn(); });
    }

    window.GruplaceFollow = { criarId, getAll, has, count, toggle, onChange };
})();
