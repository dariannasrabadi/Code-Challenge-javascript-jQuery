$(document).ready(onReady);

var i = 0; // button click count

function onReady() { //Start onReady Function
$('#generator').on('click', divCreator);


} // END: onReady

function divCreator() {//start of divCreator
  console.log('I was clicked');
  i++; // adding count
  var $div = $('<div></div>');
  $div.append('<p>' + i + '</p>');


  $('body').append($div);

} // END: divCreator
