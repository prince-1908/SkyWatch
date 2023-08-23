searchBtn = document.getElementById("search-button");
searchInput = document.getElementById("search-input");
let recentSearches = document.getElementById("recent-searches");
let items = document.getElementsByClassName("items");

searchInput.addEventListener('focus', (e) => {
	e.preventDefault();
	recentSearches.style.display = 'block';
});

searchInput.addEventListener('blur', (e) => {
	e.preventDefault();
	setTimeout(()=>{recentSearches.style.display = 'none';}, 100)
});

let array = [];
searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	array.push(searchInput.value);
	localStorage.setItem('key', JSON.stringify(array));

	let val = JSON.parse(localStorage.getItem('key'));

	if (val[val.length - 1]) {
		items[0].innerHTML = val[val.length - 1];
	}

	if (val[val.length - 2]) {
		items[1].innerHTML = val[val.length - 2];
	}

	if (val[val.length - 3]) {
		items[2].innerHTML = val[val.length - 3];
	}
});

searchInput.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		array.push(searchInput.value);
		localStorage.setItem('key', JSON.stringify(array));

		let val = JSON.parse(localStorage.getItem('key'));

		if (val[val.length - 1]) {
			items[0].innerHTML = val[val.length - 1];
		}

		if (val[val.length - 2]) {
			items[1].innerHTML = val[val.length - 2];
		}

		if (val[val.length - 3]) {
			items[2].innerHTML = val[val.length - 3];
		}
	}
});

Object.values(items).forEach(item => {
	item.addEventListener('click', function(e){
		searchInput.value = item.innerHTML;
	});
});