import { useState } from 'react'
import Task from './components/task'
import List from './components/taskList';
function App() {
  const handleEdit = () =>{
      const changes = taskList.push();
    }
    const handleDelete = () =>{
      
    }
  return (
    <div className="App">
      <Task />
      <List />
    </div>
  )
}
export default App
