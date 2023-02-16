import styles from "./Input.module.scss";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input ref={ref} className={styles.input} type='text' {...props} />;
});

export default Input;
