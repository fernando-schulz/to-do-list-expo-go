import { Image, StyleSheet, ImageBackground, View, Modal } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedFAB } from '@/components/ThemedFAB';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { ThemedButton } from '@/components/ThemedButton';

export default function HomeScreen() {

  const [visibleAddTask, setVisibleAddTask] = useState(false);

  return (
    <>
      {
        visibleAddTask && (
          <Modal animationType='slide' visible={visibleAddTask} transparent={true}>
            <View style={styles.modalBackground} />
            <ThemedView secondaryView={true} style={styles.viewModal}>
              <ThemedText type="subtitle">Adicionar Tarefa</ThemedText>
              <ThemedTextInput label='Título' placeholder='Título' style={{ marginBottom: 5 }} />
              <ThemedTextInput label='Descrição' placeholder='Descrição' />
              <ThemedButton onPress={() => setVisibleAddTask(false)}>Fechar</ThemedButton>
            </ThemedView>
          </Modal>
        )
      }
      <SafeAreaView style={styles.safeAreaView} edges={['top']}>
        <View style={styles.viewRow}>
          <ThemedText type="title">Tarefas</ThemedText>
        </View>
        <ThemedView style={styles.container} secondaryView={true}>
          <ThemedFAB
            icon="plus"
            style={styles.fab}
            onPress={() => setVisibleAddTask(true)}
          />
        </ThemedView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 15
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewModal: {
    flex: 1,
    padding: 20,
  }
});
