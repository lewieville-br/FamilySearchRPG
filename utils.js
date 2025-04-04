const gameBox = document.getElementsByClassName("game-container")[0];
const gameButton = document.getElementById("game-button");
const ghost = document.getElementById("ghost");
const loader = document.getElementById("loader");

ghost.style.display = "none";
loader.style.display = "none";
gameButton.style.display = "none";
gameBox.style.display = "block";
gameButton.addEventListener("click", ()=> {
    gameButton.style.display = "none";
    ghost.style.display = "block";
    loader.style.display = "block";

    if (ghost.style.display === "block"){
        setTimeout(()=>{
            ghost.style.display = "none";
            loader.style.display = "none";
            gameBox.style.display = "block";
        },3500)
    };
 
});

 

const utils = {
    widthGrid(n){
        return n * 16
    }
};

