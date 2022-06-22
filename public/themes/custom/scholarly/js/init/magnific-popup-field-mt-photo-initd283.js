(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtMagnificPopupFieldMtPhoto = {
    attach: function (context, settings) {
      $(context).find('.field--name-field-mt-photo a.image-popup').once('mtMagnificPopupFieldMtPhotoInit').magnificPopup({
        type:"image",
        removalDelay: 300,
        mainClass: "mfp-fade",
        gallery: {
          enabled: true, // set to true to enable gallery
        },
        image: {
          titleSrc: function(item) {
            return item.el.children()[0].title || '';
          }
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
