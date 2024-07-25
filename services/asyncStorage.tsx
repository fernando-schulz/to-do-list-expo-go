import AsyncStorage from "@react-native-async-storage/async-storage";
import { sendAlert } from "./messagingCenter";

const setTask = async (task: Task): Promise<void> => {
    try {
        await AsyncStorage.setItem(`task:${task.id}`, JSON.stringify(task));
    } catch (error) {
        sendAlert('Erro', `Não foi possível salvar a tarefa.\n\nLog: ${error}`);
    }
}

const getTasks = async (): Promise<Task[]> => {
    try {
        const jsonValue = await AsyncStorage.getItem('@tasks_key');
        return jsonValue != null ? JSON.parse(jsonValue) as Task[] : [];
    } catch (error) {
        sendAlert('Erro', `Não foi possível carregar as tarefas.\n\nLog: ${error}`);
        return [];
    }
};

const getPendingTasks = async (): Promise<Task[]> => {
    try {
        const tasks = await getTasks();
        return tasks?.filter(task => !task.completed);
    } catch (error) {
        sendAlert('Erro', `Não foi possível carregar as tarefas pendentes.\n\nLog: ${error}`);
        return [];
    }
}

const getCompletedTasks = async (): Promise<Task[]> => {
    try {
        const tasks = await getTasks();
        return tasks?.filter(task => task.completed);
    } catch (error) {
        sendAlert('Erro', `Não foi possível carregar as tarefas concluídas.\n\nLog: ${error}`);
        return [];
    }
}