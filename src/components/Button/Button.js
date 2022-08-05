import styles from "./button.module.css";
import Button from "react-bootstrap/Button";

const Btn = ({
  type = "primary",
  children,
  htmlType = "button",
  ...overrides
}) => {
  return (
    <Button
      className={`${styles.button} ${styles[type]}`}
      {...overrides}
      type={htmlType}
    >
      {children}
    </Button>
  );
};

export default Btn;
