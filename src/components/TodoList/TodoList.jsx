import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
  const [tasks, setTasks] = useState(['לקנות חלב', 'להכין שיעורי בית', 'לסדר את החדר']);
  const [newTask, setNewTask] = useState('');

  // update the state on every change in the input
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  // add a new task when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = newTask.trim();

    // do not add an empty task or an existing one
    if (task === '' || tasks.includes(task)) {
      return;
    }

    setTasks([...tasks, task]);
    setNewTask('');
  };

  return (
    <div>
      <h2>רשימת משימות</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="משימה חדשה"
        />
        <button type="submit">אישור</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <TodoItem key={task} title={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;