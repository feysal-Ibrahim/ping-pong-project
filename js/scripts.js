




















$(document).ready(function() {
       $("form#pingpong").submit(function(event) {
           event.preventDefault();
       var number= parseInt (("input#formNumber").val());
       pingPong(number);
   
       numbersToBePingPonged.forEach(function(number){
           $("#output").append(""+ number + "");
       });
   
       
       });
   
   });    

