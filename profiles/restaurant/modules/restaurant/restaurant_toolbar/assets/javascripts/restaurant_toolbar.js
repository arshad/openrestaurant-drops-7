/**
 * Restaurant toolbar.
 */
(function ($) {
  Drupal.behaviors.RestaurantToolbar = {
    attach: function(context, settings) {
      // Make sure navbar is always vertical.
      if ($('#navbar-administration').length) {
        var $navbar = $('#navbar-administration');
        var $tray = $('#navbar-administration .navbar-tray');

        // Listen to navbar change and ensure vertical navbar.
        ensureVerticalNavbar();
        $(document).on('drupalNavbarTabChange', function(event, tray) {
          ensureVerticalNavbar();
        });

        function ensureVerticalNavbar() {
          $('body')
            .removeClass('navbar-horizontal')
            .addClass('navbar-vertical');
          $tray
            .removeClass('navbar-tray-horizontal')
            .addClass('navbar-tray-vertical');

          // Lock it.
          if (localStorage) {
            localStorage.setItem('Drupal.navbar.trayVerticalLocked', true);
          }
        }
      }
    }
  }
})(jQuery);
