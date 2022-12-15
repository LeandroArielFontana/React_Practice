import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    const changeState =  (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>
                    Your Task: 
                </h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista */}
            <TaskListComponent task={ defaultTask }></TaskListComponent>
        </div>
    );
};


export default TaskListComponent;
