// Fonction pour afficher l'en-tête au défilement

document.addEventListener('scroll', () => {
    const header = document.querySelector('.sticky-header');
    const heroSection = document.querySelector('.hero');
    const titleSection = document.querySelector('.title');

    // Position finale du bas de la section "title"
    const triggerHeight = titleSection.getBoundingClientRect().bottom + window.scrollY;

    if (window.scrollY > triggerHeight) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});


