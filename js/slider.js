$(function(){
    var curSlide = 0;
    var maxSlide = $('.banner-single').length - 1;
    var delay = 6;

    initSlider();
    changeSlide();

    function initSlider(){
        $('.banner-single').hide();
        $('.banner-single').eq(0).show();
    }
    function changeSlide(){ 
        setInterval(function(){
            $('.banner-single').eq(curSlide).fadeOut(1000);
            curSlide++;
            if(curSlide > maxSlide)
                curSlide = 0;
            $('.banner-single').eq(curSlide).fadeIn(1000);
        },delay * 1000);
     }
})