function calcularResultado(cantidad, categoria) {
    let precio = 200;
    let resultado;

    switch (categoria) {
        case "estudiante":
            resultado = precio * cantidad * 0.2;
            break
        case "trainee":
            resultado = precio * cantidad * 0.5;
            break
        case "junior":
            resultado = precio * cantidad * 0.85;
            break        
    }

    return resultado;
}

let formulario = document.getElementById("form_tickets");

let cantidad = document.getElementById("cantidad");

let categoria = document.getElementById("categoria");

let pResultado = document.getElementById("resultado");

formulario.addEventListener("reset", () => {
    pResultado.textContent = "Total a Pagar: $";
})

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); //para evitar que se refresque la página
    pResultado.textContent = "Total a Pagar: $" + calcularResultado(cantidad.value, categoria.value);
});