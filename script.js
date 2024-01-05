$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleclass('fa-times');
        $('.nav').toggleclass('nav-toggle');
    });

    $(window).on('load scroll',function(){

        $('.fa-bars').removeclass('fa-times');
        $('.nav').removeclass('nav-toggle');

        if($(window).scrolltop() > 10){
            $('header').addclass('header-active');
        }else{
            $('header').removeclass('header-active');
        }

    });

    $('.facility').magnificpopup({
        delegate:'a',
        type:'image',
        gallery:{
            enable:true
        }
    });

});