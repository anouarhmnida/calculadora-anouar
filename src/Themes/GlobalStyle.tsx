import Colors from "./Colors";
import { StyleSheet } from "react-native";

const GlobalStyle = StyleSheet.create({
    boton: {
        textAlign: 'center',
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto:{
        fontSize: 30,
        fontWeight: '300',
    },
    pantallaPrincipal: {
        fontSize: 70,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
    },
    pantallaSecundaria:{
      fontSize: 40,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.fondo,
        alignItems:  'center',
        justifyContent: 'flex-end',
        paddingBottom:20,
      },
      fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:16,
        paddingHorizontal:10,
        width: '100%',
      }
  });

  export default GlobalStyle;