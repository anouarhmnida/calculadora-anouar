import { useRef, useState } from "react";

export enum Operadores {
    sumar = "+",
    restar = "-",
    multiplicar = "*",
    dividir = "/",
}

export const useCalculadora = () => {
    const [formula, setFormula] = useState("0");
    const [numero, setNumero] = useState("0");
    const [numeroAnterior, setNumeroAnterior] = useState("0");

    const UltimaOperacion = useRef<Operadores | undefined>();

    const clean = () => {
        setFormula("0");
        setNumero("0");
        setNumeroAnterior("0");
        UltimaOperacion.current = undefined;
    };

    const cambiarSigno = () => {
        setNumero((prev) => (prev.includes("-") ? prev.replace("-", "") : `-${prev}`));
    };

    const borrarDigito = () => {
        setNumero((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    };

    const establecerUltimoNumero = () => {
        setNumeroAnterior(numero);
        setNumero("0");
    };

    const realizarOperacion = (operador: Operadores) => {
        if (UltimaOperacion.current) {
            const resultadoPrevio = calcularResultado();
            setFormula(`${resultadoPrevio} ${operador}`);
            setNumeroAnterior(resultadoPrevio.toString());
        } else {
            setFormula(`${numero} ${operador}`);
            establecerUltimoNumero();
        }
        UltimaOperacion.current = operador;
    };

    const calcularResultado = () => {
        const num1 = parseFloat(numeroAnterior);
        const num2 = parseFloat(numero);

        if (isNaN(num1) || isNaN(num2)) return "0";

        switch (UltimaOperacion.current) {
            case Operadores.sumar:
                return num1 + num2;
            case Operadores.restar:
                return num1 - num2;
            case Operadores.multiplicar:
                return num1 * num2;
            case Operadores.dividir:
                return num2 === 0 ? "ERROR" : num1 / num2;
            default:
                return num2;
        }
    };

    const resultado = () => {
        const resultadoFinal = calcularResultado();
        if (resultadoFinal === "ERROR") {
            clean();
            setFormula("ERROR");
        } else {
            setFormula(`${resultadoFinal}`);
            setNumero(resultadoFinal.toString());
            setNumeroAnterior("0");
        }
        UltimaOperacion.current = undefined;
    };

    const construirNumero = (teclaNumero: string) => {
        if (numero.includes(".") && teclaNumero === ".") return;
        setNumero((prev) =>
            prev === "0" && teclaNumero !== "." ? teclaNumero : prev + teclaNumero
        );
    };

    return {
        formula,
        numero,
        construirNumero,
        clean,
        cambiarSigno,
        borrarDigito,
        resultado,
        realizarOperacion,
    };
};
