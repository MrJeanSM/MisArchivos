import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('example', 'descripcion', false, LEVELS.NORMAL)

    const changeState = () => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                Your Task
            </div>
            {/* Aplicar un FOR/MAP para renderizar una lista */}
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
};



export default TaskListComponent;
