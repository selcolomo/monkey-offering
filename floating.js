const button = document.querySelector(".floating-button-div");

function moveButton() {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

setInterval(moveButton, 700);