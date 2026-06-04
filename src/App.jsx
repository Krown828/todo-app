import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const addTask = () => {
    if (input.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: input,
        complete: false,
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
    console.log(tasks);
  };
  return (
    <>
      <div id="center">
        <h1>Todo App</h1>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Enter a task"
          value={input}
          onChange={onChange}
        />
        <button type="button" onClick={addTask}>
          Add
        </button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
