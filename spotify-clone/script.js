// let head = document.querySelector("strong");
// head.innerText="from apna college";

// let btn = document.createElement("button");
// btn.innerText = "Toggle mode";
// btn.style.backgroundColor = "black";
// btn.style.color = "white";
// boody.prepend(btn);

// boody.style.backgroundImage = "";
// boody.style.backgroundColor = "black";
// let a=0;
// btn.addEventListener("click", () => {
//     if (a%2===0){
//         boody.style.backgroundColor = "white";
//         btn.style.backgroundColor = "white";
//         btn.style.color = "black";
//         a++;
//     }
//     else{
//         boody.style.backgroundColor = "black";
//         btn.style.backgroundColor = "black";
//         btn.style.color = "white";
//         a++;
//     }
// })

let body = document.querySelector("body");
cell = document.querySelectorAll("td");
let turn = 0;
let win=false;
const logInput = ()=>{
    cell[i].innerText=`${turn}`;
    cell[i].style.backgroundColor = "white";
}
for(let i=0;i<9;i++){
    cell[i].onclick = ()=> {
        cell[i].style.backgroundColor = "pink";
    }
}