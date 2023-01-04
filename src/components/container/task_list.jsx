import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// importamos la hoja de estilos task.scss
import '../../styles/task.scss';
import TaskForm from '../pure/form/taskForm';

const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);


    //control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);

    function completeTask(task){
        console.log('Complete This Task: ', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        // We update the state of the component with the new list of tasks and it will update the 
        // Iteration of the task in order to show the task updated
        setTasks(tempTask);
    }

    function deleteTask(task){
        console.log('Delete This Task: ', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index,1);
        setTasks(tempTask);
    }

    function addTask(task){
        console.log('Add This Task: ', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>Your Task: </h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task, index) => {
                                    return (
                                        <TaskComponent 
                                            key={ index } 
                                            task={ task }
                                            complete={ completeTask }
                                            remove={ deleteTask }
                                        >
                                        </TaskComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={ addTask }></TaskForm>
            {/* TODO: Aplicar un For/Map para renderizar una lista 
            <TaskComponent task={ defaultTask }></TaskComponent>*/}
        </div>
    );
};

export default TaskListComponent;
