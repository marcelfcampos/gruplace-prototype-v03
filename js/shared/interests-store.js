/* ============================================================
   INTERESSES — fonte única de dados (tela 2 e perfil)
   Persistência: localStorage, chave "gruplace:interesses"
   ============================================================ */
(function () {
    const KEY = 'gruplace:interesses';

    function ler() {
        try {
            const v = JSON.parse(localStorage.getItem(KEY) || '[]');
            return Array.isArray(v) ? v : [];
        } catch (e) { return []; }
    }
    function gravar(lista) {
        try { localStorage.setItem(KEY, JSON.stringify(lista)); } catch (e) { /* sem localStorage */ }
    }
    function getAll() { return ler(); }
    function has(id) { return ler().some(i => i.id === id); }
    function set(lista) {
        gravar(lista.filter(i => i && i.id).map(i => ({ id: i.id, nome: i.nome })));
    }
    function onChange(fn) {
        window.addEventListener('storage', e => { if (e.key === KEY || e.key === null) fn(); });
        window.addEventListener('pageshow', e => { if (e.persisted) fn(); });
    }

    window.GruplaceInterests = { getAll, has, set, onChange };
})();
