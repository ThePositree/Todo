import styles from "./CheckBox.module.scss";

const CheckBox = (props) => {
  return (
    <label>
      <input className={styles.input} type='checkbox' {...props} />
      <div className={styles.checkbox}></div>
    </label>
  );
};

export default CheckBox;
