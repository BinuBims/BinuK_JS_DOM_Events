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
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    
    document.querySelector("body").style.backgroundColor = color;

}

document.getElementById("dark").addEventListener("click", dark)

function dark(){
    document.querySelector("body").classList.toggle("darkBody");
    if(document.querySelector("#dark").innerText === "Dark Mode"){
        document.querySelector("#dark").innerText = "Light Mode"
    }else{
        document.querySelector("#dark").innerText = "Dark Mode"
    }
    
}
