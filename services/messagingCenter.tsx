import { Alert } from "react-native"

export const sendAlert = (title: string, message: string) => {
    Alert.alert(title, message, [{ text: "Fechar" }])
}

export const sendQuestion = (title: string, message: string, actBtnConfirm = undefined, actBtnCancel = undefined, txtBtnConfirm = 'Sim', txtBtnCancel = 'Não') => {
    Alert.alert(title, message, [
        {
            text: txtBtnCancel,
            onPress: actBtnCancel,
            style: 'cancel'
        },
        {
            text: txtBtnConfirm,
            onPress: actBtnConfirm
        }
    ])
}