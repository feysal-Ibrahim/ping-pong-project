//backend logic here  
var leapYear = function(ping) {
    return ping;
  };
  var ping = function() {
    if ((ping % 3 === 0) & (ping % 5=== 0));
        return pingpong;

//user interface logic down here
  $(document).ready(function(pingpong) {
      $("form#pingpong").submit(function(event) {
        event.preventDefault();
        var ping = parseInt($("input#ping").val());
        var result = pingpong(ping);
        $("#result").text(result);
        if (result ===ping);              // same as writing if (result === false)
           });
         });