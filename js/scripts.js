//backend logic here//

var pingpong = function(ping) {
  var numberArray = [];
  if (ping > 0) {
    for (var index = 1; index <= ping; index++) {
      numberArray.push(index);
    }
    numberArray.forEach(function(ping) {
      if (ping % 15 === 0) {
        numberArray[ping - 1] = 'pingpong';
      } else if (ping % 3 === 0) {
        numberArray[ping - 1] = 'ping';
      } else if (ping % 5 === 0) {
        numberArray[ping - 1] = 'pong';
      }
    });
  }
  return numberArray;
}

var Result = function(outputArray) {
  $('ul#list').empty();
  outputArray.forEach(function(item) {
    $('ul#list').append('<li>' + item + '</li>');
  });
}

//user interface logic down here//
$(document).ready(function() {
  $("form#pong").submit(function(event) {
    var ping = $("input#ping2").val();

    Result(pingpong(ping));
    alert("Hey!Bro BOYD..Am not yet good thou!..Need you to interpret some concepts here.I will slack you soon.PRESS OK TO VIEW THE RESULT.");

    event.preventDefault();
});
});