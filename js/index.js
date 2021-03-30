$(document).ready(function(){

    var $menu = $('.menu a');
    
    var $header = $('#header').offset().top;
    var $sobreMi = $('#sobre-mi').offset().top;
    var $conocimientos = $('#conocimientos').offset().top;
    var $proyectos = $('#proyectos').offset().top;
    var $contacto = $('#contacto').offset().top;

    var $1 = $('#1');
    var $2 = $('#2');
    var $3 = $('#3');
    var $4 = $('#4');
    var $5 = $('#5');




    $menu.each(function (index, elemento) {
        
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({top:'0px'},1000+(index*150))

    });

  
    $1.click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $header
        },500);
    });

    $2.click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $sobreMi-100
        },500);
    });
    
    $3.click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $conocimientos
        },500);
    });

    $4.click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $proyectos-30
        },500);
    });

    $5.click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $contacto
        },500);
    });
});