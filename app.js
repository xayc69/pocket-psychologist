const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const advice = {

stress:[
"Сделай 5 глубоких вдохов",
"Переключи внимание на тело",
"Выйди на прогулку"
],

motivation:[
"Начни с маленького шага",
"Действие рождает мотивацию",
"Ты уже начал — продолжай"
],

confidence:[
"Ты справлялся раньше",
"Говори медленнее",
"Спина ровно — уверенность растёт"
],

sleep:[
"Убери телефон за час до сна",
"Темнота улучшает сон",
"Ложись в одно время"
]

};

function showAdvice(category){

const list = advice[category];

const random =
list[Math.floor(Math.random()*list.length)];

document.getElementById("content").innerHTML =
<h2>Совет</h2><p>${random}</p>;
}


/* ✅ ВАЖНО — обработчики после загрузки */

document.addEventListener("DOMContentLoaded", ()=>{

document.querySelectorAll("button")
.forEach(btn=>{

btn.addEventListener("click", ()=>{

const cat = btn.dataset.cat;
showAdvice(cat);

});

});

});
