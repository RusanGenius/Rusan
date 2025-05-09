document.addEventListener('DOMContentLoaded', () => {
    const karmaElement = document.getElementById('karma');
    if (karmaElement) {
        const randomKarma = (Math.random() * (0.9 - 0.1) + 0.1).toFixed(1);
        karmaElement.textContent = `+ ${randomKarma} к карме`;
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    const currentPage = document.body.getAttribute('data-page');
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });

    document.querySelectorAll('.project h2').forEach(title => {
        title.style.fontSize = `clamp(1.1rem, 3.5vw, 1.5rem)`;
    });
});
