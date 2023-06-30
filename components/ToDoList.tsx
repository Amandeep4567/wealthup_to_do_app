"use client";

import { useState } from "react";
import { text } from "stream/consumers";

interface Task {
  text: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleTaskInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTask(event.target.value);
  };

  const handleTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      alert("Assign some Task!");
    }
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleTaskComplete = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-sky-800">
      <div className="flex justify-center align-middle p-10">
        <form onSubmit={handleTaskSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={handleTaskInputChange}
            placeholder="Enter a new task"
            className="p-2 rounded-sm outline-none bg-gray-200"
          />
          <button
            type="submit"
            className="bg-gray-400 rounded-full p-2 text-white w-[100px] ml-2"
          >
            Add Task
          </button>
        </form>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search tasks"
          className="ml-10 p-2 rounded-sm outline-none bg-gray-200 "
        />
      </div>
      <div className="flex justify-center items-baseline ">
        <ul className="pb-1">
          {filteredTasks.map((task, index) => (
            <li
              key={index}
              style={{ color: task.completed ? "grey" : "white" }}
              className="pb-3"
            >
              <span className="text-2xl font-medium">{task.text}</span>
              <button
                className="bg-gray-400 rounded-full p-2 text-white w-[100px] ml-2"
                onClick={() => handleTaskComplete(index)}
              >
                Complete
              </button>
              <button
                className="bg-gray-400 rounded-full p-2 text-white w-[100px] ml-2"
                onClick={() => handleTaskDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
