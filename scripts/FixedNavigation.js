/**
 * Created by artemkopytko on 12.03.17.
 */
$(document).ready(function () {
    $(window).scroll(function () {
        if($(window).scrollTop() > 699) {
            $('#Header').addClass('header-fixed');
        } else {
            $('#Header').removeClass('header-fixed');
        }
    })
});