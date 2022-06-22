(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtSliderRevolutionBoxedWidth = {
    attach: function (context, settings) {
      $(context).find('#slideshow-boxedwidth .rev_slider').once('mtSliderRevolutionBoxedWidthInit').revolution({
        sliderType:"standard",
        sliderLayout: "auto",
        gridwidth: [1140,970,750,436],
        gridheight: drupalSettings.scholarly.sliderRevolutionBoxedWidthInit.slideshowBoxedWidthInitialHeight,
        autoHeight: "on",
        delay: drupalSettings.scholarly.sliderRevolutionBoxedWidthInit.slideshowBoxedWidthEffectTime,
        disableProgressBar:'off',
        responsiveLevels:[1199,991,767,466],
        navigation: {
          onHoverStop:"off",
          arrows:{
            enable:true,
            hide_onmobile:true,
            tmp: "<div class='tp-title-wrap'><span class='tp-arr-titleholder'></span></div>",
            left:{
              h_align:"right",
              v_align:"bottom",
              h_offset:40,
              v_offset:0
            },
            right:{
              h_align:"right",
              v_align:"bottom",
              h_offset:0,
              v_offset:0
            }
          },
          bullets:{
            style:"",
            enable:true,
            direction:"horizontal",
            space: 10,
            h_align: "center",
            v_align:"bottom",
            h_offset: 0,
            v_offset: 20,
            tmp:"",
          },
          touch:{
            touchenabled:"on",
            swipe_treshold:75,
            swipe_min_touches:1,
            drag_block_vertical:false,
            swipe_direction:"horizontal"
          }
        }
      });

      $('#slideshow-boxedwidth .rev_slider').bind("revolution.slide.onloaded",function (e) {
        $(".slider-revolution-wrapper:not(.one-slide) .tparrows").fadeIn("slow");
      });

    }
  };
})(jQuery, Drupal, drupalSettings);
