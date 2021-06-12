import Header from './components/Header'
import React from 'react'
import Tasks from './components/Tasks'
import {useState} from 'react'



function App() {

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
    <div className="container" >
      <Header title={'Hello'} />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;