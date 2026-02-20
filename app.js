const advices = [
"Ты не обязан нравиться всем.",
"Отдых — это необходимость, а не слабость.",
"Иногда лучший шаг — остановиться.",
"Мысли — не факты.",
"Ты уже справлялся раньше.",
"Не сравнивай свою жизнь с чужой.",
"Маленький прогресс — тоже прогресс.",
"Разреши себе ошибаться.",
"Тревога — это сигнал, а не враг.",
"Сегодня достаточно сделать немного."
];

let currentAdvice = "";

function randomAdvice() {
    currentAdvice =
    advices[Math.floor(Math.random() * advices.length)];

    document.getElementById("advice").innerText =
    currentAdvice;
}

function saveAdvice() {

    if (!currentAdvice) return;

    let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.push(currentAdvice);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    showFavorites();
}

function showFavorites() {

    let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

    let list =
    document.getElementById("favorites");

    list.innerHTML = "";

    favorites.forEach(advice => {
        let li = document.createElement("li");
        li.innerText = advice;
        list.appendChild(li);
    });
}

showFavorites();