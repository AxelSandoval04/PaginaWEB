function toggleHobbies(id) {
  const list = document.getElementById(id);
  list.classList.toggle('hidden');
}

document.getElementById('form-contacto').addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre && email && mensaje) {
    alert(`Gracias por tu mensaje, ${nombre}!`);
    this.reset();
  } else {
    alert('Por favor, completa todos los campos.');
  }
});
