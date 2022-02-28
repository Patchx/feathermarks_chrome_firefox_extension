// Having issues locally but it works when loaded unpacked in the browser

document.addEventListener('click', function (event) {
	window.location.href = 'https://feathermarks.com/home';
}, false);

var subtitle = document.getElementById("subtitle"); 

subtitle.addEventListener('keydown', function (event) {
	window.location.href = 'https://feathermarks.com/home';
}, false);