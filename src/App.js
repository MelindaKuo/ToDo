import "./styles.css";
import React, { useState } from "react";

function Task({ task, completedTask }) {
  return <button class = "buttonTasks" onClick={() => completedTask(task)}>{task}</button>;
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
          className="input"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button
          onClick={addTask}
          style={{ borderRadius: "5px", padding: "5px 10px", margin: "0 5px" }}
        >
          Add
        </button>
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <Task task={task} completedTask={completeTask} />
        ))}
      </div>
    </div>
  );
}
