// Obtener referencia al formulario
const form = document.getElementById('contact-form');
  
// Agregar evento de envío al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario
  
  // Obtener valores de los campos
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Validar campos
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }
  
  // Mostrar mensaje de éxito
  alert('¡Formulario enviado con éxito!');
  
  // Aquí puedes agregar código adicional para enviar el formulario a través de AJAX o cualquier otra acción necesaria
  
  // Restablecer el formulario
  form.reset();
});