$(document).ready(onReady);

var i = 0; // button click count

function onReady() { //Start onReady Function
$('#generator').on('click', divCreator);


} // END: onReady

function divCreator() {//start of divCreator
  console.log('I was clicked');
  i++; // adding count
  var $div = $('<div class="generated"></div>'); // separating divs that were created via the button.
  $div.append('<p>' + i + '</p>');
  $div.append('<button class="swapBtn">Swap</button>');
  $div.append('<button class="deleteBtn">Delete</button>');


  $('body').append($div);

} // END: divCreator
