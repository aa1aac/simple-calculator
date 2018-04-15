$(document).ready(function(){
// declaration of value
  var value="";
  // event listener for button

    $("button").click(function() {

        var clickedButton = $(this).val();
        $(".input").html=clickedButton;
        if (isNaN(clickedButton)){
            
            var calculation=clickedButton;
            console.log(calculation);
        }
        else{
            number=clickedButton;
            console.log(number);
        }   
    });
  
})
