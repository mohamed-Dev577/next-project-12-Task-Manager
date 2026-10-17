"use client";

import { useState } from "react";

export default function TaskManagerPage() {
   
   const [tasks, setTasks] = useState([]);
   const [task , setTask] = useState("");

   const addTask = () => {
    if(task.trim() === "") {
        return;
    }
     setTasks([...tasks, {
    title: task,
    completed: false
}]);
     setTask("");
   }
   const deleteTask = (index) => {
    const updateTask = tasks.filter((_, i) => i !== index);
    setTasks(updateTask);
   }

   const toggleTask = (index) => {
        const updatedTasks = tasks.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item
        );

    setTasks(updatedTasks);
   };

    return(
        <div>
            <h1>Task Manager</h1>
            <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}/>
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task, index) => (
    <li key={index}>
        <button onClick={() => deleteTask(index)}>Delete</button>
        <button onClick={() => toggleTask(index)}>
            {task.completed ? "Undo" : "Complete"}
        </button>
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
        </span>
    </li>
))}
            </ul>

        </div>
    );
}