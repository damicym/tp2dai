import { PI, sumar, restar, multiplicar, dividir } from "./src/modules/matematica.js"

console.log(
    multiplicar(
        dividir(
            sumar(PI, 3) + restar(5, 20), 2
        ),
        5
    )
)