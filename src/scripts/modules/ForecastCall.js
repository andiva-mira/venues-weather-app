import ForecastPanels from './ForecastPanels';
import ShapesAnimation from './ShapesAnimation';

export const ForecastApiCall = () => {

	// APIXU Info
	const apiKey = 'd4130774bcf6407b918135148180704';
	const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

	// Page Elements
	const $input = document.getElementById('city');
	const $submit = document.getElementById('button');
	const $container = document.querySelector('.container');
	const $weather = document.getElementById("weather");
	const $location = document.getElementById('location');
	const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	// AJAX function
	async function getForecast() {
		const userInput = $input.value;
		const urlToFetch = `${forecastUrl}${apiKey}&q=${userInput}&days=7&hour=11`;
		try {
			let response = await fetch(urlToFetch);
			if (response.ok) {
				let jsonResponse = await response.json();
				// console.log(jsonResponse);
				let days = jsonResponse.forecast.forecastday;
				let location = jsonResponse.location;
				let weatherData = [days, location];
				// console.log(weatherData);
				return weatherData;
			}
			throw new Error('Request failed!');
		} catch (error) {
			console.log(error);

		}
	}

	const renderForecast = (weatherData) => {
		weatherData[0].map((item, index) => {
			const weekDayDate = new Date(item.date);
			const weekDay = weekDayDate.getDay();
			const weekDay1 = weekDayDate.toLocaleDateString();

			let weatherContent =
					`<div class="weather-container">
						<div class="weather">
							<div class="weather-face weather-face--front">
								<div class="weather-face--front---inner">
									<h2>${weekDays[weekDay]}</h2>
									<h3>${item.date.replace(/-/g, '/')}</h3>
									<p>${item.day.condition.text}</p>
									<img src="http://${item.day.condition.icon}" class="weathericon" />
								</div>
							</div>
							<div class="weather-face weather-face--back">
								<div class="weather-face--back---inner">
									<p> High: ${item.day.maxtemp_c} &deg;C </p>
									<p> Low: ${item.day.mintemp_c} &deg;C</p>
									<p> Sunrise: ${item.astro.sunrise} </p>
									<p> Sunset: ${item.astro.sunset} </p>
								</div>
							</div>
						</div>
					</div>`;

			$weather.innerHTML += weatherContent;
		});

		$location.innerHTML = `${weatherData[1].name}`;
	}

	// display content on submit 
	const searchWeather = () => {
		$weather.innerHTML = "";
		$container.style.display = "block";
		$container.style.opacity = 1;
		getForecast().then(weatherData => renderForecast(weatherData)).then(() => {
			new ForecastPanels();
			new ShapesAnimation("#contentLeftCanvas", "#b05261");
		});
		
	}

	$submit.addEventListener('click', searchWeather, false);

}


