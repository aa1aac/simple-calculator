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
    if (operator2.includes(inputs.includes(".")===true) && input==="."){
      console.log("duplicate '.' ");
    }
    else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
    else if(operators1.includes(inputs[inputs.length-1]===false)){
      inputs.push(input);
    }
    else if (nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
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
    else{
      if(inputs[inputs.length-1].indexOf("+","-","/","*")===-1){
       getValue(this.value);
      }
      else{
       getValue(this.value);
      }
    }
  })
})
