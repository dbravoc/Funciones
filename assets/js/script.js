function pintar(ele) {
    ele.style.backgroundColor = 'yellow';
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele));

function pintar(ele, color = 'green') {
    ele.style.backgroundColor = color;
}
