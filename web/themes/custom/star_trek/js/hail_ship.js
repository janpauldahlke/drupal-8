//good old IIEF jquery modules foo

/*
(function ($, Drupal) {
    console.log("this is the captain speaking!");
})(jQuery, Drupal);*/
// this is not working



//this works globally, is should be possible to scope functionality to blocks / modules
$(document).ready(function() {
    console.log('kirk here')
})

