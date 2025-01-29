import { useSelector } from "react-redux";
import TodoItem from "./TodoItem.jsx";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} id={todo.id} text={todo.text}  completed={todo.completed}/>;
      })}
    </>
  );
};

export default TodoList;
