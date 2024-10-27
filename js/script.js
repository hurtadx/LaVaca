const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Muestra el registro
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Muestra el inicio de sesión
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Muestra el popup
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper.style.display = 'flex'; // Asegúrate de que el popup sea visible
});

// Cierra el popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    setTimeout(() => {
        wrapper.classList.remove('active'); // También remueve la clase 'active' si es necesario
        wrapper.style.display = 'none'; // Oculta el wrapper después de que se cierra
    }, 50); // Asegúrate de que el tiempo coincide con la duración de la transición
});
