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

    $("#d_nosotros").hide();

    $('#nosotros').toggle(function() {
        $("#d_nosotros").slideDown(
                function() {
                    $("#nosotros").html("&#9650;");
                }
        );
    }, function() {
        $("#d_nosotros").slideUp(
                function() {
                    $("#nosotros").html("&#9660;");
                }
        );
    });

    $("#d_trayectos").hide();
    $('#trayectos').toggle(function() {
        $("#d_trayectos").slideDown(
                function() {
                    $("#trayectos").html("&#9650;");
                }
        );
    }, function() {
        $("#d_trayectos").slideUp(
                function() {
                    $("#trayectos").html("&#9660;");
                }
        );
    });
});