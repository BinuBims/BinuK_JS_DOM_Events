document.addEventListener("DOMContentLoaded", function(){
    let onLoadElement = document.getElementById("onload");

    onLoadElement.innerHTML = "<h1> I loaded because the DOM was fully rendered.</h1>"
});

document.addEventListener("keydown", function(e){
    let directionElement = document.getElementById("direction");

    directionElement.innerText = `The key you pressed is ${e.code}`;
})

document.addEventListener("click", function(){
    let clickMe = document.getElementById("clickMe");
    clickMe.innerText = "You clicked me!";
})