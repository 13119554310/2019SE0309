var backTop = document.querySelector('.back-to-top');
var backTopAnimate = null;
var distance = 0;		//回到顶部滑动距离
var onSwitch = true;	//用户中途滚动滑轮开关
var offSwitch = true;
document.onscroll = function getScrollTop() {
	if(document.documentElement&&document.documentElement.scrollTop){ 
		scrollDistance=document.documentElement.scrollTop; 
	}
	if(scrollDistance > 100){
		backTop.style.transform='rotate(0deg)';
	}
	if(scrollDistance < 100){
		backTop.style.transform='rotate(180deg)';
	}
	if(!onSwitch) {
		console.log("open");
		offSwitch = true;
		clearInterval(backTopAnimate);
	}
	onSwitch = false;
}
backTop.onclick = function clickToTop() {
	if(offSwitch){
		offSwitch = false;
		backTopAnimate = setInterval(function() {
			onSwitch = true;
			scrollDistance=document.documentElement.scrollTop;
			var distance = Math.floor(-scrollDistance / 4);
			document.documentElement.scrollTop += distance;
			if(scrollDistance == 0){
				clearInterval(backTopAnimate);
			}
		},35)
	}
}