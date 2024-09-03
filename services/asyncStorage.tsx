import AsyncStorage from "@react-native-async-storage/async-storage";
import { sendAlert } from "./messagingCenter";

const ID_COUNTER_KEY = '@task_id_counter';
const TASKS_KEY = '@tasks_key';

export const getNextId = async (): Promise<number> => {
    try {
        const currentId = await AsyncStorage.getItem(ID_COUNTER_KEY);
        const nextId = currentId != null ? parseInt(currentId, 10) + 1 : 1;
        await AsyncStorage.setItem(ID_COUNTER_KEY, nextId.toString());
        return nextId;
    } catch (error) {
        sendAlert('Erro', `Não foi possível gerar um novo ID.\n\nLog: ${error}`);
        throw error;
    }
};

export const setTask = async (task: Task): Promise<void> => {
    try {
        const tasks = await getTasks();
        if (!task.id) {
            task.id = await getNextId();
        }
        const updatedTasks = [...tasks, task];
        await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks));
    } catch (error) {
        sendAlert('Erro', `Não foi possível salvar a tarefa.\n\nLog: ${error}`);
    }
};

export const setTaskCompleted = async (taskId: number, completed: boolean, date: Date): Promise<void> => {
    try {
        const tasks = await getTasks();
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                task.completed = completed;
                task.date = date;
            }
            return task;
        });
        await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks));
    } catch (error) {
        sendAlert('Erro', `Não foi possível atualizar a tarefa.\n\nLog: ${error}`);
    }
};

export const getTasks = async (): Promise<Task[]> => {
    try {
        const jsonValue = await AsyncStorage.getItem(TASKS_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) as Task[] : [];
    } catch (error) {
        sendAlert('Erro', `Não foi possível carregar as tarefas.\n\nLog: ${error}`);
        return [];
    }
};

export const getPendingTasks = async (): Promise<Task[]> => {
    try {
        const tasks = await getTasks();
        return tasks?.filter(task => !task.completed);
    } catch (error) {
        sendAlert('Erro', `Não foi possível carregar as tarefas pendentes.\n\nLog: ${error}`);
        return [];
    }
}

export const getCompletedTasks = async (): Promise<Task[]> => {
    try {
        const tasks = await getTasks();
        return tasks?.filter(task => task.completed);
    } catch (error) {
        sendAlert('Erro', `Não foi possível carregar as tarefas concluídas.\n\nLog: ${error}`);
        return [];
    }
}