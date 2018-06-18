export function ForecastApiCall() {

	// APIXU Info
	const apiKey = 'd4130774bcf6407b918135148180704';
	const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

	// Page Elements
	const $input = document.getElementById('city');
	const $submit = document.getElementById('button');
	const $container = document.querySelector('.container');
	const $weather = document.getElementById("weather");
	const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	// AJAX function
	async function getForecast() {
		const userInput = $input.value;
		const urlToFetch = `${forecastUrl}${apiKey}&q=${userInput}&days=6&hour=11`;
		try {
			let response = await fetch(urlToFetch);
			if (response.ok) {
				let jsonResponse = await response.json();
				console.log(jsonResponse);
				let days = jsonResponse.forecast.forecastday;
				return days;
			}
			throw new Error('Request failed!');
		} catch (error) {
			console.log(error);

		}
	}

	function renderForecast(days) {
		days.map((item, index) => {
			const weekDayDate = new Date(days[index].date);
			const weekDay = weekDayDate.getDay();
			const weekDay1 = weekDayDate.toLocaleDateString();

			let weatherContent =
					`<div class="shape">
						<div class="shape-face shape-face--front">
							<h2>${weekDays[weekDay]}</h2>
							<h3>${weekDay1}</h3>
							<img src="http://${days[index].day.condition.icon}" class="weathericon" />
						</div>
						<div class="shape-face shape-face--back">
							<p> High: ${days[index].day.maxtemp_c} &deg;C </p>
							<p> Low: ${days[index].day.mintemp_c} &deg;C</p>
							<p> Sunrise: ${days[index].astro.sunrise} </p>
							<p> Sunset: ${days[index].astro.sunset} </p>
						</div>
					</div>`;

			$weather.innerHTML += weatherContent;
		});
	}

	// display content on submit 
	function searchWeather() {
		$weather.innerHTML = "";
		$container.style.display = "block";
		$container.style.opacity = 1;
		getForecast().then(days => renderForecast(days));
		return false;
	}

	$submit.addEventListener('click', searchWeather);

}


