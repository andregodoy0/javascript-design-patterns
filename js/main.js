var clicks = 0;
var button = document.getElementsByClassName('card')[0];
var counter = document.getElementsByClassName('counter')[0];
counter.innerHTML = clicks;
button.addEventListener('click', () => {
	clicks++;
	counter.innerHTML = (clicks) ? clicks + ' click' : clicks + ' clicks';
});
