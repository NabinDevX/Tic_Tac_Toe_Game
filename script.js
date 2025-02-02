let boxes=document.querySelectorAll(".box");
let reset=document.getElementById("reset");
let welcome=document.getElementById("welcome");
let win=document.querySelector(".new");
alert("First turn will be O's");
let newWelcome=welcome.innerText;
let chance="O";
const winElements=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
const resetBtn = () =>{
    chance="O";
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    welcome.innerText=newWelcome;
    win.classList.add("hide");
    alert("First turn will be O's");
}
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(chance==="O"){
            box.innerText=chance;
            box.style.color="blue";
            chance="X";

        }
        else{
            box.innerText=chance;
            box.style.color="red";
            chance="O";
        }
        box.disabled=true;
        checkWinner();
    })
})
const checkWinner = () =>{
    for(let element of winElements){
        let pos1=boxes[element[0]].innerText;
        let pos2=boxes[element[1]].innerText;
        let pos3=boxes[element[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner is",pos1);
                showWinner(pos1);
            }
        }
    }
}
const showWinner = (winner) =>{
    welcome.innerText = `Congratulations, the winner is ${winner}`;
    for(let box of boxes){
        box.disabled=true;
    }
    win.classList.remove("hide");
}
win.addEventListener("click",resetBtn);
reset.addEventListener("click",resetBtn);