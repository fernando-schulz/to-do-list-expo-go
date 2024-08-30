/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Button } from "react-native-paper";

const primaryDark = '#121212'; //cinza escuro
const secondaryDark = '#1C1C1C'; //cinza menos escuro
const primaryDetailsDark = '#BB86FC'; //roxo suave
const secondaryDetailsDark = '#CF6679'; // tom rosa/vermelho
const backgroundSecondaryDark = '#03DAC6'; // ciano/verde-água

const primaryLight = '#fff'; //branco
const secondaryLight = '#F5F5F5'; //cinza bem claro
const primaryDetailsLight = '#00796B'; //verde escuro puxando para azul
const secondaryDetailsLight = '#212121'; // cinza escuro
const backgroundSecondaryLight = '#009688'; // verde-água




const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
//const tintColorDark = '#4e4d4a'
const secondaryColorLight = '#11181C';
const secondaryColorDark = '#ECEDEE';

export const Colors = {
  light: {
    title: primaryDetailsLight,
    subtitle: backgroundSecondaryLight,
    text: secondaryDetailsLight,
    background: primaryLight,
    secondaryBackground: secondaryLight,

    tint: primaryDetailsLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,

    fabBackground: backgroundSecondaryLight,
    fabIconColor: secondaryDetailsLight,

    //TextInput
    TextInputBackground: primaryLight,
    TextInputTextColor: secondaryDetailsLight,
    TextInputActiveOutlineColor: primaryDetailsLight,
    TextInputOutlineColor: secondaryDetailsLight,

    //Button
    ButtonBackground: primaryDetailsLight,
    ButtonTextColor: secondaryDetailsLight,
  },
  dark: {
    title: primaryDetailsDark,
    subtitle: secondaryDetailsDark,
    text: '#fff',
    background: primaryDark,
    secondaryBackground: secondaryDark,

    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,

    fabBackground: backgroundSecondaryDark,
    fabIconColor: secondaryDetailsDark,

    //TextInput
    TextInputBackground: primaryDark,
    TextInputTextColor: primaryDetailsDark,
    TextInputActiveOutlineColor: primaryDetailsDark,
    TextInputOutlineColor: secondaryDetailsDark,

    //Button
    ButtonBackground: backgroundSecondaryDark,
    ButtonTextColor: primaryDetailsDark,
  },
};
