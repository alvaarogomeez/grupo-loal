document.addEventListener( 'DOMContentLoaded', function () {

		// Splide Slider
		new Splide( '.splide' ).mount();
});
document.addEventListener('scroll', ()=>{
	var floatingBtnWrapper = document.querySelector('#floating-btn-wrapper');
	if(scrollY>=window.innerHeight){
		floatingBtnWrapper.classList.add('active');
	}else{
		floatingBtnWrapper.classList.remove('active');
	}
});
function toggleList(){
	var listInfoCards = document.querySelector('#all-info-cards-list');
	var floatingBtnWrapper = document.querySelector('#floating-btn-wrapper');
	if(!listInfoCards.classList.contains('active')){
		if(floatingBtnWrapper.classList.contains('active')){
			floatingBtnWrapper.classList.remove('active');
		}
		listInfoCards.classList.add('active');
	}else if(listInfoCards.classList.contains('active')){
		if(!floatingBtnWrapper.classList.contains('active') && scrollY>window.innerHeight){
			floatingBtnWrapper.classList.add('active');
		}
		listInfoCards.classList.remove('active');
	}
}
function toggleForm() {
	var mainForm = document.querySelector('#main-form');
	var floatingBtnWrapper = document.querySelector('#floating-btn-wrapper');
	var listInfoCards = document.querySelector('#all-info-cards-list');
	if(floatingBtnWrapper.classList.contains('active')){
		floatingBtnWrapper.classList.remove('active');
	}else if(!floatingBtnWrapper.classList.contains('active') && scrollY>window.innerHeight){
		floatingBtnWrapper.classList.add('active');
	}
	if(listInfoCards.classList.contains('active')){
		listInfoCards.classList.remove('active');
	}
	
	mainForm.classList.toggle('active');
};

function formRestraining(idClicked){
	// Controlando Primer Select;
	var option = firstSelectRestrain(idClicked);
	// Controlando Segundo Select
	secondSelectRestrain(option);
}

