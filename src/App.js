import Header from './components/Header'
import React from 'react'
import Tasks from './components/Tasks'
import Footer from './components/Footer'
import {useState, useEffect} from 'react'
import AddTask from './components/AddTask'
import About from './components/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  const [showAddTask, setShowAddTask ] = useState(true)
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    const getTasks = async() => {
        const tasksFromServer = await fetchTasks() 
        setTasks(tasksFromServer)

    }
    getTasks()
  }, [])
  // fetchtasks
  
  const fetchTasks = async() => {
    const rest = await fetch ('http://localhost:5000/tasks')
    const data = await rest.json()
    console.log(data)
    return data
  }

  // Add Task

  const addTask = async (task) => {

    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();


    setTasks([...tasks, data])
    // console.log(task)
    // const id = Math.floor(Math.random() * 10000) + 1

    // const newTask = { id , ...task}
    // setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete', id)
  }

  // Toggle Reminder
  const toggleReminder = (id) => { 
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))

    console.log(tasks[0].reminder);
  }


  return (
    <Router>
      <div className="container" >
        <Header title={'Hello'} onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'}
          </>
        )}/>
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;