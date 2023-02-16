import styles from "./TodoAdd.module.scss";
import { GrAdd } from "react-icons/gr";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { useRef } from "react";
import TextArea from "../../UI/TextArea/TextArea";
import { useAddTodoMutation } from "../../services/todo";
const TodoAdd = () => {
  const input = useRef(null);
  const textarea = useRef(null);

  const [addTodo] = useAddTodoMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.current.value) return;
    const todo = {
      text: input.current.value.trim(),
      isCompleted: false,
      description: textarea.current.value.trim(),
    };
    const { id } = await addTodo({ todo }).unwrap();
    input.current.value = "";
    textarea.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input ref={input} placeholder='Заголовок' />
      <TextArea ref={textarea} placeholder='Описание' />
      <Button style={{ width: "100%" }}>
        <GrAdd />
      </Button>
    </form>
  );
};

export default TodoAdd;
