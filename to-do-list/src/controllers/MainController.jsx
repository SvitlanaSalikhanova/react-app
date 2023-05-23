import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskLine from '../components/TaskLine';
import { getActive, addTask } from '../redux/TasksSlice';

import Main from '../components/Main';

export default function MainController() {
    const tasks = useSelector(getActive);

    const dispatch = useDispatch();

    const [tempText, setTempText] = React.useState('');

    React.useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

    function addItem(event) {
        if (event.key === 'Enter' && event.target.value) {
            const newItem = {
                id: new Date().valueOf(),
                text: tempText,
                isDone: false,
            };
            dispatch(addTask(newItem));

            setTempText('');
        }
    }

    function changeText(event) {
        setTempText(event.target.value);
    }

    const taskLines = tasks.map((elem) => (
        <TaskLine
            item={elem}
            key={elem.id}
        />
    ));

    return (
        <Main
            changeText={changeText}
            addItem={addItem}
            tempText={tempText}
            taskLines={taskLines}
        />
    );
}
