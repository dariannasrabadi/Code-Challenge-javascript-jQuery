$(document).ready(onReady);

function onReady() { //Start onReady Function
$('#generator').on('click', divCreator);



} // END: onReady

function divCreator() {//start of divCreator
  console.log('I was clicked');
  $('body').append('<div></div>');

} // END: divCreator
