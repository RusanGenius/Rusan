function getRandomKarma() {
    return (Math.random() * (0.9 - 0.1) + 0.1).toFixed(1);
}

document.addEventListener('DOMContentLoaded', () => {
    const karmaElement = document.getElementById('karma');
    if (karmaElement) { // Проверяем, существует ли элемент
        const randomKarma = getRandomKarma();
        karmaElement.textContent = `+ ${randomKarma} к карме`;
    }

    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const body = document.body;

    if (menuToggle && sideMenu) {
        // Открытие/закрытие бокового меню
        menuToggle.addEventListener('click', () => {
            sideMenu.classList.toggle('open');
        });

        // Закрытие меню при клике вне него
        body.addEventListener('click', (e) => {
            if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                sideMenu.classList.remove('open');
            }
        });
    }
});