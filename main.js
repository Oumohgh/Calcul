
var displayDiv = document.getElementById("display")
var buttons = document.querySelectorAll(".buttons button")

buttons.forEach(btn=>{
    btn.onclick = function () {
    if (btn.innerHTML=="=") {
    displayDiv.innerHTML = eval(displayDiv.innerHTML)
    }else if (btn.innerHTML=="C"){
        displayDiv.innerHTML = ""
    } else
        displayDiv.innerHTML += btn.innerHTML
    }
})
