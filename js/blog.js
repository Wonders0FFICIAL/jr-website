(function () {
    const filterBtns = [...document.querySelectorAll('.category-btn')];
    const cards = [...document.querySelectorAll('#grid .blog-card')];
    const searchInput = document.getElementById('q');
    const countEl = document.getElementById('count');
    const emptyEl = document.getElementById('empty');

    let activeCategory = 'All';

    function render() {
        const query = searchInput.value.trim().toLowerCase();
        let visible = 0;

        cards.forEach((card) => {
            const matchesCategory = activeCategory === 'All' || card.dataset.c === activeCategory;
            const haystack = `${card.dataset.t} ${card.dataset.c} ${card.dataset.x || ''}`.toLowerCase();
            const matchesSearch = !query || haystack.includes(query);
            const show = matchesCategory && matchesSearch;

            card.style.display = show ? '' : 'none';
            if (show) visible++;
        });

        countEl.textContent = `${visible} ${visible === 1 ? 'article' : 'articles'}`;
        emptyEl.style.display = visible ? 'none' : 'block';
    }

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterBtns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.f;
            render();
        });
    });

    searchInput.addEventListener('input', render);

    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    });

    render();
})();