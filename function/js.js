$(document).ready(function(){
  // declaration of variable for inputs
  var inputs=[""];

  // stores current input
  var inputString;

  // stores thae value without "."
  var operators1=["+","-","/","*"];
  // operator with "."
  var operator2=["."];
  // numbers for validation
  var nums=[0,1,2,3,4,5,6,7,8,9];

  function getValue(input){


  }

  function update(){
    totalString=inputs.join("");
   $(".input").html(totalString);

  }

  function getTotal(){
    totalString=inputs.join("");
    $(".output").html(eval(totalString));
  }
  


  $("button").on("click",function(){
    if (this.value==="AC"){
       console.log("clickedac");
      inputs=[""];
      update();
    }
    else if(this.value==="CE"){
      console.log("ce");
      inputs.pop();
      update();
    }
    else if(this.value==="="){
      console.log("=");
      getTotal();
    }
  })
})
