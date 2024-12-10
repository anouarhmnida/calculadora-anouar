import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Pantalla } from "./src/components/Pantalla";
import { BotonOperacion } from "./src/components/BotonOperacion";
import { useCalculadora } from "./src/hooks/useCalculadora";
import GlobalStyle from "./src/Themes/GlobalStyle";
import Colors from "./src/Themes/Colors";
import { Operadores } from "./src/hooks/useCalculadora";

export default function App() {
    const {
        formula,
        numero,
        construirNumero,
        clean,
        cambiarSigno,
        borrarDigito,
        realizarOperacion,
        resultado,
    } = useCalculadora();

    return (
        <View style={GlobalStyle.container}>
            {/* Pantallas para mostrar la fórmula y el número actual */}
            <Pantalla
                numberOfLines={1}
                adjustsFontSizeToFit
                style={GlobalStyle.pantallaPrincipal}
            >
                {formula}
            </Pantalla>
            <Pantalla
                numberOfLines={1}
                adjustsFontSizeToFit
                style={GlobalStyle.pantallaSecundaria}
            >
                {numero}
            </Pantalla>

            <StatusBar style="auto" />

            {/* Primera fila */}
            <View style={GlobalStyle.fila}>
                <BotonOperacion label="C" onPress={clean} backgroundColor={Colors.borrar} textoColor={Colors.texto} />
                <BotonOperacion label="+/-" onPress={cambiarSigno} backgroundColor={Colors.c} textoColor={Colors.texto} />
                <BotonOperacion label="del" onPress={borrarDigito} backgroundColor={Colors.numeros} textoColor={Colors.texto} />
                <BotonOperacion label="/" onPress={() => realizarOperacion(Operadores.dividir)} backgroundColor={Colors.operandos} textoColor={Colors.texto} />
            </View>

            {/* Segunda fila */}
            <View style={GlobalStyle.fila}>
                <BotonOperacion label="7" onPress={() => construirNumero("7")} backgroundColor={Colors.numeros} textoColor={Colors.texto} />
                <BotonOperacion label="8" onPress={() => construirNumero("8")} backgroundColor={Colors.numeros} textoColor={Colors.texto} />
                <BotonOperacion label="9" onPress={() => construirNumero("9")} backgroundColor={Colors.numeros} textoColor={Colors.texto} />
                <BotonOperacion label="x" onPress={() => realizarOperacion(Operadores.multiplicar)} backgroundColor={Colors.operandos} textoColor={Colors.texto} />
            </View>

            {/* Tercera fila */}
            <View style={GlobalStyle.fila}>
                <BotonOperacion label="4" onPress={() => construirNumero("4")} backgroundColor={Colors.numeros} textoColor={Colors.texto} />
                <BotonOperacion label="5" onPress={() => construirNumero("5")} backgroundColor={Colors.numeros} textoColor={Colors.texto} />
                <BotonOperacion label="6" onPress={() => construirNumero("6")} backgroundColor={Colors.numeros} textoColor={Colors.texto} />
                <BotonOperacion label="-" onPress={() => realizarOperacion(Operadores.restar)} backgroundColor={Colors.operandos} textoColor={Colors.texto} />
            </View>

            {/* Cuarta fila */}
            <View style={GlobalStyle.fila}>
                <BotonOperacion label="1" onPress={() => construirNumero("1")} backgroundColor={Colors.numeros} textoColor={Colors.texto} />
                <BotonOperacion label="2" onPress={() => construirNumero("2")} backgroundColor={Colors.numeros} textoColor={Colors.texto} />
                <BotonOperacion label="3" onPress={() => construirNumero("3")} backgroundColor={Colors.numeros} textoColor={Colors.texto} />
                <BotonOperacion label="+" onPress={() => realizarOperacion(Operadores.sumar)} backgroundColor={Colors.operandos} textoColor={Colors.texto} />
            </View>

            {/* Quinta fila */}
            <View style={GlobalStyle.fila}>
                <BotonOperacion label="0" width={180} onPress={() => construirNumero("0")} backgroundColor={Colors.numeros} textoColor={Colors.texto} />
                <BotonOperacion label="." onPress={() => construirNumero(".")} backgroundColor={Colors.numeros} textoColor={Colors.texto} />
                <BotonOperacion label="=" onPress={resultado} backgroundColor={Colors.c} textoColor={Colors.texto} />
            </View>
        </View>
    );
}
