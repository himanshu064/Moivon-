import styles from "./text.module.css";

const Text = ({ variant = "normal", children, ...overrides }) => {
  return (
    <p className={`${styles.text} ${styles[variant]}`} {...overrides}>
      {children}
    </p>
  );
};

export default Text;
