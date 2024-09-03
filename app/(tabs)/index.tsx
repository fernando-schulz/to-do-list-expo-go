import { Image, StyleSheet, ImageBackground, View, Modal, Alert, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedFAB } from '@/components/ThemedFAB';
import { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { ThemedButton } from '@/components/ThemedButton';
import { getCompletedTasks, getNextId, getPendingTasks, getTasks, setTask, setTaskCompleted } from '@/services/asyncStorage';
import { ThemedIconButton } from '@/components/ThemedIconButton';

export default function HomeScreen() {

  const [visibleAddTask, setVisibleAddTask] = useState(false);
  const [titleTask, setTitleTask] = useState('');
  const [descriptionTask, setDescriptionTask] = useState('');
  const [pendingTasks, setPendingTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  // useEffect(() => {
  //   setTasks([...pendingTasks, ...completedTasks]);
  // }, [pendingTasks, completedTasks]);

  const carregarTarefas = async () => {
    const tempPendingTasks = await getPendingTasks();
    const tempCompletedTasks = await getCompletedTasks();
    setTasks([...tempPendingTasks, ...tempCompletedTasks]);
    //setPendingTasks(tempPendingTasks);
    //setCompletedTasks(tempCompletedTasks);
  }

  const salvarTarefa = async () => {
    if (titleTask && descriptionTask) {
      const id = await getNextId();
      const task = {
        id,
        title: titleTask,
        description: descriptionTask,
        completed: false,
        date: new Date()
      };
      await setTask(task);
      setTitleTask('');
      setDescriptionTask('');
      setVisibleAddTask(false);
      carregarTarefas();
    } else {
      Alert.alert('Campos obrigatórios', 'Preencha os campos de título e descrição corretamente');
    }
  }

  const renderTask = (task: Task) => {
    return (
      <View key={task.id} style={styles.viewItem}>
        <View key={task.id} style={styles.viewLeft}>
          <ThemedText type="subtitle" numberOfLines={1}>{task.title}</ThemedText>
          <ThemedText type="description" numberOfLines={2}>{task.description}</ThemedText>
        </View>
        <View style={styles.viewRight}>
          <ThemedIconButton
            icon="check-bold"
            mode='contained'
            size={12}
            selected={task.completed}
            onPress={async () => {
              await setTaskCompleted(task.id, !task.completed, new Date());
              carregarTarefas();
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <>
      {
        visibleAddTask && (
          <Modal animationType='slide' visible={visibleAddTask} transparent={true}>
            <View style={styles.modalBackground} />
            <ThemedView secondaryView={true} style={styles.viewModal}>
              <ThemedText type="subtitle">Adicionar Tarefa</ThemedText>
              <ThemedTextInput
                label='Título'
                placeholder='Informe o Título'
                style={{ marginBottom: 5 }}
                value={titleTask}
                onChangeText={(value) => setTitleTask(value)}
              />
              <ThemedTextInput
                label='Descrição'
                placeholder='Informe a Descrição'
                value={descriptionTask}
                onChangeText={(value) => setDescriptionTask(value)}
              />
              <ThemedButton onPress={() => salvarTarefa()}>Salvar</ThemedButton>
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
          <FlatList
            data={tasks}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => renderTask(item)}
          />
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
  },
  viewItem: {
    paddingHorizontal: 10,
    paddingTop: 5,
    flexDirection: 'row'
  },
  viewLeft: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  viewRight: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});
