$(document).ready(function() {
    $(function() {
        $('#slider div:gt(0)').hide();
        setInterval(function() {
            $('#slider div:first-child').fadeOut(0)
                    .next('div').fadeIn(1000)
                    .end().appendTo('#slider');
        }, 4000);
    });

    //Function del menu2
    $('#css_menu2').prepend('<div id="menu-button">Menu</div>');
    $('#css_menu2 #menu-button').on('click', function() {
        var menu = $(this).next('ul');
        if (menu.hasClass('open')) {
            menu.removeClass('open');
        }
        else {
            menu.addClass('open');
        }
    });

//EFECTOS PARA LAS FLECHAS DE INICIO
    $("#d_nosotros").hide();

    $('#nosotros').click(function() {
        if ($("#d_nosotros").is(":visible")) {
            $("#d_nosotros").slideUp(
                    function() {
                        $("#nosotros").html("&#9660;");
                    });
        }
        else{
           $("#d_nosotros").slideDown(
                    function() {
                        $("#nosotros").html("&#9650;");
                    }); 
        }
    });    

    $('#nosotros').mouseover(function() {
        $("#d_nosotros").slideDown(function() {
            $("#nosotros").html("&#9650;");
        }
        );
    });


    $("#d_trayectos").hide();
    
    $('#trayectos').click(function() {
        if ($("#d_trayectos").is(":visible")) {
            $("#d_trayectos").slideUp(
                    function() {
                        $("#trayectos").html("&#9660;");
                    });
        }
        else{
           $("#d_trayectos").slideDown(
                    function() {
                        $("#trayectos").html("&#9650;");
                    }); 
        }
    });        

    $('#trayectos').mouseover(function() {
        $("#d_trayectos").slideDown(function() {
            $("#trayectos").html("&#9650;");
        }
        );
    });

//EFECTOS PARA LAS FLECHAS DE INICIO

//EFECTOS PARA LOS ENLACES DEL MENU

    $("#menu1").click(function() {
        $(".animacion").hide();
        $("#contenido1").css("display", "inline-block");
    });

    $("#menu3").click(function() {
        $(".animacion").hide();
        $("#contenido_linea1").css("display", "inline-block");
    });

    $("#menu4").click(function() {
        $(".animacion").hide();
        $("#contenido_linea2").css("display", "inline-block");
    });

    $("#menu5").click(function() {
        $(".animacion").hide();
        $("#contenido_linea3").css("display", "inline-block");
    });

    $("#menu6").click(function() {
        $(".animacion").hide();
        $("#contenido_linea4").css("display", "inline-block");
    });

    $("#menu7").click(function() {
        $(".animacion").hide();
        $("#contenido_linea5").css("display", "inline-block");
    });

//EFECTOS PARA LOS ENLACES DEL MENU

});