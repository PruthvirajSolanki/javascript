const apiKey = '83a8be5b484deae7b5a3ba28e3ad153f';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + apiKey;

document.getElementById('weather-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const city = document.getElementById('city-input').value.trim();
  if (!city) return;

  try {
    const res = await fetch(`${url}&q=${city}`);
    const data = await res.json();

    if (data.cod !== 200) throw new Error("City not found");

    document.getElementById('weather-result').classList.remove('hidden');

    document.getElementById('city').textContent = data.name;
    document.getElementById('flag').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
    document.getElementById('weather-icon').src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgARYix3lJvoK3GCaIeXMtGQltgn5Lneb-ig&s`;
    document.getElementById('temperature').textContent = `${data.main.temp}°C`;
    document.getElementById('desc').textContent = data.weather[0].description;
    document.getElementById('clouds').textContent = `${data.clouds.all}%`;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;
  } catch (error) {
    alert("Error fetching weather data.");
  }

  document.getElementById('city-input').value = '';
});
