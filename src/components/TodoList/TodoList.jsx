function TodoList() {
  const tasks = ['לקנות חלב', 'להכין שיעורי בית', 'לסדר את החדר'];

  return (
    <div>
      <h2>רשימת משימות</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;