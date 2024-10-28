const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const btnEntrar = document.querySelector('.btn'); 
const userImageContainer = document.querySelector('.User-image'); 
const userImage = document.getElementById('userImage'); 

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


btnEntrar.addEventListener('click', (e) => {
    e.preventDefault(); 


    btnLoginPopup.innerText = 'Cerrar Sesión';


    userImageContainer.style.display = 'block'; 
    userImageContainer.insertAdjacentElement('afterbegin', userImage); 
});


btnLoginPopup.addEventListener('click', () => {
    if (btnLoginPopup.innerText === 'Cerrar Sesión') {
        btnLoginPopup.innerText = 'Iniciar Sesión';
        userImageContainer.style.display = 'none'; 
    }
});


iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    setTimeout(() => {
        wrapper.classList.remove('active');
        wrapper.style.display = 'none';
        localStorage.setItem('isWrapperOpen', 'false'); 
    }, 50); 
});

