import styles from "./button.module.css";
import Button from "react-bootstrap/Button";

const Btn = ({ type = "primary", children, ...overrides }) => {
  return (
    <Button className={`${styles.button} ${styles[type]}`} {...overrides}>
      {children}
    </Button>
  );
};

export default Btn;
