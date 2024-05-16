const san_clemente_del_tuyu_url = 'https://api.openweathermap.org/data/2.5/weather?q=San%20Clemente%20del%20Tuyu';
const san_clemente_del_tuyu = 'san_clemente_del_tuyu';
const santa_teresita_url = 'https://api.openweathermap.org/data/2.5/weather?q=Santa%20Teresita';
const mar_de_ajo_url = 'https://api.openweathermap.org/data/2.5/weather?q=Mar%20de%20Ajo';
const api_key = '&appid=81b3390cae01ba8fe545740132cf3281';

function getClimaApiData(cityURL,callback) {
    const kelvin = 273.15;
    fetch(cityURL)
        .then(response => response.json())
        .then(data => {
            const ciudad = {
                city: data.name,
                weather: data.weather[0].description,
                temp: Math.round(data.main.temp - kelvin),
                icon: data.weather[0].icon
            };
            callback(ciudad);
        })
        .catch(error => {
            console.log(error);
        });
}

function addElement(url) {
    const container = document.getElementById('container-clima-san-clemente-del-tuyu');
    const newElement = document.createElement('p');
    getClimaApiData(url, (ciudad) => {
        newElement.textContent = `El clima en ${ciudad.city} es ${ciudad.weather} y la temperatura es de ${ciudad.temp}°C`;
        console.log(ciudad);
    });
    container.appendChild(newElement);
  }
  
// Esperar a que el DOM se cargue completamente antes de ejecutar la función
var documento = document.addEventListener('DOMContentLoaded', () => {
    addElement(san_clemente_del_tuyu_url + api_key);
    //addElement();  // Llamar a la función directamente cuando la página se carga
});