import { useThemeColor } from "@/hooks/useThemeColor";
import { DefaultTheme, TextInput, TextInputProps } from "react-native-paper";

export type ThemedTextInputProps = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedTextInput({ style, lightColor, darkColor, ...props }: ThemedTextInputProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'TextInputBackground');
    const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'TextInputTextColor');
    const activeOutlineColor = useThemeColor({ light: lightColor, dark: darkColor }, 'TextInputActiveOutlineColor');
    const outlineColor = useThemeColor({ light: lightColor, dark: darkColor }, 'TextInputOutlineColor');

    const customTheme = {
        colors: {
            onSurfaceVariant: outlineColor
        }
    };

    return (
        <TextInput
            mode="outlined"
            textColor={textColor}
            activeOutlineColor={activeOutlineColor}
            outlineColor={outlineColor}
            style={[{ backgroundColor: backgroundColor }, style]}
            theme={customTheme}
            //outlineStyle={{ borderColor: outlineColor }}
            {...props}
        />
    );
}