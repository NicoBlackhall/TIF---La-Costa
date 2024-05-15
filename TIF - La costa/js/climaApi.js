
const san_clemente_del_tuyu_url = 'https://api.openweathermap.org/data/2.5/forecast?q=San%20Clemente%20del%20Tuy%C3%BA&appid=3f4';


function getClimaApiData(cityURL,callback) {
    const kelvin = 273.15;
    fetch(cityURL)
        .then(response => response.json())
        .then(data => {
            var ciudad = {
                weather: data.list[0].weather[0].description,
                icon: data.list[0].weather[0].icon,
                city: data.city.name,
                temp: data.list[0].main.temp - kelvin
            };
            callback(ciudad);
        })
        .catch(error => {
            console.error(error);
        });
}

function addElement() {
    const container = document.getElementById('container-clima');
    const newElement = document.createElement('p');
    getClimaApiData(san_clemente_del_tuyu_url, (ciudad) => {
        newElement.textContent = `El clima en ${ciudad.city} es ${ciudad.weather} y la temperatura es de ${ciudad.temp}°C`;
        console.log(ciudad);
    });
    container.appendChild(newElement);
  }
  
  // Esperar a que el DOM se cargue completamente antes de ejecutar la función
  document.querySelector('button').addEventListener('click', addElement);
  document.addEventListener('DOMContentLoaded', () => {
    getClimaApiData
    addElement();  // Llamar a la función directamente cuando la página se carga
  });