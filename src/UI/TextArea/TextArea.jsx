import styles from "./TextArea.module.scss";
import { forwardRef } from "react";

const TextArea = forwardRef((props, ref) => {
  return <textarea ref={ref} className={styles.textarea} {...props}></textarea>;
});

export default TextArea;
