export const readTasks = () => JSON.parse(localStorage.getItem('tasks'));

export const writeTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));
