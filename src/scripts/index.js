(function () {
	'use strict';

	window.onscroll = function () {
		const navbarElement = document.querySelector('.navbar');

		if (window.scrollY > 10) {
			navbarElement.classList.add('active');
		} else {
			navbarElement.classList.remove('active');
		}
	};
})();
