const hawkSFX = document.getElementById("audio3");









let leftPoints = 0
let rightPoints = 0







window.addEventListener("keyup", (left) => {  
if (left.keyCode === 65) {
leftPoints += 1


  }
 
});
window.addEventListener("keyup", (right) => {  
if (right.keyCode === 76) {

rightPoints += 1

  }
 
});

let gameEnd = 0


function refresh() {

location.reload();

}

function draw() {

document.getElementById("start").style.display = "none";
document.getElementById("start2").style.display = "block";



if (gameEnd > 0) {

location.reload();

}

else if (gameEnd == 0) {

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}





document.getElementById("start2").innerHTML = "3";
sleep(1000).then(() => {
document.getElementById("start2").innerHTML = "2";
});
sleep(2000).then(() => {
document.getElementById("start2").innerHTML = "1";
});


sleep(3000).then(() => {

document.getElementById("start2").innerHTML = "FIRE";


document.getElementById("p1").style.backgroundImage = "url('PelingtonDuelMash/graphics/OliveDraw.png')";

document.getElementById("p2").style.backgroundImage = "url(''PelingtonDuelMash/graphics/LilacDraw.png')";



leftPoints -= leftPoints;
rightPoints -= rightPoints;


});

sleep(9000).then(() => {

let gameTime = Math.floor(Math.random() * 20);


if (gameTime > 10) {


if (rightPoints > leftPoints) {

document.getElementById("start2").innerHTML = "Lilac Victory!";


document.getElementById("p1").style.backgroundImage = "url('graphics/OliveDead.png')";







var shotSFX = document.getElementById("audio");
shotSFX.play();



gameEnd += 1;

document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints2").style.color = "gold";
document.getElementById("finalPoints1").style.color = "red";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints2").style.animationName= "textGrow";
document.getElementById("finalPoints1").style.animationName= "textShrink";






}
else if (rightPoints < leftPoints) {
document.getElementById("p2").style.backgroundImage = "url('graphics/LilacDead.png')";
var shotSFX = document.getElementById("audio");
document.getElementById("start2").innerHTML = "Olive Victory!";

shotSFX.play();



document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints1").style.color = "gold";
document.getElementById("finalPoints2").style.color = "red";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints1").style.animationName= "textGrow";
document.getElementById("finalPoints2").style.animationName= "textShrink";





}
else {
document.getElementById("start2").innerHTML = "TIE!";
var tieSFX = document.getElementById("audio2");
tieSFX.play();
gameEnd += 1;
gameEnd += 1;


document.getElementById("confetti").style.display = "block";

document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints2").style.color = "gold";
document.getElementById("finalPoints1").style.color = "gold";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints2").style.animationName= "textGrow";
document.getElementById("finalPoints1").style.animationName= "textGrow";

}

}
});

sleep(11000).then(() => {

let gameTime = Math.floor(Math.random() * 20);


if (gameTime > 10 && gameEnd == 0) {

if (rightPoints > leftPoints) {
document.getElementById("start2").innerHTML = "Lilac Victory!";

document.getElementById("p1").style.backgroundImage = "url('graphics/OliveDead.png')";
var shotSFX = document.getElementById("audio");
shotSFX.play();
gameEnd += 1;


document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints2").style.color = "gold";
document.getElementById("finalPoints1").style.color = "red";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints2").style.animationName= "textGrow";
document.getElementById("finalPoints1").style.animationName= "textShrink";


}
else if (rightPoints < leftPoints) {
document.getElementById("p2").style.backgroundImage = "url('graphics/LilacDead.png')";
var shotSFX = document.getElementById("audio");
shotSFX.play();
gameEnd += 1;
document.getElementById("start2").innerHTML = "Olive Victory!";


document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints1").style.color = "gold";
document.getElementById("finalPoints2").style.color = "red";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints1").style.animationName= "textGrow";
document.getElementById("finalPoints2").style.animationName= "textShrink";



}
else {
document.getElementById("start2").innerHTML = "TIE!";
var tieSFX = document.getElementById("audio2");
tieSFX.play();
gameEnd += 1;
document.getElementById("confetti").style.display = "block";


document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints2").style.color = "gold";
document.getElementById("finalPoints1").style.color = "gold";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints2").style.animationName= "textGrow";
document.getElementById("finalPoints1").style.animationName= "textGrow";
}

}
});

sleep(13000).then(() => {

let gameTime = Math.floor(Math.random() * 20);


if (gameTime > 10 && gameEnd == 0) {

if (rightPoints > leftPoints) {
document.getElementById("start2").innerHTML = "Lilac Victory!";

document.getElementById("p1").style.backgroundImage = "url('graphics/OliveDead.png')";
var shotSFX = document.getElementById("audio");
shotSFX.play();
gameEnd += 1;


document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints2").style.color = "gold";
document.getElementById("finalPoints1").style.color = "red";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints2").style.animationName= "textGrow";
document.getElementById("finalPoints1").style.animationName= "textShrink";


}
else if (rightPoints < leftPoints) {
document.getElementById("p2").style.backgroundImage = "url('graphics/LilacDead.png')";
document.getElementById("start2").innerHTML = "Olive Victory!";

var shotSFX = document.getElementById("audio");
shotSFX.play();
gameEnd += 1;


document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints1").style.color = "gold";
document.getElementById("finalPoints2").style.color = "red";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints1").style.animationName= "textGrow";
document.getElementById("finalPoints2").style.animationName= "textShrink";



}
else {
document.getElementById("start2").innerHTML = "TIE!";
var tieSFX = document.getElementById("audio2");
tieSFX.play();
gameEnd += 1;
document.getElementById("confetti").style.display = "block";


document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints2").style.color = "gold";
document.getElementById("finalPoints1").style.color = "gold";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints2").style.animationName= "textGrow";
document.getElementById("finalPoints1").style.animationName= "textGrow";
}

}
});
sleep(15000).then(() => {

let gameTime = Math.floor(Math.random() * 20);


if (gameTime > 10 && gameEnd == 0) {

if (rightPoints > leftPoints) {
document.getElementById("start2").innerHTML = "Lilac Victory!";

document.getElementById("p1").style.backgroundImage = "url('graphics/OliveDead.png')";
var shotSFX = document.getElementById("audio");
shotSFX.play();
gameEnd += 1;


document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints2").style.color = "gold";
document.getElementById("finalPoints1").style.color = "red";

document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints2").style.animationName= "textGrow";
document.getElementById("finalPoints1").style.animationName= "textShrink";




}
else if (rightPoints < leftPoints) {
document.getElementById("p2").style.backgroundImage = "url('graphics/LilacDead.png')";
document.getElementById("start2").innerHTML = "Olive Victory!";

var shotSFX = document.getElementById("audio");
shotSFX.play();
gameEnd += 1;



document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints1").style.color = "gold";
document.getElementById("finalPoints2").style.color = "red";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints1").style.animationName= "textGrow";
document.getElementById("finalPoints2").style.animationName= "textShrink";


}
else {
document.getElementById("start2").innerHTML = "TIE!";
var tieSFX = document.getElementById("audio2");
tieSFX.play();
gameEnd += 1;
document.getElementById("confetti").style.display = "block";


document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints2").style.color = "gold";
document.getElementById("finalPoints1").style.color = "gold";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints2").style.animationName= "textGrow";
document.getElementById("finalPoints1").style.animationName= "textGrow";

}

}
});
sleep(17000).then(() => {

let gameTime = Math.floor(Math.random() * 20);

if (gameTime > 10 && gameEnd == 0) {

if (rightPoints > leftPoints) {
document.getElementById("start2").innerHTML = "Lilac Victory!";

document.getElementById("p1").style.backgroundImage = "url('graphics/OliveDead.png')";
var shotSFX = document.getElementById("audio");
shotSFX.play();
gameEnd += 1;


document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints2").style.color = "gold";
document.getElementById("finalPoints1").style.color = "red";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints2").style.animationName= "textGrow";
document.getElementById("finalPoints1").style.animationName= "textShrink";





}
else if (rightPoints < leftPoints){ document.getElementById("p2").style.backgroundImage = "url('graphics/LilacDead.png')";
document.getElementById("start2").innerHTML = "Olive Victory!";

var shotSFX = document.getElementById("audio");
shotSFX.play();
gameEnd += 1;




document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints1").style.color = "gold";
document.getElementById("finalPoints2").style.color = "red";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints1").style.animationName= "textGrow";
document.getElementById("finalPoints2").style.animationName= "textShrink";

}
else {
document.getElementById("start2").innerHTML = "TIE!";
var tieSFX = document.getElementById("audio2");
tieSFX.play();
gameEnd += 1;
document.getElementById("confetti").style.display = "block";

document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints2").style.color = "gold";
document.getElementById("finalPoints1").style.color = "gold";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints2").style.animationName= "textGrow";
document.getElementById("finalPoints1").style.animationName= "textGrow";



}

}
});

sleep(20000).then(() => {

let gameTime = Math.floor(Math.random() * 20);


if (gameTime >= 0 && gameEnd == 0) {

if (rightPoints > leftPoints) {
document.getElementById("start2").innerHTML = "Lilac Victory!";

document.getElementById("p1").style.backgroundImage = "url('graphics/OliveDead.png')";
var shotSFX = document.getElementById("audio");
shotSFX.play();
gameEnd += 1;
document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints2").style.color = "gold";
document.getElementById("finalPoints1").style.color = "red";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints2").style.animationName= "textGrow";
document.getElementById("finalPoints1").style.animationName= "textShrink";






}
else if (rightPoints < leftPoints){
document.getElementById("p2").style.backgroundImage = "url('graphics/LilacDead.png')";
document.getElementById("start2").innerHTML = "Olive Victory!";

var shotSFX = document.getElementById("audio");
shotSFX.play();
gameEnd += 1;




document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints1").style.color = "gold";
document.getElementById("finalPoints2").style.color = "red";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints1").style.animationName= "textGrow";
document.getElementById("finalPoints2").style.animationName= "textShrink";


}


else {
document.getElementById("start2").innerHTML = "TIE!";
var tieSFX = document.getElementById("audio2");
tieSFX.play();
gameEnd += 1;
document.getElementById("confetti").style.display = "block";



document.getElementById("finalPoints1").style.display = "block";
document.getElementById("finalPoints2").style.display = "block";

document.getElementById("finalPoints2").style.color = "gold";
document.getElementById("finalPoints1").style.color = "gold";


document.getElementById("finalPoints1").innerHTML = leftPoints;
document.getElementById("finalPoints2").innerHTML = rightPoints;

document.getElementById("finalPoints2").style.animationName= "textGrow";
document.getElementById("finalPoints1").style.animationName= "textGrow";



}

}
});

}

}

