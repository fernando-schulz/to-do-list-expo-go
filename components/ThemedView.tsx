import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  secondaryView?: boolean;
};

export function ThemedView({ style, lightColor, darkColor, secondaryView, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const backgroundSecondaryColor = useThemeColor({ light: lightColor, dark: darkColor }, 'secondaryBackground');

  const appliedBackgroundColor = secondaryView ? backgroundSecondaryColor : backgroundColor;

  return <View style={[{ backgroundColor: appliedBackgroundColor }, style]} {...otherProps} />;
}
