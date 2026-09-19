let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function () {

    if(started == false ) {
console.log("game is started");
started = true;
levelUp();
    }
});


    function gameflash (btn) {
btn.classList.add("flash");
setTimeout(function () {
    btn.classList.remove("flash");
} , 1000);
}

function userflash (btn) {
btn.classList.add("userflash");
setTimeout(function () {
    btn.classList.remove("userflash");
} , 1000);
}

function levelUp () {
    userSeq = [];
    level++;
    h2.innerText = `level ${level} `;
    
    let randidx = Math.floor(Math.random() * 4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    
    gameSeq.push(randcolor);
    console.log(gameSeq);
    
    gameflash (randbtn);
}

function checkAns(idx) {
    
if(userSeq[idx] === gameSeq[idx]) {
    
    if (userSeq.length == gameSeq.length) {
        
        setTimeout(levelUp, 1000);
    }
} else {
    h2.innerHTML = `Game Over! Your score was <b> ${level} </b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
}

}

function btnPress() {
    console.log(this);
let btn = this;
userflash(btn);

usercolor = btn.getAttribute("id");
userSeq.push(usercolor);

checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns ) {
    btn.addEventListener("click" , btnPress);
}




function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

