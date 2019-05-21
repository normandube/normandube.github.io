jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').focus()
          })

        $('#preloader').delay(200).fadeOut('slow');
    }());



}); // JQuery end