'use strict';

var $ = require('jquery');
require('magnific-popup');
require('../../../node_modules/magnific-popup/src/css/main.scss');
require('slick-carousel');
require('../../../node_modules/slick-carousel/slick/slick.scss');

module.exports = function() {
  $('.popup-btn').each(function(index, obj) {
    var $this = $(obj);

    var settings = {};

    settings.type = 'inline';
    if (typeof $this.data('type') !== 'undefined') {
      settings.type = $this.data('type');
    }

    if (settings.type == 'inline') {
      var slider = $($this.data('mfp-src')).find('.slick-slider');

      if (slider.length) {
        settings.callbacks = {
          open: function() {
            slider.slick();
          },
          close: function() {
            history.pushState('', document.title, window.location.pathname + window.location.search);
          },
        };
      }
      else {
        settings.callbacks = {
          close: function() {
            history.pushState('', document.title, window.location.pathname + window.location.search);
          },
        };
      }
    }


    $this.magnificPopup(settings);
  });
};
