let Toggle = false;
$("#sidebar_menu li").click(
    function () {
        if (!$(this).hasClass('active')) {
            $("#sidebar_menu li").removeClass("active");
            $(this).addClass("active");
            $(".child_menu").slideUp(500);
            $("#sidebar_menu .fa-angle-down").removeClass("fa-angle-down");
            $(" .fa-angle-left", this).addClass("fa-angle-down");
            if (!Toggle) {
                $(" .child_menu", this).slideDown(500);
            } else {
                $(" .child_menu", this).show();
            }
        }
        else if(Toggle){
            $(".child_menu").slideUp(500);
            $(" .child_menu", this).show();
        }

    }
)
$("#sidebarToggle").click(
    function () {
        if ($('.page_sidebar').hasClass('toggled')) {
            Toggle = false
            $('.page_sidebar').removeClass('toggled');
            $("#sidebar_menu").find('.active .child_menu').css('display', 'block');
            $(".page_content").css('margin-right', '240px');
        } else {
            Toggle = true
            $('.page_sidebar').addClass('toggled');
            $(".child_menu").hide();
            $(".page_content").css('margin-right', '50px');
        }
    }
)
$(window).resize(function () {
    set_sidebar_widh();
})
$(document).ready(function () {

    set_sidebar_widh();
})
set_sidebar_widh=function () {
    const width = document.body.offsetWidth;
    if (width<850) {
        $('.page_sidebar').addClass('toggled');
        $('.page_content').css('margin-right', '50px');
        $('.child_menu').hide()

    } else {
        if (Toggle == false) {
            $('.page_sidebar').removeClass('toggled');
            $('.page_content').css('margin-right', '240px');
        }
    }
}
