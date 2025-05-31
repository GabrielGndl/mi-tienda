const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Alternar entre login y registro
registerBtn.addEventListener('click', () => {
    container.classList.add('active'); // Mostrar formulario de registro
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active'); // Mostrar formulario de login
});

// Captura el envío del formulario de login
const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir recarga

    // Obtener los valores ingresados
    const username = loginForm.querySelector('input[type="text"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value.trim();

    // Validación simple (puedes conectar esto a backend luego)
    if (username && password) {
        alert(`¡Bienvenido, ${username}!`);
        window.location.href = "usuarios.html"; // Redirigir a la página usuarios.html (modifica según tu ruta)
    } else {
        alert("Por favor, completa todos los campos.");
    }
 });
