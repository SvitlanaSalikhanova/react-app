import React from 'react';
import MainCss from '../styles/Main.module.scss';
import MenuLine from './MenuLine';

export default function Main(
    {
        tempText, changeText, addItem, taskLines,
    },
) {
    return (
        <div className={MainCss.main}>
            <div className={MainCss.logo}>TODO</div>
            <input
                type="text"
                placeholder="Enter your task and press ENTER"
                className={MainCss.inputTask}
                value={tempText}
                onChange={changeText}
                onKeyUp={addItem}
            />
            <div className={MainCss.linesWrapper}>
                {taskLines}

                <MenuLine count={taskLines.length} />
            </div>
        </div>
    );
}
