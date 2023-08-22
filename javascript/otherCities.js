let cityName = document.getElementsByClassName("cityName");
let cityCloudPct = document.getElementsByClassName("cityCloudPct");
let cityTemp = document.getElementsByClassName("cityTemp");
let feelsLike = document.getElementsByClassName("feelsLike");
let cityHumidity = document.getElementsByClassName("cityHumidity");
let cityWindDir = document.getElementsByClassName("cityWindDir");
let cityWindSpeed = document.getElementsByClassName("cityWindSpeed");

const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Chandigarh",
    "Lucknow",
    "Kochi",
    "Indore",
    "Surat",
    "Agra",
    "Varanasi",
    "Bhopal",
    "Ludhiana",
    "Nagpur",
    "Patna",
    "Kanpur",
    "Amritsar",
    "Coimbatore",
    "Vadodara",
    "Madurai",
    "Visakhapatnam",
    "Allahabad",
    "Ranchi",
    "Thiruvananthapuram",
    "Bhubaneswar",
    "Mysore",
    "Mangalore",
    "Dehradun",
    "Raipur",
    "Guwahati",
    "Jamshedpur",
    "Bikaner",
    "Amravati",
    "Udaipur",
    "Jodhpur",
    "Ajmer",
    "Patiala",
    "Bhavnagar",
    "Salem",
    "Tiruchirappalli",
    "Gwalior",
    "Jalandhar",
    "Bhiwandi",
    "Saharanpur",
    "Gorakhpur"
];
// console.log(cities);

let randomCities = [];

while (randomCities.length < 5) {
    let randomIndex = Math.floor(Math.random() * cities.length);
    let randomCity = cities[randomIndex];
    if (!randomCities.includes(randomCity)) {
        randomCities.push(randomCity);
    }
}
console.log(randomCities);

for (let i = 0; i < randomCities.length; i++) {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${randomCities[i]}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9d9d23d86mshf1c4bc63c9653d7p1cc8a2jsnea25016d9c0f',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    })
        .then(response => response.json())
        .then((response) => {

            let windDir = (wd) => {
                if (wd >= 22.5 && wd <= 67.5) {
                    cityWindDir[i].innerHTML = "North-East";
                }
            
                else if (wd >= 67.5 && wd <= 112.5) {
                    cityWindDir[i].innerHTML = "East";
                }
            
                else if (wd >= 112.5 && wd <= 157.5) {
                    cityWindDir[i].innerHTML = "South-East";
                }
            
                else if (wd >= 157.5 && wd <= 202.5) {
                    cityWindDir[i].innerHTML = "South";
                }
                else if (wd >= 202.5 && wd <= 247.5) {
                    cityWindDir[i].innerHTML = "South-West";
                }
                else if (wd >= 247.5 && wd <= 292.5) {
                    cityWindDir[i].innerHTML = "West";
                }
                else if (wd >= 292.5 && wd <= 337.5) {
                    cityWindDir[i].innerHTML = "North-West";
                }
            
                else if ((wd >= 337.5 && wd <= 360) || (wd >= 0 && wd <= 22.5)) {
                    cityWindDir[i].innerHTML = "North";
                }
            }

            console.log(response)
            cityName[i].innerHTML = randomCities[i];
            cityCloudPct[i].innerHTML = response.cloud_pct + "%";
            cityTemp[i].innerHTML = response.temp + "&degC";
            feelsLike[i].innerHTML = response.feels_like + '&degC';
            cityHumidity[i].innerHTML = response.humidity + "%";
            windDir(response.wind_degrees);
            cityWindSpeed[i].innerHTML = response.wind_speed + 'm/s';
        })
        .catch(err => console.error(err));
}