function firstSelectRestrain(id){
	
	if(id[id.length - 1] == '2'){
		for(i=0; i<6; i++){
			id=id.substring(0, id.length - 1);
		}
		console.log(id);
	} else if(id.length>4){
		for(i=0; i<4; i++){
			id=id.substring(0, id.length - 1);
		}
	}
	if(id == "" || id == "floating"){
		var optionTrabajo = document.querySelector('#select-default');
		optionTrabajo.selected = true;
	}else{
		var optionTrabajo = document.querySelector('#'+id);
		optionTrabajo.selected = true;
	}
	return optionTrabajo;
}
function secondSelectRestrain(option){
	var trabajoDetalle = document.querySelector('#trabajo-detalle');

	var selectAnythingOption = `<option class="general" value="">-- Selecciona --</option>`;
	var otrosOption = `<option class="general" value="otros">Otros...</option>`;
	if(option.value == 'reforma-integral'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					<option class="reforma-integral-detalle" value="reforma-chalet">Reforma Chalet</option>
                    <option class="reforma-integral-detalle" value="reforma-local">Reforma Local</option>
                    <option class="reforma-integral-detalle" value="reforma-finca">Reforma Finca</option>
                    <option class="reforma-integral-detalle" value="reforma-apartamento">Reforma Apartamento</option>
                    <option class="reforma-integral-detalle" value="reforma-vivienda">Reforma Vivienda</option>
                    <option class="reforma-integral-detalle" value="reforma-parcial">Reforma Parcial</option>
                    <option class="reforma-integral-detalle" value="reforma-completa">Reforma Completa</option>
                    <option class="reforma-integral-detalle" value="reforma-completa-proyecto">Reforma Completa con Proyecto</option>
					${otrosOption} `
	}else if(option.value == 'reforma-ba??o'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					<option class="reforma-ba??o-detalle" value="ba??era-por-ducha">Cambiar Ba??era por Plato de Ducha</option>
                    <option class="reforma-ba??o-detalle" value="cambio-mampara">Cambiar Mampara</option>
                    <option class="reforma-ba??o-detalle" value="mueble-ba??o-espejo">Instalar Mueble de Ba??o y Espejo</option>
                    <option class="reforma-ba??o-detalle" value="cambio-azulejos">Cambiar Azulejos</option>
					${otrosOption} `
	}else if(option.value == 'reforma-cocina'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					<option class="reforma-cocina-detalle" value="reforma-cocina">Reforma Cocina</option>
                    <option class="reforma-cocina-detalle" value="amueblamiento-cocina">Amueblar Cocina</option>
                    <option class="reforma-cocina-detalle" value="campana-extractora-cocina">Instalar o Cambiar Campana Extractora</option>
                    <option class="reforma-cocina-detalle" value="encimera-cocina">Colocar o Quitar Encimera</option>
                    <option class="reforma-cocina-detalle" value="electrodom??sticos-cocina">Instalaci??n de Electrodom??sticos</option>
					${otrosOption} `
	}else if(option.value == 'pintura'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					<option class="pintura-detalle" value="pintura-lisos">Lisos</option>
                    <option class="pintura-detalle" value="lacar-puertas">Lacar Puertas</option>
                    <option class="pintura-detalle" value="pintar-exterior-vivienda">Pintar Exterior Vivienda</option>
                    <option class="pintura-detalle" value="pintar-interior-vivienda">Pintar Interior Vivienda</option>
                    <option class="pintura-detalle" value="pintar-exterior-edificio">Pintar Exterior Edificio</option>
                    <option class="pintura-detalle" value="pintar-interior-edificio">Pintar Interior Edificio</option>
                    <option class="pintura-detalle" value="pintar-exterior-local">Pintar Exterior Local</option>
                    <option class="pintura-detalle" value="pintar-interior-local">Pintar Interior Local</option>
                    <option class="pintura-detalle" value="pintura-gotele">Quitar o Poner Gotel??</option>
                    <option class="pintura-detalle" value="pintura-empapelamiento">Quitar Papel o Empapelar</option>
                    <option class="pintura-detalle" value="lacar-muebles">Lacar Muebles</option>
                    <option class="pintura-detalle" value="pintura-esmaltes">Esmaltes de Todo Tipo</option>
                    <option class="pintura-detalle" value="pintar-garajes">Pintar Garajes</option>
                    <option class="pintura-detalle" value="pintura-decorativa">Pintura Decorativa</option>
					${otrosOption} `
	}else if(option.value == 'alba??ileria' || option.value == 'paredes-suelos'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					<option class="alba??ileria-detalle" value="alicatado-solado">Alicatar / Solar</option>
                    <option class="alba??ileria-detalle" value="construccion-porche">Construir Porche</option>
                    <option class="alba??ileria-detalle" value="alba??ileria-reforma">Alba??iler??a de Reforma</option>
					${otrosOption} `
	}
	else if(option.value == 'electricidad'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					 <option class="electricidad-detalle" value="instalacion-electrica">Instalaci??n El??ctrica Obra Nueva</option>
                    <option class="electricidad-detalle" value="reforma-instalacion-electrica">Reforma Instalaci??n El??ctrica Vivienda / Local</option>
                    <option class="electricidad-detalle" value="iluminacion-led">Instalar Iluminaci??n LED</option>
                    <option class="electricidad-detalle" value="revision-instalaciones-electricas">Revisi??n Instalaciones El??ctricas</option>
                    <option class="electricidad-detalle" value="cuadros-electricos">Cuadros El??ctricos</option>
                    <option class="electricidad-detalle" value="instalacion-enchufes">Instalaci??n Enchufes</option>
                    <option class="electricidad-detalle" value="cambios-enchufes">Cambios de Enchufes</option>
                    <option class="electricidad-detalle" value="radiadores-electricos">Radiadores El??ctricos</option>
					${otrosOption} `
	}else if(option.value == 'fontaneria'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					<option class="fontaneria-detalle" value="instalar-fontaneria">Instalar Fontaner??a Completa</option>
                    <option class="fontaneria-detalle" value="cambiar-fontaneria-ba??o-cocina">Cambio Fontaner??a Ba??o o Cocina</option>
                    <option class="fontaneria-detalle" value="desatascar-tuberias">Desatascar Tuber??as</option>
                    <option class="fontaneria-detalle" value="reforma-instalacion-fontaneria">Reforma Instalaci??n Fontaner??a</option>
                    <option class="fontaneria-detalle" value="reparar-bajantes">Reparar Bajantes</option>
                    <option class="fontaneria-detalle" value="instalacion-fontaneria-puntos">Instalar Fontaner??a por Puntos</option>
                    <option class="fontaneria-detalle" value="reparar-tuberias">Reparar Tuber??as</option>
                    <option class="fontaneria-detalle" value="calefaccion-gas">Calefacci??n Gas</option>
                    <option class="fontaneria-detalle" value="cambiar-caldera">Cambiar Caldera</option>
                    <option class="fontaneria-detalle" value="instalar-termo-electrico">Instalar Termo El??ctrico</option>
                    <option class="fontaneria-detalle" value="calefaccion-central">Calefacci??n Central</option>
					${otrosOption} `
	}else if(option.value == 'tarima'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					<option class="tarima-detalle" value="instalar-tarima">Instalar Tarima de Todo Tipo</option>
                    <option class="tarima-detalle" value="quitar-tarima">Quitar Tarima</option>
                    <option class="tarima-detalle" value="reparar-tarima">Reparaci??n de Tarima</option>
                    <option class="tarima-detalle" value="instalar-rodapie">Instalar Rodapi??s</option>
                    <option class="tarima-detalle" value="reparar-rodapie">Reparar Rodapi??s</option>
					${otrosOption} `
	}else if(option.value == 'carpinteria'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					<option class="carpinteria-detalle" value="instalar-puerta-corredera-empotrada">Instalar Puerta Corredera Empotrada</option>
                    <option class="carpinteria-detalle" value="cambiar-carpinteria-madera">Cambiar Carpinter??a Madera</option>
                    <option class="carpinteria-detalle" value="instalar-carpinteria">Instalar Carpinter??a</option>
                    <option class="carpinteria-detalle" value="reparacion-carpinteria">Reparaci??n Carpinter??a</option>
                    <option class="carpinteria-detalle" value="instalar-puerta-seguridad">Instalar Puerta de Seguridad</option>
                    <option class="carpinteria-detalle" value="venta-puerta-acorazada-kiuso">Venta de Puerta Acorazada (Kiuso)</option>
                    <option class="carpinteria-detalle" value="venta-puerta-blindada-kiuso">Venta de Puerta Blindada (Kiuso)</option>
                    <option class="carpinteria-detalle" value="cerrajeria-kiuso">Cerrajer??a Kiuso</option>
					${otrosOption} `
	}else if(option.value == 'carpinteria-aluminio'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					<option class="carpinteria-aluminio-detalle" value="instalar-carpinteria-aluminio">Instalar Carpinter??a Aluminio</option>
                    <option class="carpinteria-aluminio-detalle" value="venta-carpinteria-aluminio-con-sin-instalacion">Venta Carpinter??a Aluminio Con o Sin Instalaci??n</option>
                    <option class="carpinteria-aluminio-detalle" value="reparacion-carpinteria-aluminio">Reparar Carpinter??a Aluminio</option>
                    <option class="carpinteria-aluminio-detalle" value="cambiar-carpinteria-aluminio">Cambiar Carpinter??a Aluminio</option>
                    <option class="carpinteria-aluminio-detalle" value="persianas-aluminio">Persianas de Aluminio</option>
                    <option class="carpinteria-aluminio-detalle" value="carpinteria-aluminio-mosquiteras">Mosquiteras</option>
                    <option class="carpinteria-aluminio-detalle" value="chapas-aluminio">Chapas de Terminaci??n Aluminio</option>
					${otrosOption} `
	}else if(option.value == 'aire-acondicionado'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					<option class="aire-acondicionado-detalle" value="instalar-maquina-aire-acondicionado">Instalar M??quina de Aire Acondicionado</option>
                    <option class="aire-acondicionado-detalle" value="instalar-maquina-aire-acondicionado-conductos">Instalar M??quina de Aire Acondicionado Conductos</option>
                    <option class="aire-acondicionado-detalle" value="preinstalar-aire-acondicionado">Preinstalar Aire Acondicionado</option>
                    <option class="aire-acondicionado-detalle" value="quitar-aire-acondicionado">Quitar Aire Acondicionado</option>
                    <option class="aire-acondicionado-detalle" value="mantenimiento-aire-acondicionado">Mantenimiento Aire Acondicionado</option>
					${otrosOption} `
	}else if(option.value == 'trabajos-altura'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					<option class="trabajos-altura-detalle" value="altura-verticales">Verticales</option>
                    <option class="trabajos-altura-detalle" value="altura-tejados">Tejados</option>
                    <option class="trabajos-altura-detalle" value="altura-andamios">Andamios</option>
                    <option class="trabajos-altura-detalle" value="altura-reparar-edificios-viviendas">Reparar-edificios-viviendas</option>
                    <option class="trabajos-altura-detalle" value="altura-goteras">Goteras</option>
                    <option class="trabajos-altura-detalle" value="altura-instalaciones">Instalaciones</option>
                    <option class="trabajos-altura-detalle" value="altura-impermeabilizaciones">Impermeabilizaciones</option>
                    <option class="trabajos-altura-detalle" value="altura-instalacion-canalones">Instalaci??n Canalones</option>
                    <option class="trabajos-altura-detalle" value="altura-limpieza-canalones">Limpieza Canalones</option>
                    <option class="trabajos-altura-detalle" value="altura-limpieza-general-tejados">Limpieza General de Tejados</option>
					${otrosOption} `
	}else if(option.value == 'comunidades-vecinos'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					<option class="comunidad-vecinos-detalle" value="mantenimiento-general-comunidad-vecinos">Mantenimiento General a Comunidad de Vecinos</option>
                    <option class="comunidad-vecinos-detalle" value="pintura-comunidad-vecinos">Pintura Comunidad de Vecinos</option>
                    <option class="comunidad-vecinos-detalle" value="ramp-normativa-comunidad-vecinos">Construir Rampa seg??n Normativa</option>
                    <option class="comunidad-vecinos-detalle" value="limpieza-reparacion-tejados-comunidad-vecinos">Limpieza / Reparaci??n Tejados</option>
                    <option class="comunidad-vecinos-detalle" value="pintura-exterior-comunidad-vecinos">Pintura Exterior Comunidad de Vecinos</option>
					${otrosOption} `
	}else if(option.value == 'mantenimiento'){
		var optionsTrabajoDetalle = `
					${selectAnythingOption}
					<option class="mantenimiento-detalle" value="mantenimiento-general-comunidad-vecinos">Mantenimiento General a Comunidad de Vecinos</option>
                    <option class="mantenimiento-detalle" value="mantenimiento-general-administracion-fincas">Mantenimiento General a Administraci??n de Fincas</option>
                    <option class="mantenimiento-detalle" value="mantenimiento-electrico">Mantenimiento El??ctrico</option>
                    <option class="mantenimiento-detalle" value="mantenimiento-goteras">Mantenimiento Goteras</option>
                    <option class="mantenimiento-detalle" value="mantenimiento-limpieza">Mantenimiento Limpieza</option>
                    <option class="mantenimiento-detalle" value="reparacion-grieta-fachada">Reparar Grietas Fachada</option>
                    <option class="mantenimiento-detalle" value="limpiar-fachada">Limpiar Fachada</option>
                    <option class="mantenimiento-detalle" value="revisar-poner-canalones-bajantes">Revisar o Poner Canalones Bajantes</option>
					${otrosOption} `
	}else if(option.value == ''){
		var optionsTrabajoDetalle = `
					<option class="error" value="">Antes de dar detalles, debes especificar el tipo de trabajo que desea</option> `

	}
	trabajoDetalle.innerHTML = optionsTrabajoDetalle;
}