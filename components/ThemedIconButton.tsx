import { useThemeColor } from "@/hooks/useThemeColor";
import { IconButton, IconButtonProps } from "react-native-paper";

export type ThemedIconButtonProps = IconButtonProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedIconButton({ style, lightColor, darkColor, ...props }: ThemedIconButtonProps) {
    const selectedIconColor = useThemeColor({ light: lightColor, dark: darkColor }, 'selectedIconColor');
    const selectedBackgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'selectedBackgroundColor');
    const unselectedIconColor = useThemeColor({ light: lightColor, dark: darkColor }, 'unselectedIconColor');
    const unselectedBackgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'unselectedBackgroundColor');

    const customTheme = {
        colors: {
            onPrimary: selectedIconColor,
            primary: selectedBackgroundColor,
            surfaceVariant: unselectedBackgroundColor, //Serve para background quando selected, e icon quando not selected
        }
    };

    return (
        <IconButton
            animated={true}
            theme={customTheme}
            {...props}
        />
    );
}