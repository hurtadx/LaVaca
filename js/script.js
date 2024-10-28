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

// Cambiar el botón "Entrar" por "Cerrar Sesión" y mostrar la imagen circular al hacer clic
btnEntrar.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe

    // Cambia el texto del botón de inicio de sesión
    btnLoginPopup.innerText = 'Cerrar Sesión';

    // Muestra la imagen circular
    userImageContainer.style.display = 'block'; 
    userImageContainer.insertAdjacentElement('afterbegin', userImage); // Asegura que la imagen aparezca en el contenedor
});

// Función para cerrar sesión
btnLoginPopup.addEventListener('click', () => {
    if (btnLoginPopup.innerText === 'Cerrar Sesión') {
        btnLoginPopup.innerText = 'Iniciar Sesión'; // Cambia el texto de vuelta
        userImageContainer.style.display = 'none'; // Oculta la imagen circular
    }
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






