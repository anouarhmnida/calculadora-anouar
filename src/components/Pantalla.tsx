import { Text, type TextProps, StyleSheet } from 'react-native';
import GlobalStyle from "../Themes/GlobalStyle";
interface Props extends TextProps {
  size?: 'large' | 'small';
  color?: string;
};

export const Pantalla = ({children, size = 'large', color = '#393338', ...rest}:Props) => {
  return (
    <Text
    style = {[
      GlobalStyle.pantallaPrincipal,
      size === 'small' && GlobalStyle.pantallaSecundaria,
      {color:color},
    ]}{...rest}>
    {children}
    </Text>
  )
}
