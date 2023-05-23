import React from 'react';
import { BsCheckCircle, BsCircle, BsXLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import TaskLineCss from '../styles/TaskLine.module.scss';
import { deleteTask, completeTask } from '../redux/TasksSlice';

export default function TaskLine({ item }) {
    const [showDeleteButton, setShowDeleteButton] = React.useState(false);
    const dispatch = useDispatch();
    return (
        <div
            className={TaskLineCss.taskLine}
            onMouseEnter={() => setShowDeleteButton(true)}
            onMouseLeave={() => setShowDeleteButton(false)}
        >
            <button
                type="button"
                className={TaskLineCss.doneCheck}
                onClick={() => dispatch(completeTask(item.id))}
            >
                {item.isDone ? <BsCheckCircle /> : <BsCircle />}
            </button>

            <div
                className={
                    item.isDone
                        ? TaskLineCss.completedTaskText
                        : TaskLineCss.uncompletedTaskText
                }
            >
                {item.text}
            </div>

            {showDeleteButton
            && (
                <button
                    type="button"
                    className={TaskLineCss.deleteButton}
                    onClick={() => dispatch(deleteTask(item.id))}
                >
                    <BsXLg />
                </button>
            )}
        </div>
    );
}
