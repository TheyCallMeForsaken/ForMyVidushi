// Automatically set name
const input = "Vidushi";

var questionMain = null;
var gifMain = null;
var yesButton = null;
var noButton = null;
var count = 0;

// Immediately load the main content
document.head.innerHTML = "<meta charset='UTF-8'>"+
"<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
"<title>You still mad at me?</title>"+
"<link rel='stylesheet' href='styleMain.css'/>";

document.body.innerHTML = "<div class='wrapper'><h2 class='question'>You still mad at me, "+input+ "?</h2>"+
"<img class='gif' alt='gif' src='https://media.giphy.com/media/0kDdAFAELmvvFNUKim/giphy.gif'/>"+
"<div class='btn-group'><button class='yes-btn'>Yes</button>"+
"<button class='no-btn'>No</button></div></div>"

questionMain = document.querySelector(".question");
gifMain = document.querySelector(".gif");
yesButton = document.querySelector(".yes-btn");
noButton = document.querySelector(".no-btn");

// Swapped functions: Yes moves, No ends happily
yesButton.addEventListener("mouseover", yesButtonMove); // Yes button moves on hover
noButton.addEventListener("click", noButtonListener);   // No button ends happily

function yesButtonMove(){ // old No behavior -> moves around
    if (count < 5) {
        gifMain.src ="https://media.giphy.com/media/hbOgjMOUfLdWV2Ty1j/giphy.gif";
        questionMain.innerHTML = "You're still mad?";
    }
    else if (count >= 5 && count < 10){
        gifMain.src ="https://media.giphy.com/media/QuCslOrnS649PSCnn7/giphy.gif";
        questionMain.innerHTML = "Stop ignoring me! Are you mad or not?!";
    }
    else{
        gifMain.src ="https://media.giphy.com/media/8OPf6xrtXi3QEcu5h9/giphy.gif";
        questionMain.innerHTML = "TELL ME! ARE YOU MAD OR NOT?!";
    }

    const yesButtonRect = yesButton.getBoundingClientRect();
    const maxX = window.innerWidth - yesButtonRect.width;
    const maxY = window.innerHeight - yesButtonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    yesButton.style.position = "absolute";
    yesButton.style.left = randomX + "px";
    yesButton.style.top = randomY + "px";
    count = count + 1;
}

function noButtonListener(){ // old Yes behavior -> final loving response
    document.body.innerHTML = "<div class='wrapper'><h2 class='question'>OKAYYY LESGOOOOO YAYY, "+input+ "!</h2>"+
    "<img class='gif' alt='gif' src='https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif'/></div><script src='scriptMain.js'></script>"
    gifMain.src = "https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif";
}
 // - KAMISLEXIC WAS HERE. 
