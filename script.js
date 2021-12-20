let mesta = document.getElementsByClassName("mesto");
let vucko = document.getElementsByClassName("vucko");
let poslednje = 0;
let start = document.getElementById("start");
let timeUp = false;
let rez = 0;
let rezultat = document.getElementById("rez");
let trenutno;
function randomMesto(){
    trenutno = Math.floor(Math.random()*mesta.length);
    poslednje = trenutno;
    if(trenutno == poslednje){
        trenutno = Math.floor(Math.random()*mesta.length);
    }
    return poslednje;
}

function popUp(rupa){
    console.log(rupa);
    vucko[rupa].style.visibility="visible";
    vucko[rupa].onclick = () => {tres(vucko[rupa])}
    slide();
}

function startGame(){
    popUp(randomMesto());
    rezultat.innerHTML = "Tresnuo si / Vučića";
    setTimeout(endGame, 10000);
}

function tres(e){
    rez++;
    e.style.visibility = "hidden";
    rezultat.innerHTML = `Tresnuo si ${rez} Vučića`;
    popUp(randomMesto());
    
}

start.addEventListener('click', ()=>{
    startGame();
})

function endGame(){
    alert("Isteklo je vreme!");
    for(let vucic of vucko){
        vucic.style.visibility = "hidden";
    }
    rez = 0;
    trenutno;
}
let poz = 180;
function slide(){
    let i = 1;
    if(poz >= 80){
        poz -= i;
        console.log(poz);
        for(let vucic of vucko){
            vucic.style.top = poz + "px";
        }
    }
    else{
        poz = 180;
    }
   let kraj = setTimeout(slide, 1);
   if(poz === 80){
       clearInterval(kraj);
   }
}




