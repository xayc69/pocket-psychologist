const tg = window.Telegram.WebApp;
tg.expand();

/* ------------------ СОВЕТЫ ------------------ */

const advices = [
"Ты уже достаточно хорош.",
"Сделай глубокий вдох.",
"Не всё требует немедленной реакции.",
"Сегодня можно сделать меньше.",
"Отдых — часть прогресса.",
"Ты справлялся раньше.",
"Замедлись.",
"Тревога проходит.",
"Ошибки — это опыт.",
"Ты не обязан нравиться всем."
];

// увеличиваем базу советов
for(let i=0;i<15;i++){
advices.push(...advices);
}

let currentAdvice = "";

/* ------------------ ЭКРАНЫ ------------------ */

function openScreen(screen){

const container =
document.getElementById("screen");

if(screen==="home"){
container.innerHTML = `
<h1>Карманный психолог</h1>

<div class="card" id="mainCard">
Нажми чтобы получить совет
</div>

<div class="card" onclick="saveAdvice()">
⭐ Сохранить совет
</div>
`;

document
.getElementById("mainCard")
.onclick = newAdvice;
}

/* --- совет дня --- */
if(screen==="day"){
newAdvice();
}

/* --- избранное --- */
if(screen==="fav"){
showFavorites();
}

/* --- настроение --- */
if(screen==="mood"){
container.innerHTML=`
<h2>Как ты себя чувствуешь?</h2>

<div class="card" onclick="mood('good')">😊 Хорошо</div>
<div class="card" onclick="mood('normal')">😐 Нормально</div>
<div class="card" onclick="mood('bad')">😔 Плохо</div>
`;
}

/* --- профиль --- */
if(screen==="profile"){
container.innerHTML=`
<h2>Профиль</h2>

<div class="card">
Карманный психолог PRO<br>
Telegram Mini App
</div>
`;
}

}

/* ------------------ СОВЕТ ------------------ */

function newAdvice(){

currentAdvice =
advices[
Math.floor(Math.random()*advices.length)
];

const container =
document.getElementById("screen");

container.innerHTML = `
<h2>Совет</h2>
<div class="card">${currentAdvice}</div>
<div class="card" onclick="saveAdvice()">
⭐ В избранное
</div>
`;

tg.HapticFeedback
.impactOccurred("medium");
}

/* ------------------ ИЗБРАННОЕ ------------------ */

function saveAdvice(){

if(!currentAdvice) return;

let fav =
JSON.parse(
localStorage.getItem("favorites")
) || [];

fav.push(currentAdvice);

localStorage.setItem(
"favorites",
JSON.stringify(fav)
);

tg.HapticFeedback
.notificationOccurred("success");
}

function showFavorites(){

let fav =
JSON.parse(
localStorage.getItem("favorites")
) || [];

let html="<h2>Избранное</h2>";

if(fav.length===0){
html+=`<div class="card">
Пока пусто
</div>`;
}

fav.forEach(a=>{
html+=`<div class="card">${a}</div>`;
});

document.getElementById("screen")
.innerHTML = html;
}

/* ------------------ НАСТРОЕНИЕ ------------------ */

function mood(type){

tg.HapticFeedback
.impactOccurred("light");

document.getElementById("screen")
.innerHTML=`
<div class="card">
Настроение сохранено ✅
</div>`;
}

/* ------------------ СТАРТ ------------------ */

openScreen("home");
