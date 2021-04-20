document.addEventListener( 'DOMContentLoaded', function () {

		// Splide Slider
		new Splide( '.splide' ).mount();
});

function toggleForm() {
	var mainForm = document.querySelector('#main-form');
	mainForm.classList.toggle('active');
}
