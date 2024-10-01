gsap.registerPlugin(ScrollTrigger);

// Animation pour le nom
let nameTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#name",
        start: "top bottom-=100",
        end: "top center",
        toggleActions: "play none none reverse"
    }
});

nameTl.from("#name span", {
    opacity: 0,
    scale: 0,
    y: 50,
    rotationX: -90,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.1
});

// Animation d'entrée pour l'en-tête
gsap.from("#title", {opacity: 0, y: 50, duration: 1, delay: 0.7});
gsap.from("#description", {opacity: 0, y: 50, duration: 1, delay: 0.9});
gsap.from("#cta", {opacity: 0, y: 50, duration: 1, delay: 1.1});
gsap.from("#profile-pic", {opacity: 0, scale: 0.5, duration: 1, delay: 1.3});

// Animation pour les cartes de projet
gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            scrub: 1
        },
        delay: index * 0.2
    });
});

// Animation pour la section de contact
gsap.from("#contact", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: "#contact",
        start: "top bottom-=100",
        end: "top center",
        scrub: 1
    }
});

// Animation pour les cartes de compétences
gsap.from(".skill-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".skill-card",
        start: "top bottom-=100",
        end: "top center",
        scrub: 1
    }
});

// Animation pour la section services
gsap.from("#services .container > *", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#services",
        start: "top bottom-=100",
        end: "center center",
        scrub: 1
    }
});

// Menu mobile
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// Animation pour les titres de section
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title.querySelector('.title-text'), {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: title,
            start: 'top bottom-=100',
            end: 'top center',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from(title.querySelector('.title-underline'), {
        scaleX: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: title,
            start: 'top bottom-=100',
            end: 'top center',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from([title.querySelector('::before'), title.querySelector('::after')], {
        scaleX: 0,
        duration: 1,
        delay: 0.7,
        scrollTrigger: {
            trigger: title,
            start: 'top bottom-=100',
            end: 'top center',
            toggleActions: 'play none none reverse'
        }
    });
});

// Fonction pour basculer le thème
function toggleTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        document.getElementById('theme-toggle-light-icon').classList.remove('hidden')
        document.getElementById('theme-toggle-dark-icon').classList.add('hidden')
    } else {
        document.documentElement.classList.remove('dark')
        document.getElementById('theme-toggle-light-icon').classList.add('hidden')
        document.getElementById('theme-toggle-dark-icon').classList.remove('hidden')
    }
}

// App