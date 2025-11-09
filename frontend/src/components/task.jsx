import { useState } from "react";

function Task(){
    const[task,setTask] = useState("");
    const[taskList,setTaskList] = useState([]);
    const handleSubmit=()=>{
        setTaskList([...taskList,task])
        setTask("")
    } 
    const handleDelete =(itemIndex) =>{
        const newList = taskList.filter((_,index)=>{
            return index != itemIndex
        })
        setTaskList(newList)
    }
    const handleEdit = () =>{
        setTaskList([...taskList,task])
        setTask("")
    }
    return(
        <div>
            <h1>Task Manager</h1>
            <input type="text" placeholder="Enter Your Task"
                onChange={(e)=> setTask(e.target.value)}
                value={task}
            />
            <button onClick={handleSubmit}>Submit the Task</button>
            <h1>My Tasks</h1>
            <ul>
          {taskList.map((item, index) => (
            <li key={index}>{item}
              <button onClick={() => handleDelete(index)}>
                Delete Task
              </button>              
           </li>
          ))}
        </ul>
        <ul>
          {taskList.map((item, index) => (
            <li key={index}>{item}
              <button onClick={() => handleEdit(index)}>
                Edit Task
              </button>              
           </li>
          ))}
        </ul>
        </div>
    )
}

export default Task