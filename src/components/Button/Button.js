import styles from "./button.module.css";
import Button from "react-bootstrap/Button";

const Btn = ({
  type = "primary",
  children,
  htmlType = "button",
  className = "",
  ...overrides
}) => {
  return (
    <Button
      className={`${styles.button} ${styles[type]} ${className}`}
      {...overrides}
      type={htmlType}
    >
      {children}
    </Button>
  );
};

export default Btn;
