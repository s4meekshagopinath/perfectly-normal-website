const startBtn = document.getElementById("start");
const story = document.getElementById("story");
const mouse = document.getElementById("mouse");
const stayBtn = document.getElementById("stayBtn");

let startTime = Date.now();
let mouseCooldown = false;
let chaosMode = false;

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
"Fine. Try pressing the secret feature button."
];

startBtn.onclick = () => {

startTime = Date.now();

let i = 0;

story.innerText = lines[i];
i++;

const interval = setInterval(() => {

if(i < lines.length){

story.innerText = lines[i];
i++;

}else{

clearInterval(interval);
chaosMode = true;

}

},2000);

};

document.addEventListener("mousemove", () => {

if(mouseCooldown) return;

mouseCooldown = true;

const mouseLines = [
"I saw that mouse movement.",
"Stop moving your mouse like that.",
"Interesting cursor behavior.",
"You seem restless.",
"You're definitely procrastinating."
];

mouse.innerText = mouseLines[Math.floor(Math.random()*mouseLines.length)];

setTimeout(()=>{
mouseCooldown=false;
},2000);

});

stayBtn.addEventListener("mouseover", () => {

if(!chaosMode) return;

stayBtn.style.position = "absolute";
stayBtn.style.left = Math.random()*600 + "px";
stayBtn.style.top = Math.random()*400 + "px";

});

function leave(){

story.innerText = "Good decision. Goodbye.";

}

function stay(){

const seconds = Math.floor((Date.now()-startTime)/1000);

story.innerText = "Revealing secret feature...";

setTimeout(()=>{

story.innerText =
"There is no feature.\n\n"+
"This website exists only to waste your time.\n\n"+
"Time wasted: "+seconds+" seconds.\n\n"+
"System Report:\n"+
"User Status: Procrastinating\n"+
"Productivity: Critically Low";

},1200);

}