// Gestión del Menú Móvil
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const navMenuWrapper = document.querySelector('.nav-menu-wrapper');
const menuLinks = document.querySelectorAll('.nav-menu-wrapper a');

if (mobileMenuBtn && navMenuWrapper) {
    const openMenu = () => {
        navMenuWrapper.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        navMenuWrapper.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    mobileMenuBtn.addEventListener('click', openMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
    
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// Lógica de Scroll Activo
const navLinks = document.querySelectorAll('.nav-group li a');
const sections = document.querySelectorAll('section');

if (sections.length > 0) {
    window.addEventListener('scroll', () => {
        let current = '';
        const isBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 50;

        if (isBottom) {
            current = 'contact';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
        }

        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active-nav');
            }
        });
    });
}

// Validación para el formulario de contacto
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const privacyCheckbox = document.querySelector('input[name="privacy_accepted"]');
        
        if (privacyCheckbox && !privacyCheckbox.checked) {
            e.preventDefault(); 
            alert('Debes aceptar la política de privacidad para continuar.');
        }
    });
}