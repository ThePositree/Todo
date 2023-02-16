import TodoAdd from "../TodoAdd/TodoAdd";
import TodoList from "../TodoList/TodoList";
import styles from "./Todo.module.scss";
import { useGetTodosQuery } from "../../services/todo";

const Todo = () => {
  const { data: todoList, isLoading } = useGetTodosQuery();
  return (
    <div className={styles.container}>
      {isLoading ? (
        "loading..."
      ) : (
        <>
          <TodoAdd />
          {todoList.length ? <TodoList todoList={todoList} findedTodos={todoList} /> : ""}
        </>
      )}
    </div>
  );
};

export default Todo;
