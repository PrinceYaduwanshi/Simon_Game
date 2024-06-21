let gameseq=[];
let userseq=[];

let btns=["red" , "yellow" , "green" , "purple"];

let started=false;
let level=0;

let lvldisplay=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started=true;
    }
    levelup();
})

function levelup(){
    level++;
    userseq=[];
    lvldisplay.innerText=`Level ${level}`;
    

    // generating random button
    let randidx=Math.floor(Math.random() * 3);
    let randcolor=btns[randidx];
    let randBtn=document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);
    console.log(gameseq);

    btnflash(randBtn);
}

// flashing the button and then giving back its color
function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function (){
        btn.classList.remove("flash")
    },250);
}

function btnpress(){
    let btn=this;
    btnflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);

    seqcheck(userseq.length-1)
}
// user button press
// function userbtnflash(btn){
//     btn.classList.add("userflash")
//     setTimeout(function (){
//         btn.classList.remove("userflash")
//     },250);
// }

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnpress);
}

function seqcheck(idx){

    if(userseq[idx] === gameseq[idx]){
        // last value pr user hai means that user gameseq ki last value pr h...agr beechme khi pr h toh uske liye same tareeka se check krna h
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000)
        }
    }else{
        lvldisplay.innerHTML=`Game Over!!Your Score was <b>${level}<b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}