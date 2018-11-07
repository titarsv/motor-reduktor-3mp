// God save the Dev
'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('./assets/templates/layouts/index.html');
}

// Depends
var $ = require('jquery');
require('bootstrap');

// Modules
var Forms = require('_modules/forms');
var Slider = require('_modules/slider');
var Popup = require('_modules/popup');
var Fancy_select = require('_modules/fancyselect');
// var Jscrollpane = require('_modules/jscrollpane');
// var LightGallery = require('_modules/lightgallery');
var Jslider = require('_modules/jslider');
var Fancybox = require('_modules/fancybox');
var Chosen = require('_modules/chosen');
require('slick-lightbox');

// Stylesheet entrypoint
require('_stylesheets/app.scss');

// Are you ready?
$(function () {
    new Forms();
    new Popup();
    new Fancy_select();
    // new Jscrollpane();
    // new LightGallery();
    new Slider();
    new Jslider();
    new Fancybox();
    new Chosen();

    $('.popup-btn').on('mfpOpen', function(e) {
      var content = $.magnificPopup.instance.content[0];
      var sliders = $(content).find('.slick-slider');

      if (sliders.length){
        sliders.each(function() {
          $(this).slick('unslick');
          $(this).slick();
        });
      }
    });

    $('.production-slider').slickLightbox({
      itemSelector: 'span',
      src: function(element){
        return $(element).data('src');
      }
    });
  $('.scroll-navigation').on('click', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-110}, 700);
  });

  $('.section-7 form').on('sent', function () {
        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({'event': 'get_help'});
        }
    });
    $('.section-3 form').on('sent', function () {
        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({'event': 'get_quality'});
        }
    });
    $('.section-1 form').on('sent', function () {
        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({'event': 'get_price'});
        }
    });
    $('.product-popup__wrapper form, #order-popup').on('sent', function () {
        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({'event': 'checkout'});
        }
    });


    var siteUrl = window.location;
    $('.prod-item').click( function() {
        window.location.hash += $(this).data('url');
    });
    $('.popup-btn').on('close', function() {
        console.log('Popup opened',  $.magnificPopup.instance);
      });
});
