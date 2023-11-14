(() => {
    const container = document.querySelector('.container');
    const paragraphs = container.querySelectorAll('p');
    const bodystyle = window.getComputedStyle(document.body, null).getPropertyValue('background');

    for (const p of paragraphs) {
        p.style.backgroundColor = bodystyle;
        p.style.color = '#fff';
    }

})();