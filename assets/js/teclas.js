const keyDiv = document.getElementById("key");

        const colors = {
            a: 'pink',
            s: 'orange',
            d: 'lightblue',
            q: 'purple',
            w: 'gray',
            e: 'brown'
        };

        function crearDiv(color) {
            const nuevoDiv = document.createElement("div");
            nuevoDiv.style.width = "200px";
            nuevoDiv.style.height = "200px";
            nuevoDiv.style.backgroundColor = color;
            document.body.appendChild(nuevoDiv);
        }

        document.addEventListener('keydown', function (event) {
            const color = colors[event.key];
            if (color) {
                keyDiv.style.backgroundColor = color;
            } else if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
                crearDiv(colors[event.key]);
            }
        });
