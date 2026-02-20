const tg = window.Telegram.WebApp;

tg.expand();

const advice = {

stress: [
"Сделай 5 глубоких вдохов",
"Переключи внимание на тело",
"Выйди на короткую прогулку"
],

motivation: [
"Начни с самого маленького шага",
"Не жди вдохновения — действуй",
"Дисциплина сильнее настроения"
],

confidence: [
"Ты уже справлялся раньше",
"Ошибки — это опыт",
"Говори медленнее и увереннее"
],

sleep: [
"Не используй телефон перед сном",
"Проветри комнату",
"Ложись в одно время"
]

};

function openCategory(category){

const list = advice[category];

const random =
list[Math.floor(Math.random()*list.length)];

document.getElementById("content").innerHTML =
<h2>Совет</h2><p>${random}</p>;

}
