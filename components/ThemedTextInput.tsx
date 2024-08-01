import { useThemeColor } from "@/hooks/useThemeColor";
import { DefaultTheme, TextInput, TextInputProps } from "react-native-paper";

export type ThemedTextInputProps = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedTextInput({ style, lightColor, darkColor, ...props }: ThemedTextInputProps) {
    //style
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'TextInputBackground');
    const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'TextInputTextColor');
    const activeUnderlineColor = useThemeColor({ light: lightColor, dark: darkColor }, 'TextInputActiveUnderlineColor');
    const placeholderTextColor = useThemeColor({ light: lightColor, dark: darkColor }, 'TextInputPlaceholderTextColor');
    //const underlineColor = useThemeColor({ light: lightColor, dark: darkColor }, 'TextInputUnderlineColor');

    const customTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            onSurfaceVariant: 'red',
        },
    };

    return (
        <TextInput
            textColor={textColor}
            activeUnderlineColor={activeUnderlineColor}
            placeholderTextColor={placeholderTextColor}
            theme={customTheme}
            style={[{ backgroundColor: backgroundColor }, style]}
            {...props}
        />
    );
}