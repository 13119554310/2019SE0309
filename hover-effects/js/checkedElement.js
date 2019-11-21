var checkedLi = document.querySelectorAll('.nav-num');
var preIndex = 0;
var length = checkedLi.length;
for(var i = 0; i < length; i ++) {
    (function (index){
        var nextIndex = index;
        checkedLi[nextIndex].onclick = function (){
            checkedLi[preIndex].className = 'nav-num';
            checkedLi[nextIndex].className = 'nav-num checked';
            preIndex = nextIndex;
        }
    }(i))
}