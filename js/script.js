document.addEventListener( 'DOMContentLoaded', function () {

		// Splide Slider
		new Splide( '.splide' ).mount();
});

document.addEventListener('scroll', ()=>{
	var floatingBtnWrapper = document.querySelector('#floating-btn-wrapper');
	if(scrollY>=window.innerHeight){
		floatingBtnWrapper.classList.add('active');
		console.log('puesto');
	}else{
		floatingBtnWrapper.classList.remove('active');
		console.log('quitado');
	}
});
function toggleForm() {
	var mainForm = document.querySelector('#main-form');
	var floatingBtnWrapper = document.querySelector('#floating-btn-wrapper');
	if(floatingBtnWrapper.classList.contains('active')){
		floatingBtnWrapper.classList.remove('active');
		console.log('quitado');
	}else if(!floatingBtnWrapper.classList.contains('active') && scrollY>window.innerHeight){
		floatingBtnWrapper.classList.add('active');
		console.log('puesto');
	}
	
	mainForm.classList.toggle('active');
};
