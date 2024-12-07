// Configuración del mapa interactivo
const map = L.map('map').setView([40.416775, -3.703790], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Función para consultar el clima
document.getElementById('clima-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const ciudad = document.getElementById('ciudad').value;
  const apiKey = 'tu_api_key_de_openweathermap';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;
  
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    document.getElementById('resultado-clima').innerHTML = `
      <p><strong>Clima en ${datos.name}:</strong> ${datos.weather[0].description}</p>
      <p>Temperatura: ${datos.main.temp}°C</p>
    `;
  } catch (error) {
    document.getElementById('resultado-clima').innerHTML = `<p>Error al consultar el clima.</p>`;
  }
});

// Contador de visitas (simulado)
let visitas = parseInt(localStorage.getItem('visitas') || 0) + 1;
localStorage.setItem('visitas', visitas);
document.getElementById('visitas').innerText = visitas;

// Formulario dinámico
document.getElementById('formulario-contacto').addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const mensaje = document.getElementById('mensaje').value;
  document.getElementById('respuesta-servidor').innerText = `Gracias, ${nombre}. Tu mensaje ha sido recibido.`;
});
