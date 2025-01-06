//DARK THEME
const primaryDark = '#322B54';
const secondaryDark = '#413E60';
const primaryDetailsDark = '#cfab89';
const secondaryDetailsDark = '#bc5446';
const transparencyDark = 'rgba(255, 255, 255, 0.3)'; //preto com transparência
const tintColorDark = '#fff';


//LIGHT THEME
const primaryLight = '#F5F5F5'; //branco
const secondaryLight = '#e6e6e6';
const primaryDetailsLight = '#322b54'; //verde escuro puxando para azul
const secondaryDetailsLight = '#46406c'; // cinza escuro
const transparencyLight = 'rgba(0, 0, 0, 0.3)'; //preto com transparência

const tintColorLight = '#3D3C47';
const tintButtonColorLight = '#fff';

export const Colors = {
  fireBrick: '#B22222',

  light: {
    title: primaryDetailsLight,
    subtitle: secondaryDetailsLight,
    text: tintColorLight,
    background: primaryLight,
    secondaryBackground: secondaryLight,

    //tint: primaryDetailsLight,
    //tabIconDefault: '#687076',
    //tabIconSelected: tintColorLight,

    fabBackground: secondaryDetailsLight,
    fabIconColor: tintButtonColorLight,

    //TextInput
    TextInputBackground: secondaryLight,
    TextInputTextColor: tintColorLight,
    TextInputActiveOutlineColor: primaryDetailsLight,
    TextInputOutlineColor: transparencyLight,

    //Button
    ButtonBackground: primaryDetailsLight,
    ButtonTextColor: tintButtonColorLight,

    //IconButton
    selectedIconColor: tintButtonColorLight,
    selectedBackgroundColor: secondaryDetailsLight,
    unselectedIconColor: secondaryDetailsLight,
    unselectedBackgroundColor: tintButtonColorLight,
  },
  dark: {
    title: primaryDetailsDark,
    subtitle: primaryDetailsDark,
    text: tintColorDark,
    background: primaryDark,
    secondaryBackground: secondaryDark,

    //tint: tintColorDark,
    //tabIconDefault: '#9BA1A6',
    //tabIconSelected: primaryDetailsDark,

    fabBackground: secondaryDetailsDark,
    fabIconColor: tintColorDark,

    //TextInput
    TextInputBackground: secondaryDark,
    TextInputTextColor: tintColorDark,
    TextInputActiveOutlineColor: primaryDetailsDark,
    TextInputOutlineColor: transparencyDark,

    //Button
    ButtonBackground: secondaryDetailsDark,
    ButtonTextColor: tintColorDark,

    //IconButton
    selectedIconColor: tintColorDark,
    selectedBackgroundColor: secondaryDetailsDark,
    unselectedIconColor: secondaryDetailsDark,
    unselectedBackgroundColor: secondaryLight,
  },
};
