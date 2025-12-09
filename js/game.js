let canvas;
let ctx;
let character = new Image();

function init(){
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");


character.src = "./img/png/troll1/troll1-walk.png";

character.onload = () => {
        ctx.drawImage(character, 20, 50, 100, 90);
    };
}