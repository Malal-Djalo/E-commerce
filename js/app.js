
// sticky navbar
$(window).scroll(function(){
    let position = $(this).scrollTop();

    if(position >= 147){
        $('.navbar').addClass('nav-background');
        $('.navbar').addClass('fixed-top');
    }else{
        $('.navbar').removeClass('nav-background');
        $('.navbar').removeClass('fixed-top');
    }
});
// end of sticky navbar

