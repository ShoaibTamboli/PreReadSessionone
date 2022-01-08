//////Normal way for writing a function.

let btnSubmit=document.getElementById("btn-submit");


btnSubmit.addEventListener("click", submit)
function submit(){
    console.log("clicked")
}

//Arrow Function

x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}

