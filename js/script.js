const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup'); // botón "Iniciar Sesión"
const iconClose = document.querySelector('.icon-close');
const btnEntrar = document.querySelector('.btn'); // botón "Entrar"
const userImageContainer = document.querySelector('.User-image'); // contenedor de la imagen de usuario
const userImage = document.getElementById('userImage'); // imagen circular

document.addEventListener('DOMContentLoaded', () => {
    const isWrapperOpen = localStorage.getItem('isWrapperOpen') === 'true';
    wrapper.style.display = isWrapperOpen ? 'flex' : 'none';
    if (isWrapperOpen) {
        wrapper.classList.add('active-popup');
    }
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    wrapper.classList.add('active-popup'); 
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    wrapper.classList.add('active-popup'); 
});

btnLoginPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper.style.display = 'flex';
    localStorage.setItem('isWrapperOpen', 'true'); 
});


// Cerrar el popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    setTimeout(() => {
        wrapper.classList.remove('active');
        wrapper.style.display = 'none';
        localStorage.setItem('isWrapperOpen', 'false'); 
    }, 50); 
});






