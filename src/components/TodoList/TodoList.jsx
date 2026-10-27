import TodoItem from '../TodoItem/TodoItem';
function TodoList() {
  const tasks = ['לקנות חלב', 'להכין שיעורי בית', 'לסדר את החדר'];

  return (
    <div>
      <h2>רשימת משימות</h2>
      <ul>
        {tasks.map((task) => (
          <TodoItem key={task} title={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;