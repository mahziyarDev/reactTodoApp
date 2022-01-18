import React, { useContext } from 'react';
import { taskContext } from './taskContext';


const TaskItems = ()=>{
    const { taskItems, setTaskItems } = useContext(taskContext);

    //for done and dont Done
    const handleDoneTask = (id) => {
        const index = taskItems.findIndex(t => t.id === id);
        let newTaskItem = [...taskItems];
        newTaskItem[index].done = !newTaskItem[index].done;
        setTaskItems(newTaskItem);
    }
    //for delete Task   
    const HandleDeleteTask = (id) => {
        let newTasks = taskItems.filter(t => t.id !== id);
        setTaskItems(newTasks);
    }
    
    if (taskItems.length) {
        return (
            <ul className="list-group m-0 p-0 mt-2">
                {
                    taskItems.map(t=>(
                        <li 
                        className={
                            `list-group-item d-flex justify-content-between 
                            ${t.done ? "list-group-item-success" : "" }`
                            }>
                           {t.title}
                            <span> 
                                <i className={`me-3 pointer fas ${t.done?"fa-check text-success":"fa-times text-warning"} transition_200 text_hover_shadow`}
                                            onClick={() => handleDoneTask(t.id)}></i>
                                
                                <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"
                                onClick={()=>HandleDeleteTask(t.id)}></i>
                            </span>
                        </li>
                    ))
                }
    
    
    
            </ul>    
        )
    } else {
        return (
            <ul className='list-group m-0 p-0 mt-2'>
                <div className='alert alert-danger text-center'>
                    <p className='text-center'>هیچ کاری ثبت نشده است</p>
                </div>
            </ul>
        )
    }
}

export default TaskItems;