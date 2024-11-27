// Слушаем событие прокрутки и активируем анимацию
window.addEventListener('scroll', function () {
    const content = document.querySelector('.animation-content');
    const position = content.getBoundingClientRect().top;

    if (position < window.innerHeight) {
        content.style.opacity = 1;
        content.style.transform = 'translateY(0)';
    }
});
