//DARK THEME
const primaryDark = '#121212'; //cinza escuro
const secondaryDark = '#3D3C47'; //cinza menos escuro
const primaryDetailsDark = '#e35241'; //laranja/vermelho
//const secondaryDetailsDark = '#688a7c'; // Verde escuro
const secondaryDetailsDark = '#e49183'; // Verde escuro
//const backgroundSecondaryDark = '#becec4'; // Verde claro


//LIGHT THEME
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
  fireBrick: '#B22222',

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

    //IconButton
    selectedIconColor: backgroundSecondaryLight,
    selectedBackgroundColor: secondaryDark,
    unselectedIconColor: primaryDetailsLight,
    unselectedBackgroundColor: secondaryLight,
  },
  dark: {
    title: primaryDetailsDark,
    subtitle: secondaryDetailsDark,
    text: tintColorDark,
    background: primaryDark,
    secondaryBackground: secondaryDark,

    tint: tintColorDark,
    //icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: primaryDetailsDark,

    fabBackground: primaryDetailsDark,
    fabIconColor: tintColorDark,

    //TextInput
    TextInputBackground: secondaryDark,
    TextInputTextColor: primaryDetailsDark,
    TextInputActiveOutlineColor: primaryDetailsDark,
    TextInputOutlineColor: secondaryDetailsDark,

    //Button
    ButtonBackground: primaryDetailsDark,
    ButtonTextColor: tintColorDark,

    //IconButton
    selectedIconColor: tintColorDark,
    selectedBackgroundColor: primaryDetailsDark,
    unselectedIconColor: secondaryDetailsDark,
    unselectedBackgroundColor: secondaryLight,
  },
};
