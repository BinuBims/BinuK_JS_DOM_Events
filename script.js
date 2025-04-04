//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function(){

    //Get the element with an id of onload
    let onLoadEl = document.getElementById("onload");
   
    //Add some HTML within the element we grabbed
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
   
   })

   
//Get the element that will show our key code
let directionEl = document.getElementById("direction");

// Can be changed with Key press or key up depending on what you might need
document.addEventListener("keydown", function(e) {

 // When a key is pressed, the element with the id of direction will show the message
 directionEl.innerText = `The Key you pressed is ${e.code}`;

});

let clickMe = document.getElementById("clickMe")

clickMe.addEventListener("click", function(){
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

function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn")
    btn.classList.toggle("glow"); // Toggles glow effect
   }
   
