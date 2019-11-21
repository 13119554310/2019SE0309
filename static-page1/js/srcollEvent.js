var pic = document.querySelectorAll('.slide_pics >li >img'),
	btn = document.querySelectorAll('.slide_taps li'),
	timeFirst = 0,
	timeLast = 0,
	startTime = 0,
	endTime = 0,
	i = 0,
	n = 0,
	autoBoo = true;
for(var j = 0; j < btn.length; j ++){
	btn[j].addEventListener('click',clickScroll,false);
}
// 绑定事件句柄
var scrollPic = setInterval(function() {
	if(autoBoo){
		n = i;
		i ++;
		if(i > 2){
		i = 0;
		}
		autoScroll();
	}
},4000);
// 定时轮播
var time = setInterval(function() {
	timeLast = new Date().getTime();
	var subTime = timeLast - timeFirst;
	if(subTime > 4000){
		autoBoo = true;
	}
},1000);
// 监听用户点击间隙
function clickScroll(even) {
	var event = even || window.even,
		name = event.srcElement.className;
		distance = event.screenX;
	timeFirst = new Date().getTime();
	autoBoo = false;
	n = i;
	if(name == ('taps_on')){
		return;
	}else
		clickBtnScroll(distance);
}
// 点击滚动事件
function clickBtnScroll(distance) {
	if(distance < 920){
		i = 0;
	}else if(distance < 950){
		i = 1;
	}else if(distance < 980){
		i = 2;
	}
	autoScroll();
}
// 点击按钮跳转事件
function autoScroll() {
	pic[i].className = 'slide_on';
	btn[i].className = 'taps_on';
	pic[n].className = '';
	btn[n].className = '';
}
// 封装滚动事件函数