import { StyleSheet, View, Modal, Alert, FlatList, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedFAB } from '@/components/ThemedFAB';
import { useEffect, useState } from 'react';
import { Divider } from 'react-native-paper';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { ThemedButton } from '@/components/ThemedButton';
import { deleteTask, getCompletedTasks, getNextId, getPendingTasks, getTasks, setTask, setTaskCompleted } from '@/services/asyncStorage';
import { ThemedIconButton } from '@/components/ThemedIconButton';
import { Colors } from '@/constants/Colors';
import Animated, { Layout, FadeIn, FadeOut } from 'react-native-reanimated';
import React from 'react';

const imgTask = require('../assets/images/tasks.png');

export default function TasksScreen() {

  const [visibleAddTask, setVisibleAddTask] = useState(false);
  const [titleTask, setTitleTask] = useState('');
  const [descriptionTask, setDescriptionTask] = useState('');
  const [pendingTasks, setPendingTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async (completar = true) => {
    const tempPendingTasks = await getPendingTasks();
    const tempCompletedTasks = await getCompletedTasks();
    if (completar) {
      setPendingTasks(tempPendingTasks);
      setCompletedTasks(tempCompletedTasks);
    } else {
      setCompletedTasks(tempCompletedTasks);
      setPendingTasks(tempPendingTasks);
    }
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

  const excluirTarefa = async (id: number) => {

    Alert.alert('Exclusão', 'Deseja excluir essa tarefa?', [
      {
        text: 'Fechar',
        onPress: () => { },
        style: 'cancel'
      },
      {
        text: 'Excluir',
        onPress: async () => {
          await deleteTask(id);
          carregarTarefas();
        }
      }
    ])
  }

  const setAsCompleted = async (taskId: number, completed: boolean) => {
    await setTaskCompleted(taskId, completed, new Date());
    carregarTarefas(completed);
  };

  const renderTask = (task: Task) => {
    return (
      <Animated.View
        key={task.id}
        entering={FadeIn}
        exiting={FadeOut}
        layout={Layout.springify()}
        style={styles.viewTask}
      >
        <TouchableOpacity style={styles.viewRow} onLongPress={() => excluirTarefa(task.id)}>
          <View key={task.id} style={[styles.viewLeft]}>
            <ThemedText type="subtitle" numberOfLines={1}>{task.title}</ThemedText>
            <ThemedText type="description" numberOfLines={2}>{task.description}</ThemedText>
          </View>
          <View style={styles.viewRight}>
            <ThemedIconButton
              icon="check-bold"
              mode='contained'
              size={10}
              selected={task.completed}
              onPress={async () => {
                await setAsCompleted(task.id, !task.completed);
              }}
            />
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  const renderModal = () => {
    return <Modal animationType='slide' visible={visibleAddTask} transparent={true}>
      <TouchableOpacity onPress={() => setVisibleAddTask(false)} style={styles.modalBackground} />
      <ThemedView secondaryView={true} style={styles.viewModal}>
        <ThemedText type="subtitle">Adicionar Tarefa</ThemedText>
        <ThemedTextInput
          label='Título'
          placeholder='Informe o Título'
          style={styles.textInputModal}
          value={titleTask}
          onChangeText={(value) => setTitleTask(value)}
        />
        <ThemedTextInput
          label='Descrição'
          placeholder='Informe a Descrição'
          style={styles.textInputModal}
          value={descriptionTask}
          onChangeText={(value) => setDescriptionTask(value)}
        />
        <View style={styles.viewBtnSalvar}>
          <ThemedButton style={styles.btnSalvar} onPress={() => salvarTarefa()}>Salvar</ThemedButton>
        </View>
      </ThemedView>
    </Modal>
  }

  return (
    <>
      {
        visibleAddTask && renderModal()
      }
      <ThemedView style={styles.container}>
        <View style={styles.viewRow}>
          <View style={styles.viewHeader}>
            <Image source={imgTask} style={styles.imgHeader} />
          </View>
          <View style={styles.viewTitle}>
            <ThemedText type='title'>Tarefas</ThemedText>
          </View>
        </View>
        <ThemedView style={styles.viewTasks} secondaryView={true}>
          {pendingTasks?.length > 0 &&
            <FlatList
              style={styles.flatList}
              data={pendingTasks}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => renderTask(item)}
            />
          }
          {completedTasks?.length > 0 &&
            <>
              <ThemedText style={{ marginTop: 10 }} type='defaultSemiBold'>Tarefas Completadas</ThemedText>
              <Divider style={styles.divider} />
              <FlatList
                style={styles.flatList}
                data={completedTasks}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => renderTask(item)}
              />
            </>
          }
          <ThemedFAB
            icon="plus"
            style={styles.fab}
            onPress={() => setVisibleAddTask(true)}
          />
        </ThemedView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 15
  },
  container: {
    flex: 1,
  },
  viewTasks: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 6,
    padding: 12,
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
  viewLeft: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  viewRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
  },
  divider: {
    marginTop: 2,
    marginBottom: 10,
  },
  imgHeader: {
    width: 200,
    height: 200,
  },
  viewHeader: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  viewTitle: {
    paddingVertical: 10,
    paddingRight: 20,
    justifyContent: 'flex-end'
  },
  textInputModal: {
    marginBottom: 5,
  },
  btnSalvar: {
    width: 150,
    height: 40,
  },
  viewBtnSalvar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  viewTask: {
    padding: 3,
  }
});
