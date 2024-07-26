import { StyleSheet, ImageBackground, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FAB } from 'react-native-paper';

export default function HomeScreen() {
    return (
        <ImageBackground source={require('@/assets/images/partial-react-logo.png')} style={styles.imageBackground}>
            <SafeAreaView style={styles.safeAreaView} edges={['top']}>
                <View style={styles.viewRow}>
                    <ThemedText type="title">Agenda</ThemedText>
                </View>
                <ThemedView style={styles.container}>
                    <FAB
                        icon="plus"
                        style={styles.fab}
                        onPress={() => console.log('Pressed')}
                    />
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
    },
    viewRow: {
        flexDirection: 'row',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0
    }
});
