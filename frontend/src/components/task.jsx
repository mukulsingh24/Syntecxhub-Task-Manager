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
    return(
        <div>
            <h1>Task Manager</h1>
            <input type="text" placeholder="Enter Your Task"
                onChange={(e)=> setTask(e.target.value)}
                value={task}
            />
            <button onClick={handleSubmit}>Submit the Task</button>
            <hr />
            <h1>My Tasks</h1>
            <ul>
                {taskList.map((item,index) =>(
                <li key={index}>{item}</li>))}
            </ul>
            <button onClick={()=>{handleDelete(index)}}>Delete Task</button>
        </div>
    )
}

export default Task