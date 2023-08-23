let cloud_pct = document.getElementById("cloud_pct");
let wind_degrees = document.getElementById("wind_degrees");
let temp = document.getElementById("temp");
let feels_like = document.getElementById("feels_like");
let humidity = document.getElementById("humidity");
let wind_speed = document.getElementById("wind_speed");

let weatherH = document.getElementById("weather-h");

let searchBtn = document.getElementById("search-button");
let searchInput = document.getElementById("search-input");

let weatherMain = document.getElementById("weather-main");
let emptyContainer = document.getElementById("empty-container");
let emptyMessage = document.getElementById("empty-message");
// weather API


function weather(city) {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'c9d9d23d86mshf1c4bc63c9653d7p1cc8a2jsnea25016d9c0f',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	let windDir = (wd) => {
		if (wd >= 22.5 && wd <= 67.5) {
			wind_degrees.innerHTML = "North-East";
		}

		else if (wd >= 67.5 && wd <= 112.5) {
			wind_degrees.innerHTML = "East";
		}

		else if (wd >= 112.5 && wd <= 157.5) {
			wind_degrees.innerHTML = "South-East";
		}

		else if (wd >= 157.5 && wd <= 202.5) {
			wind_degrees.innerHTML = "South";
		}
		else if (wd >= 202.5 && wd <= 247.5) {
			wind_degrees.innerHTML = "South-West";
		}
		else if (wd >= 247.5 && wd <= 292.5) {
			wind_degrees.innerHTML = "West";
		}
		else if (wd >= 292.5 && wd <= 337.5) {
			wind_degrees.innerHTML = "North-West";
		}

		else if ((wd >= 337.5 && wd <= 360) || (wd >= 0 && wd <= 22.5)) {
			wind_degrees.innerHTML = "North";
		}
	}

	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		.then(response => {
			if (!response.ok) {
				throw new Error();
			}
			return response.json();
		}
		).then((response) => {

			// console.log(response)

			let cityName = city.toUpperCase();
			weatherH.innerHTML = cityName;

			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			wind_speed.innerHTML = response.wind_speed
			windDir(response.wind_degrees);


		}).catch((error) => {
			if (error) {
				emptyContainer.style.display = "block";
				weatherMain.style.display = "none";
				emptyMessage.innerHTML = `<h1>Error: Invalid name, please check the city name correctly</h1>`;
			}
		});
}

searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (searchInput.value != "") {
		emptyContainer.style.display = "none";
		weatherMain.style.display = "flex";
		weather(searchInput.value);
	}
	else {
		emptyMessage.innerHTML = `<h1>Search Box is Empty</h1>`;
	}
});


searchInput.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		e.preventDefault();
		if (searchInput.value != "") {
			emptyContainer.style.display = "none";
			weatherMain.style.display = "flex";
			weather(searchInput.value);
		}
		else {
			emptyMessage.innerHTML = `<h1 style="font-size:3vw;">Search Box is Empty</h1>`;
		}
	}
});