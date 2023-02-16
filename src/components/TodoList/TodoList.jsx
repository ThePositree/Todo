import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";
import { useState } from "react";
import Input from "../../UI/Input/Input";
import { AiOutlineSearch } from "react-icons/ai";
import { useGetTodosByTextQuery } from "../../services/todo";
const TodoList = ({ todoList }) => {
  const [valueInput, setValueInput] = useState("");
  const { data: findedTodos } = useGetTodosByTextQuery(valueInput);

  const render = () => {
    if (findedTodos?.length || valueInput) {
      return findedTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />);
    } else {
      return todoList.map((todo) => <TodoItem todo={todo} key={todo.id} />);
    }
  };

  return (
    <ul className={styles.ul}>
      <div className={styles.search}>
        <Input style={{ maxWidth: "100%" }} onChange={(e) => setValueInput(e.target.value)} value={valueInput} />
        <AiOutlineSearch className={styles.icon} />
      </div>
      {render()}
    </ul>
  );
};

export default TodoList;
