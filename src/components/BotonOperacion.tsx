import { Pressable, Text, StyleSheet } from "react-native";
import GlobalStyle from "../Themes/GlobalStyle";

interface Props {
    label: string,
    width?: number,
    onPress?: () => void;
    backgroundColor?: string;
    textoColor?: string;
}

export const BotonOperacion = ({ label, width = 80, onPress, backgroundColor = "#f0f0f0", textoColor = "#000" }: Props) => {
    return (
        <Pressable
            style={[GlobalStyle.boton, { width, backgroundColor }]}
            onPress={onPress}
        >
            <Text style={[GlobalStyle.texto, { color: textoColor }]}>{label}</Text> {}
        </Pressable>
    );
};

