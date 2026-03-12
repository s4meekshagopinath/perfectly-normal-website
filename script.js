const startBtn = document.getElementById("start");
const story = document.getElementById("story");
const mouse = document.getElementById("mouse");
const stayBtn = document.getElementById("stayBtn");

let startTime = Date.now();
let mouseCooldown = false;
let chaosMode = false;


/* mouse commentary */

document.addEventListener("mousemove", () => {

if(mouseCooldown) return;

mouseCooldown = true;

const lines = [

"I saw that mouse movement.",

"Stop moving your mouse like that.",

"Interesting cursor behavior.",

"You seem restless.",

"You're definitely procrastinating."

];

mouse.innerText = lines[Math.floor(Math.random()*lines.length)];

setTimeout(()=>{

mouseCooldown=false;

},3000);

});


/* story progression */

startBtn.onclick = () => {

startTime = Date.now();

const lines = [

"Okay. Enjoy the website.",

"Loading meaningful content...",

"[████░░░░░░░░░░] 23%",

"Still loading...",

"[████████░░░░░░] 52%",

"Error: meaningful content not found.",

"Analyzing user behavior...",

"Result: suspicious.",

"There is literally nothing on this page.",

"And yet you are still here.",

"Fine. Try pressing Stay."

];

let i = 0;

const timer = setInterval(()=>{

story.innerText = lines[i];

i++;

if(i === lines.length){

clearInterval(timer);

chaosMode = true;

}

},3000);

};


/* runaway button */

stayBtn.addEventListener("mouseover", () => {

if(!chaosMode) return;

stayBtn.style.position = "absolute";

stayBtn.style.left = Math.random()*600 + "px";

stayBtn.style.top = Math.random()*400 + "px";

});


/* leave */

function leave(){

story.innerText = "Good decision. Goodbye.";

}


/* stay */

function stay(){

const seconds = Math.floor((Date.now()-startTime)/1000);

story.innerText = "I knew it. You're one of those people.";

setTimeout(()=>{

story.innerText = "Revealing secret feature...";

},3000);

setTimeout(()=>{

story.innerText =
"There is no feature.\n\n"+
"This website exists only to waste your time.\n\n"+
"Time wasted: "+seconds+" seconds.\n\n"+
"System Report:\n"+
"User Status: Procrastinating\n"+
"Productivity: Critically Low";

},6000);

}