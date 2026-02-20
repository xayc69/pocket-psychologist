document.addEventListener("DOMContentLoaded", function() {

    const advice = {
        stress: [
            "Сделай 5 глубоких вдохов",
            "Переключи внимание на тело",
            "Выйди на прогулку"
        ],
        motivation: [
            "Начни с маленького шага",
            "Действие создаёт энергию",
            "Ты уже движешься"
        ],
        confidence: [
            "Ты справлялся раньше",
            "Говори медленно",
            "Дыши спокойно"
        ],
        sleep: [
            "Убери телефон за час до сна",
            "Темная комната улучшает сон",
            "Ложись в одно и то же время"
        ]
    };

    const buttons = document.querySelectorAll("button");
    const content = document.getElementById("content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const cat = button.getAttribute("data-cat");
            const list = advice[cat];
            const random = list[Math.floor(Math.random() * list.length)];
            content.innerHTML = <h2>Совет</h2><p>${random}</p>;
        });
    });

});
