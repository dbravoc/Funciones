const divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.addEventListener("click", () => {
        div.style.backgroundColor = "black";
    });
});