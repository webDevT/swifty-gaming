$(function(){

    $('.menu-btn').click(function(){
        $('.header').toggleClass('active');
        $(this).toggleClass('active');
    })

    $('.menu li a').click(function(){
        $('.header').removeClass('active');
        $('.menu-btn').removeClass('active');
    })

    $('.faq__item-header').click(function(){
        $(this).parent().toggleClass('active');
        $(this).parent().find('.faq__item-content').slideToggle();
    })

    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });


});