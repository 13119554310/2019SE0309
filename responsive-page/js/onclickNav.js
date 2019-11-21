var navList = document.querySelector('.header-nav-content');
var getEvent = document.querySelector('.header-nav-switch');
var btnSwitch = true;
getEvent.onclick = function (){
	if(btnSwitch){
		navList.className = 'header-nav-content onSwicth';
		btnSwitch = false;
		console.log(btnSwitch);
	}
	else {
		navList.className = 'header-nav-content offSwitch';
		btnSwitch = true;
	}
}