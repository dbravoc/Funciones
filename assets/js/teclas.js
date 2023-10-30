const colors = {
    a: 'pink',
    s: 'orange',
    d: 'lightblue',
    q: 'purple',
    w: 'gray',
    e: 'brown'
};

let container = document.getElementById("container");

if (!container) {
    container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 's' || event.key === 'd') {
        llenarUltimoDiv(colors[event.key]);
    } else if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
        crearDiv(colors[event.key]);
    }
});

function llenarUltimoDiv(color) {
    const divs = container.querySelectorAll('div');
    if (divs.length > 0) {
        const ultimoDiv = divs[divs.length - 1];
        ultimoDiv.style.backgroundColor = color;
    }
}

function crearDiv(color) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = color;
    container.appendChild(nuevoDiv);
}
