let number = 0
function myFunction() {
    number++;
    document.getElementById("demo").innerHTML = 0 + number ;
}


document.getElementById("resetButton").addEventListener("click" , function (deletebutton) {
    document.getElementById("demo").innerHTML = "0"
  })
 

