import { createSlice } from '@reduxjs/toolkit';
import { SHOW_ACTIVE, SHOW_COMPLETED } from '../FilterConstatnts';

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],

};

export const getActive = (state) => {
    switch (state.filter.filter) {
    case SHOW_ACTIVE:
        return state.tasks.tasks.filter((elem) => elem.isDone === false);
    case SHOW_COMPLETED:
        return state.tasks.tasks.filter((elem) => elem.isDone === true);
    default:
        return state.tasks.tasks;
    }
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((elem) => elem.id !== action.payload);
        },

        completeTask: (state, action) => {
            const task = state.tasks.find((elem) => elem.id === action.payload);
            task.isDone = !task.isDone;
        },

        clearCompleted: (state) => {
            state.tasks = state.tasks.filter((elem) => elem.isDone === false);
        },
    },
});

export const {
    addTask, deleteTask, completeTask, clearCompleted,
} = tasksSlice.actions;
export default tasksSlice.reducer;
