document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const datos = {
        nombre: e.target.nombre.value,
        apellidos: e.target.apellidos.value,
        email: e.target.email.value,
        password: e.target.password.value,
        telefono: e.target.telefono.value
    };

    const res = await fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });

    const data = await res.json();
    alert(data.mensaje);
});
