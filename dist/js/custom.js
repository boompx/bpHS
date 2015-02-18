/* 
 * Written for: Boompx - jQuery Hero Slider Plugin
 * Github     : https://github.com/boompx/bpHS
 */

"use strict";

(function($) { 
  $(document).ready(function() {
  
    // fire default bpHS!
    $('#demo-default').bpHS({
     nextText : '<i class="fa fa-angle-right"></i>',
     prevText : '<i class="fa fa-angle-left"></i>',
     autoPlay: false
    });
    
  });
})(jQuery); 