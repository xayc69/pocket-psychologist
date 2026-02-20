const data = {
stress:[
"Сделай глубокий вдох.",
"Ты переживал и хуже.",
"Остановись на минуту."
],
motivation:[
"Начни с малого.",
"Сегодня лучший день начать.",
"Ты ближе чем думаешь."
],
calm:[
"Замедлись.",
"Тишина лечит.",
"Позволь себе отдых."
]
};

let category="all";
let current="";

function setCategory(cat){
category=cat;
newAdvice();
}

function newAdvice(){

let list=[];

if(category==="all"){
list=[
...data.stress,
...data.motivation,
...data.calm
];
}else{
list=data[category];
}

current=list[Math.floor(Math.random()*list.length)];

const card=document.getElementById("card");

card.classList.remove("animate");

setTimeout(()=>{
card.innerText=current;
card.classList.add("animate");
},100);
}

function saveAdvice(){

if(!current) return;

let fav=
JSON.parse(localStorage.getItem("fav"))||[];

fav.push(current);

localStorage.setItem("fav",
JSON.stringify(fav));

showFav();
}

function showFav(){

let fav=
JSON.parse(localStorage.getItem("fav"))||[];

let ul=document.getElementById("favorites");

ul.innerHTML="";

fav.forEach(t=>{
let li=document.createElement("li");
li.innerText=t;
ul.appendChild(li);
});
}

function shareAdvice(){

if(!current) return;

Telegram.WebApp.sendData(current);
alert("Совет можно отправить!");
}

showFav();
