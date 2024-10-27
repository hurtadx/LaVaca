// script.js actualizado
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Muestra el registro
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    wrapper.classList.add('active-popup'); // Muestra centrado
});

// Muestra el inicio de sesión
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    wrapper.classList.add('active-popup'); // Muestra centrado
});

// Muestra el popup al hacer clic en "Iniciar Sesión"
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper.style.display = 'flex'; 
});

// Cierra el popup y oculta el `wrapper`
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    setTimeout(() => {
        wrapper.classList.remove('active');
        wrapper.style.display = 'none';
    }, 50); 
});
