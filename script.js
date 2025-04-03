document.addEventListener("DOMContentLoaded", function(){
    let onLoadElement = document.getElementById("onload");

    onLoadElement.innerHTML = "<h1> I loaded because the DOM was fully rendered.</h1>"
});

document.addEventListener("keydown", function(e){
    let directionElement = document.getElementById("direction");

    directionElement.innerText = `The key you pressed is ${e.code}`;
})

let clickMe = document.getElementById("clickMe")

clickMe.addEventListener("click", function(){
    ;
    clickMe.innerText = "You clicked me!";
})



document.getElementById("randomColorBtn").addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    document.querySelector("body").style.backgroundColor = color;

}