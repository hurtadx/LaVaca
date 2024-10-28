const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Inicializa el estado del wrapper basado en localStorage
document.addEventListener('DOMContentLoaded', () => {
    const isWrapperOpen = localStorage.getItem('isWrapperOpen') === 'true';
    wrapper.style.display = isWrapperOpen ? 'flex' : 'none';
    if (isWrapperOpen) {
        wrapper.classList.add('active-popup');
    }
});

// Cuando se hace clic en el enlace de registro
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    wrapper.classList.add('active-popup'); 
});

// Cuando se hace clic en el enlace de inicio de sesión
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    wrapper.classList.add('active-popup'); 
});

// Cuando se hace clic en el botón de inicio de sesión
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper.style.display = 'flex';
    localStorage.setItem('isWrapperOpen', 'true'); // Guardar estado de visibilidad
});

// Cuando se hace clic en el icono de cerrar
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    setTimeout(() => {
        wrapper.classList.remove('active');
        wrapper.style.display = 'none';
        localStorage.setItem('isWrapperOpen', 'false'); // Guardar estado de cerrado
    }, 50); 
});

