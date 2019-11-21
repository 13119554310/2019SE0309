var scrollTop=0,
	secOneLeft = document.querySelector('.sec1_anima'),
	secTwoLeft = document.querySelector('.sec2_anima'),
	secThirLeft = document.querySelector('.sec3_anima'),
	secOneRight = document.querySelectorAll('.aside_page>li'),
	secTwoRight = document.querySelectorAll('.aside_pics>li'),
	secThirRight = document.querySelectorAll('.aside_box>li');
	secTop = document.querySelector('.start_mge');
	secBottom = document.querySelector('.start_btn');
document.onscroll = function getScrollTop() {
	if(document.documentElement&&document.documentElement.scrollTop){ 
		scrollTop=document.documentElement.scrollTop; 
	}else if(document.body){ 
		scrollTop=document.body.scrollTop; 
	} 
	return sectionAnimate(scrollTop);   		
}
function sectionAnimate(scrollTop) {
	if(scrollTop >0){
		secOneLeft.style.animation = 'sectionFleft 1s ease 0.2s both';
		secOneRight[2].style.animation = 'sectionFright 1s ease 0.2s both';
		secOneRight[1].style.animation = 'sectionFright 1s ease 0.3s both';
		secOneRight[0].style.animation = 'sectionFright 1s ease 0.4s both';
	}
	if(scrollTop > 400){
		secTwoLeft.style.animation = 'sectionFleft 1s ease 0.2s both';
		secTwoRight[1].style.animation = 'sectionFright 1s ease 0.2s both';
		secTwoRight[0].style.animation = 'sectionFright 1s ease 0.3s both';
	}
	if(scrollTop > 800){
		secThirLeft.style.animation = 'sectionFleft 1s ease 0.2s both';
		secThirRight[3].style.animation = 'sectionFright 1s ease 0.2s both';
		secThirRight[2].style.animation = 'sectionFright 1s ease 0.3s both';
		secThirRight[1].style.animation = 'sectionFright 1s ease 0.4s both';
		secThirRight[0].style.animation = 'sectionFright 1s ease 0.5s both';
	}
	if(scrollTop > 1200){
		secTop.style.animation = 'sectionToTop 1s ease 0.2s both';
		secBottom.style.animation = 'sectionToTop 1s ease 0.3s both';
	}
}