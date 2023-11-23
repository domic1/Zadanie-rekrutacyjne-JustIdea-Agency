document.addEventListener('DOMContentLoaded', function () {
	var circleItems = document.querySelectorAll('.circle-item')

	// Funkcja do generowania losowego opóźnienia
	function getRandomDelay() {
		return Math.random() * 1.5 
	}

	// Przypisanie losowego opóźnienia dla każdego elementu
	circleItems.forEach(function (item) {
		item.style.animationDelay = getRandomDelay() + 's'
	})
})
