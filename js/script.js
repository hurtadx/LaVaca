const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const btnEntrar = document.querySelector('.btn'); 

// Campos del formulario de inicio de sesión
const loginEmailInput = document.querySelector('.login input[type="email"]');
const loginPasswordInput = document.querySelector('.login input[type="password"]');

// Campos del formulario de registro
const registerUsernameInput = document.querySelector('.register input[type="text"]');
const registerEmailInput = document.querySelector('.register input[type="email"]');
const registerPasswordInput = document.querySelector('.register input[type="password"]');

// Evento al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const isWrapperOpen = localStorage.getItem('isWrapperOpen') === 'true';
    wrapper.style.display = isWrapperOpen ? 'flex' : 'none';
    if (isWrapperOpen) {
        wrapper.classList.add('active-popup');
    }
});

// Mostrar el formulario de registro
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    wrapper.classList.add('active-popup'); 
});

// Mostrar el formulario de inicio de sesión
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    wrapper.classList.add('active-popup'); 
});

// Mostrar el popup de login
btnLoginPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper.style.display = 'flex';
    localStorage.setItem('isWrapperOpen', 'true'); 
});

// Función para obtener cuentas de localStorage
const getAccounts = () => {
    const accounts = localStorage.getItem('accounts');
    return accounts ? JSON.parse(accounts) : [];
};

// Función para guardar cuentas en localStorage
const saveAccounts = (accounts) => {
    localStorage.setItem('accounts', JSON.stringify(accounts));
};

// Validar inicio de sesión
btnEntrar.addEventListener('click', (e) => {
    e.preventDefault();

    const email = loginEmailInput.value.trim();
    const password = loginPasswordInput.value.trim();

    if (!email || !password) {
        alert('Por favor, ingresa un correo y una contraseña.');
        return;
    }

    const accounts = getAccounts();
    const user = accounts.find(account => account.email === email && account.password === password);

    if (user) {
        // Inicio de sesión exitoso
        alert('Inicio de sesión exitoso.');
        wrapper.style.display = 'none';
        window.location.href = 'index.html';
    } else {
        alert('Correo o contraseña incorrectos.');
    }
});

// Registrar un nuevo usuario
const btnRegistrar = document.querySelector('.register .btn');
btnRegistrar.addEventListener('click', (e) => {
    e.preventDefault();

    const username = registerUsernameInput.value.trim();
    const email = registerEmailInput.value.trim();
    const password = registerPasswordInput.value.trim();

    if (!username || !email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const accounts = getAccounts();
    const userExists = accounts.some(account => account.email === email);

    if (userExists) {
        alert('Ya existe una cuenta con este correo.');
    } else {
        accounts.push({ username, email, password });
        saveAccounts(accounts);
        alert('Cuenta creada con éxito. Ahora puedes iniciar sesión.');
        wrapper.classList.remove('active'); // Cambiar a formulario de inicio de sesión
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
