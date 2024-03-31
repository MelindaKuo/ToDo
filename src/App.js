import "./styles.css";
import React, { useState } from "react";

function Task({ task, completedTask }) {
  return <button onClick={() => completedTask(task)}>{task}</button>;
}

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [completedCounter, setCompletedCounter] = useState(0);

  function addTask() {
    setTasks([inputText, ...tasks]);
    setInputText("");
  }

  function completeTask(task) {
    setTasks(tasks.filter((t) => t !== task));
    setCompletedCounter(completedCounter + 1);
  }

  return (
    <div className="ToDo">
      <div className="headers">
        <p>Completed Tasks : {completedCounter}</p>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <Task className="tasks" task={task} completedTask={completeTask} />
        ))}
      </div>
    </div>
  );
}
