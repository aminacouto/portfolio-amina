const sr = ScrollReveal({
    distance: '40px',
    duration: 900,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    reset: false,
    opacity: 0,
    scale: 0.98,
    viewFactor: 0.2
});

/* sidebar */
sr.reveal('.sidebar', {
    origin: 'left',
    distance: '60px',
    duration: 1000,
    delay: 200,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
});

/* avatar */
sr.reveal('.profile', {
    origin: 'left',
    distance: '40px',
    delay: 400
});

/* itens do menu */
sr.reveal('.sidebar nav ul li', {
    origin: 'left',
    distance: '30px',
    interval: 120,
    delay: 500
});

/* redes sociais */
sr.reveal('.sidebar-bottom .links a', {
    origin: 'bottom',
    distance: '20px',
    interval: 100,
    delay: 700
});

/* idioma */
sr.reveal('.idioma', {
    origin: 'bottom',
    distance: '20px',
    delay: 900
});



/* intro */
sr.reveal('.intro h1', { origin: 'left', delay: 900 });
sr.reveal('.intro h2', { origin: 'left', delay: 1000 });
sr.reveal('.intro h3', { origin: 'left', delay: 1100 });
sr.reveal('.skills', { origin: 'bottom', delay: 300 });

/* sobre mim */
sr.reveal('.sobre-mim h2', { origin: 'left' });
sr.reveal('.sobre-mim p', { origin: 'bottom', interval: 120 });
sr.reveal('.sobre-mim button', { origin: 'bottom', delay: 200 });

/* habilidades/skills */
sr.reveal('.skills-carousel', {
    origin: 'bottom',
    distance: '60px',
    duration: 1200
});

/* projetos */
sr.reveal('.projetos > div > div', {
    origin: 'bottom',
    interval: 150,
    distance: '50px'
});

/* contatos */
sr.reveal('.contatos h2', { origin: 'left' });
sr.reveal('.contatos p', { origin: 'left' });
sr.reveal('.contatos button', { origin: 'bottom', delay: 200 });
sr.reveal('.contact-item', {
    origin: 'bottom',
    interval: 120
});

/* cards */

const container = document.querySelector(".cardproj");
const cards = document.querySelectorAll(".cardproj > div");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const isOpen = card.classList.contains("card-expandido");

        // fecha tudo primeiro
        cards.forEach(c => c.classList.remove("card-expandido"));
        container.classList.remove("focus-mode");

        // se não estava aberto → abre
        if (!isOpen) {
            card.classList.add("card-expandido");
            container.classList.add("focus-mode");
        }
    });

});
