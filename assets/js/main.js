
(function ($) {
	"use strict";

   $(document).ready(function($){

      // Start Owl-carousel
      $('.slider-area').owlCarousel({
         loop: true,
         dots: true,
         thumbs: false,
         nav: true,
         navText:['<i class="fa fa-long-arrow-alt-left"></i>','<i class="fa fa-long-arrow-alt-right"></i>'],
         autoplay: true,
			autoplayTimeout:3000,
    		autoplayHoverPause:true,
         responsive: {
            0:{
                items:1
            },
            767:{
                items: 1
            },
            992:{
                items: 1
            },
        },
      });
      $('.team-carousel, .testimonial-carousel, .team-carousel.theme-2').owlCarousel({
         loop: true,
         dots: true,
         autoplay: true,
			autoplayTimeout:3000,
    		autoplayHoverPause:true,
         margin: 30,
         responsive: {
            0:{
                items:1
            },
            767:{
                items: 2
            },
            992:{
                items: 3
            },
        },
      });
      $('.brand-carousel').owlCarousel({
         loop: true,
         dots: false,
         autoplay: true,
			autoplayTimeout:3000,
    		autoplayHoverPause:true,
         margin: 100,
         responsive: {
            0:{
                items:1
            },
            576:{
                items: 2
            },
            767:{
                items: 3
            },
            992:{
                items: 5
            },
        },
      });
      // End Owl-carousel //


      // Start Isotope //
      // data filter
      $('.data-filter li').on('click', function () {
         var filterData = $(this).attr('data-filter');

         $('.project-list').isotope({
            filter: filterData,
         });

      // Tab Color
         $('.data-filter li').removeClass('active');
         $(this).addClass('active');
      });

      // initial isotope
      $('.project-list').isotope({
            masonry: {
               columnWidth: '.col-lg-3',
               horizontalOrder: false
            },
      });

      //for menu active class
      // $('.data-filter li').on('click', function(event) {
      //    $(this).siblings('.active').removeClass('active');
      //    $(this).addClass('active');
      //    event.preventDefault();
      // });
      // End Isotope //


      // Circle Progress Bar
      $('#web-design-progressbar').circleProgress({
         value: .9,
         size: 250,
         fill: "#0bbbc1",
         thickness: 3,
         emptyFill: "#fff",
         startAngle: -1,
         animation: { duration: 3000, easing: "circleProgressEasing" },
      }).on('circle-animation-progress', function(event, progress) {
       $(this).find('.progressbar-percentage').html(Math.round(90 * progress) + '<i>%</i>');
     });
      $('#graphic-design-progressbar').circleProgress({
         value: .95,
         size: 250,
         fill: "#0bbbc1",
         thickness: 3,
         emptyFill: "#fff",
         startAngle: -1,
         animation: { duration: 3000, easing: "circleProgressEasing" },
      }).on('circle-animation-progress', function(event, progress) {
       $(this).find('.progressbar-percentage').html(Math.round(95 * progress) + '<i>%</i>');
     });
      $('#digital-marketing-progressbar').circleProgress({
         value: .84,
         size: 250,
         fill: "#0bbbc1",
         thickness: 3,
         emptyFill: "#fff",
         startAngle: -1,
         animation: { duration: 3000, easing: "circleProgressEasing" },
      }).on('circle-animation-progress', function(event, progress) {
       $(this).find('.progressbar-percentage').html(Math.round(84 * progress) + '<i>%</i>');
     });
   //   End Circle Progress Bar


   // Search Popup
   $('.search-trigger').on('click', function(){
      $('.search-popup, .overlay').addClass('active');
   })
   $('.search-close, .overlay').on('click', function(){
      $('.search-popup, .overlay').removeClass('active');
   });
   // End Search Popup

   // Start Slick Nav
   $('#mobile-menu').slicknav({
      prependTo: '.slick-nav',
      allowParentLinks: true
   });
   // End Slick Nav


   });

})(jQuery);
