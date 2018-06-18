
export function VenuesApiCall() {

	// Foursquare API Info
	const clientId = 'JLK3ZOVKVGBRNJYLLNFWSQOLASRBMHLTNGRHJTA4FJQ4PQZS';
	const clientSecret = 'ZEHOJMFPWT303HSHJB3EFEFWPGXRIJJFY5JDH0CXJRAHBVCP';
	const url = 'https://api.foursquare.com/v2/venues/explore?near=';

	// Page Elements
	const $input = document.getElementById('city');
	const $submit = document.getElementById('button');
	const $destination = document.getElementById('destination');
	const $container = document.querySelector('.container');
	const $venues = document.getElementById('venues');
	
	// get date
	function getDate() {
		var now = new Date();
		var todayUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
		return todayUTC.toISOString().slice(0, 10).replace(/-/g, '');
	}

	// today's date
	let date = getDate();
	date = date.slice(0,10);


	// AJAX function
	async function getVenues() {
		const city = $input.value;
		const urlToFetch = `${url}${city}&limit=6&client_id= ${clientId}&client_secret=${clientSecret}&v=${date}`;

		try {
			let response = await fetch(urlToFetch);
			if (response.ok) {
				let jsonResponse = await response.json();
				console.log(jsonResponse);
				let venues = jsonResponse.response.groups[0].items.map(venueItem => venueItem.venue);
				console.log(venues);
				return venues;
			}
			throw new Error('Request failed!');
		} catch (error) {
			console.log(error);
		}
	}

	// Render function
		function renderVenues(venues) {
		venues.map(($venue, index) => {
			const venueAddress = (venues[index].location.address) ? (`<p>${venues[index].location.address}</p>`) : `<p></p>`;

			let venueContent =
				`<div class="content-wrapper shape venue">
					<div class="shape-face shape-face--front">
						<h2>${venues[index].name}</h2>
						<h3>Address:</h3>
						${venueAddress}
						<p> ${venues[index].location.city}</p>
						<p> ${venues[index].location.country}</p>
					 	<h3> Category:</h3>
						<p>${venues[index].categories[0].pluralName}</p>
					</div>
					<div class="shape-face shape-face--back">
					</div>
				</div>`;
			$venues.innerHTML += venueContent;
		});

		$destination.innerHTML = `<h2>${venues[0].location.city}</h2>`;
	}


	function searchVenue() {
		$venues.innerHTML = "";
		$destination.innerHTML = ' ';
		$container.style.display = "block";
		$container.style.opacity = 1;
		getVenues().then(venues => renderVenues(venues));
		return false;
	}

	$submit.addEventListener('click', searchVenue );

}