import styles from "./text.module.css";

const Text = ({
  variant = "normal",
  children,
  className = "",
  ...overrides
}) => {
  return (
    <p
      className={`${styles.text} ${styles[variant]} ${className}`}
      {...overrides}
    >
      {children}
    </p>
  );
};

export default Text;
