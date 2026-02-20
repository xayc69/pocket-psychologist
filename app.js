const advices=[
"Ты уже достаточно хорош.",
"Замедлись. Мир подождёт.",
"Сегодня можно меньше.",
"Твоё спокойствие важнее.",
"Не всё требует реакции.",
"Сделай вдох.",
"Ты справляешься.",
"Позволь себе отдых."
];

const tg=window.Telegram.WebApp;
tg.expand();

let current="";

function newAdvice(){

current=
advices[Math.floor(Math.random()*advices.length)];

const card=document.getElementById("card");

card.classList.remove("show");

setTimeout(()=>{
card.innerText=current;
card.classList.add("show");
tg.HapticFeedback.impactOccurred("medium");
},100);
}

function saveAdvice(){

let fav=
JSON.parse(localStorage.getItem("fav"))||[];

fav.push(current);

localStorage.setItem("fav",
JSON.stringify(fav));

tg.HapticFeedback.notificationOccurred("success");
}

function shareAdvice(){
tg.showAlert(current);
}
