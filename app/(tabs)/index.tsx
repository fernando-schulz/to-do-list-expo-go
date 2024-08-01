import { Image, StyleSheet, ImageBackground, View, Modal } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedFAB } from '@/components/ThemedFAB';
import { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { ThemedTextInput } from '@/components/ThemedTextInput';

export default function HomeScreen() {

  const [visibleAddTask, setVisibleAddTask] = useState(false);

  return (
    <>
      {
        visibleAddTask && (
          <Modal animationType='slide' visible={visibleAddTask} transparent={true}>
            <View style={styles.modalBackground} />
            <ThemedView style={{ flex: 1 }}>
              <ThemedTextInput label='Título' placeholder='Título' style={{ marginBottom: 10 }} />
              <ThemedTextInput label='Descrição' placeholder='Descrição' />
              <Button onPress={() => setVisibleAddTask(false)}>Fechar</Button>
            </ThemedView>
          </Modal>
        )
      }
      <ImageBackground source={require('@/assets/images/partial-react-logo.png')} style={styles.imageBackground}>
        <SafeAreaView style={styles.safeAreaView} edges={['top']}>
          <View style={styles.viewRow}>
            <ThemedText type="title">Tarefas</ThemedText>
          </View>
          <ThemedView style={styles.container}>
            <ThemedFAB
              icon="plus"
              style={styles.fab}
              onPress={() => setVisibleAddTask(true)}
            />
          </ThemedView>
        </SafeAreaView>
      </ImageBackground>
    </>
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
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
  },
  modalBackground: {
    flex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
