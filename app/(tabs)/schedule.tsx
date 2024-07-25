import { StyleSheet, ImageBackground } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    return (
        <ImageBackground source={require('@/assets/images/partial-react-logo.png')} style={styles.imageBackground}>
            <SafeAreaView style={styles.safeAreaView}>
                <ThemedText type="title">Agenda</ThemedText>
                <ThemedView style={styles.container}>

                </ThemedView>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    imageBackground: {
        flex: 1,
        padding: 12,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        elevation: 6,
    }
});
