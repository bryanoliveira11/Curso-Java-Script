// FetchAPI to load other pages without entering it

(() => {
    document.addEventListener('click', e => {
        const el = e.target;
        const tag = el.tagName.toLowerCase();

        if (tag === 'a') {
            e.preventDefault();
            loadPage(el);
        }
    });

    async function loadPage(el) {
        const href = el.getAttribute('href');
        try {
            const response = await fetch(href);

            if (response.status !== 200) throw new Error('error');

            const html = await response.text();
            loadResult(html);

        }
        catch(err) {
            console.log(err);
        }
    }

    function loadResult(response) {
        const result = document.querySelector('.resultado');
        result.innerHTML = response;
    };
})();