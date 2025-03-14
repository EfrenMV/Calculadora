document.addEventListener("DOMContentLoaded", function () {
    let pantalla = document.getElementById("num");
    let operacion = ""; // Guarda la operación actual

    const botones = document.querySelectorAll(".boton");

    botones.forEach((boton) => {
        boton.addEventListener("click", function () {
            let texto = this.innerText; //Agarramos el tx

            if (texto === "=") {
                try {
                    // Reemplazar × con * y ÷ con /
                    let expresion = operacion.replace(/×/g, "*").replace(/÷/g, "/");
                   
                    operacion = eval(expresion); // Evaluar operación
                    pantalla.innerText = operacion;
                } catch {
                    pantalla.innerText = "Error";
                    operacion = "";
                }
            } else if (texto === "C") {
                operacion = "";
                pantalla.innerText = "0";
            } else if (texto === "del") {
                operacion = operacion.slice(0, -1);
                pantalla.innerText = operacion || "0";
            } else {
                operacion += texto;
                pantalla.innerText = operacion;
            }
        });
    });
});    