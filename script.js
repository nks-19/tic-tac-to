let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetbtn");
let newGameBtn=document.querySelector("#newgame-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;
let turnO=true;//playerX, playerO

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
       
        if(turnO)
        {
           box.innerText="O";
           count++;
           turnO=false; 
        }
        else
        {
            box.innerText="X";
            count++;
            turnO=true;
        }
       
       
        if(count === 8){
             draw();
             
        }
        else{
            checkWinner();
        }
        box.disabled=true;
    });
});
const draw=()=>{
    msg.innerText=`It was a Draw!!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkWinner=() => {
    for (let pattern of winPatterns)
    {
          let pos1Val=boxes[pattern[0]].innerText;
          let pos2Val=boxes[pattern[1]].innerText;
          let pos3Val=boxes[pattern[2]].innerText;

          if(pos1Val !="" && pos2Val !="" && pos3Val!="")
          {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                 showWinner(pos1Val);
            }
          }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);