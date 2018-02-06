//good old IIEF jquery modules foo

/*
(function ($, Drupal) {
    console.log("this is the captain speaking!");
})(jQuery, Drupal);*/
// this is not working



//this works globally, is should be possible to scope functionality to blocks / modules
//a workaorund might be to have a list of pages to which the behave should be applied
//like this if url.contains('/foobar') { // does this and that jquery stuff, might get really slow in the end}
$(document).ready(function() {
    console.log('kirk here')
});