document.getElementById('start').addEventListener("click", draw);
document.getElementById('start2').addEventListener("click", refresh);


function varCheck() {



}
setInterval(varCheck, 500);


function randomIdleChance() {


let idleChance = Math.floor(Math.random() * 20);


if (idleChance < 5) {

document.getElementById('tumbleweed').style.display = "block";
  document.getElementById('tumbleweed').style.animation = 'none';
  document.getElementById('tumbleweed').offsetHeight;
  document.getElementById('tumbleweed').style.animation = null; 

}


else if (idleChance >= 6 && idleChance <= 8) {

hawkSFX.play();



document.getElementById('hawk').style.display = "block";
  document.getElementById('hawk').style.animation = 'none';
  document.getElementById('hawk').offsetHeight;
  document.getElementById('hawk').style.animation = null; 







}


}

setInterval(randomIdleChance, 5000);

function hawkShot() {
let hawkPos = document.getElementById('hawk').offsetLeft;
var shotSFX = document.getElementById("audio");

shotSFX.play();

document.getElementById('hawk').style.display = 'none';
document.getElementById('hawkDead').style.display = "block";
document.getElementById('hawkDead').style.left = hawkPos;
document.getElementById('hawkDead').style.animation = 'none';
  document.getElementById('hawkDead').offsetHeight;
  document.getElementById('hawkDead').style.animation = null; 


}



document.getElementById('hawk').addEventListener("click", hawkShot);


window.onload = function hawkSoundOnOpen() {


hawkSFX.play();
}

