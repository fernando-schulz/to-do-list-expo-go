import { useThemeColor } from "@/hooks/useThemeColor";
import { Button, ButtonProps } from "react-native-paper";

export type ThemedButtonProps = ButtonProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedButton({ style, lightColor, darkColor, ...props }: ThemedButtonProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'ButtonBackground');
    const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'ButtonTextColor');

    return (
        <Button
            mode="elevated"
            textColor={textColor}
            style={[{ backgroundColor: backgroundColor }, style]}
            {...props}
        />
    );
}