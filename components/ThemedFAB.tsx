import { useThemeColor } from "@/hooks/useThemeColor";
import { FAB, FABProps } from "react-native-paper";

export type ThemedFABProps = FABProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedFAB({ style, lightColor, darkColor, ...props }: ThemedFABProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'fabBackground');
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'fabIconColor');

    return (
        <FAB
            color={color}
            style={[{ backgroundColor: backgroundColor }, style]}
            {...props}
        />
    );
}