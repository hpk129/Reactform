
// const tasks = [
//     {
//         id:1,
//         text:'doctors appointment',
//         day:'asap',
//         reminder: true,
//     },
// ]

//we need to understand one thing...State is immutable toh idhrr array.push() vgerah mat krne lgg jana
import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
      {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete= {onDelete}
      onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Tasks
