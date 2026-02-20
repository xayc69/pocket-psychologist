const tg=window.Telegram.WebApp;
tg.expand();

const advices=[
"Ты уже достаточно хорош",
"Отдых продуктивен",
"Замедлись",
"Ты не обязан всё контролировать",
"Сегодня можно меньше",
"Ошибки — рост",
"Сделай вдох",
"Ты справляешься"
];

// создаём 120 советов
for(let i=0;i<20;i++){
advices.push(...advices);
}

let current="";

function openScreen(name){

const s=document.getElementById("screen");

if(name==="home"){
s.innerHTML=`
<h1>Карманный психолог</h1>
<div class="card"
onclick="newAdvice()">
Нажми для совета
</div>`;
}

if(name==="day"){
newAdvice();
}

if(name==="fav"){
showFav();
}

if(name==="mood"){
s.innerHTML=`
<h2>Как ты себя чувствуешь?</h2>
<div class="card">😊 Хорошо</div>
<div class="card">😐 Нормально</div>
<div class="card">😔 Плохо</div>`;
}

if(name==="profile"){
s.innerHTML=`
<h2>Профиль</h2>
<div class="card">
Mini App PRO<br>
Версия 2.0
</div>`;
}
}

function newAdvice(){

current=
advices[Math.floor(Math.random()*advices.length)];

document.getElementById("screen")
.innerHTML=
<div class="card">${current}</div>;

tg.HapticFeedback.impactOccurred("medium");
}

function showFav(){

let fav=
JSON.parse(localStorage.getItem("fav"))||[];

let html="<h2>Избранное</h2>";

fav.forEach(f=>{
html+=`<div class="card">${f}</div>`;
});

document.getElementById("screen")
.innerHTML=html;
}

openScreen("home");
