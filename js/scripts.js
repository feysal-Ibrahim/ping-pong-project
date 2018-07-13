//backend logic here  
var leapYear = function(year) {
    return false;
  };
  var leapYear = function(year) {
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return true;
      } else {
        return false;
      }
    };

//user interface logic down here
  $(document).ready(function() {
    $('form#pingpong').submit(function(event) {
      var ping = $('input#ping').val();

      displayResultList(pingpong(ping));

      event.preventDefault();
  });
  });