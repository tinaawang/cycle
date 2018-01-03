var allButtons = $('#buttons>span');
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index();
        var p = index * -300;
        $('#cat').css({
            transform: 'translate(' + p + 'px)'
        })
        active(allButtons.eq(index));
    })
}

var n = 0;
allButtons.eq(n % allButtons.length).trigger('click');

function active($button){
    $button.addClass('red').siblings().removeClass('red');
}

var timeId = setTime();
function setTime(){
    return setInterval(() => {
        n++;
        allButtons.eq(n % allButtons.length).trigger('click');
    },2000)

}


$('.window').on('mouseenter',function(){
    window.clearInterval(timeId);
})

$('.window').on('mouseleave',function(){
    timeId = setTime();
})

