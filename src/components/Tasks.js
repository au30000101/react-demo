
import {useState} from 'react'
import Task from './Task'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'h',
            day: 'Feb 5th',
            reminder: true,
        },
        {
            id: 2,
            text: 'h2',
            day: 'Feb 5th',
            reminder: true
        }])
    return (
        <>
           {tasks.map((task)=> (
            <Task key={task.id} task={task}  />
           ))} 
        </>
    )
}

export default Tasks