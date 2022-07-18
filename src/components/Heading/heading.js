import styles from "./heading.module.css";

const Heading = ({
  // - variant working based upon tags
  variant = "h1",
  children = "",
  mb = 25,
  customClass,
  ...overrides
}) => {
  const conditionalStyles = {
    marginBottom: `${mb}px`,
  };

  return (
    <h1
      className={`${styles.heading} ${customClass} ${styles[variant]}`}
      style={conditionalStyles}
      {...overrides}
    >
      {children}
    </h1>
  );
};

export default Heading;
