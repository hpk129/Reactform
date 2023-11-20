import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react"

function App() { 
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
        
    {
        id:1,
        text:'doctors appointment',
        day:'asap',
        reminder: false,
    },
])
// add tasks
const addTask = (task) => {
  const id = Math.floor(Math.random()*1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}
//DELETE TASKSSS!!!
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=> task.id!==id))
}

//Toggle remindersss!!
const toggleReminder= (id)=>{
  setTasks(tasks.map((task) => task.id===id ? {...task,reminder: !task.reminder} : task))
}
  // you can write javascript directly in here
  return (
    <div className="container"> 
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>  
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder}/> ): ('No Tasks to show :( ')}
    </div>
  )
}

export default App;
