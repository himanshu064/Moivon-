import styles from "./heading.module.css";

const Heading = ({
  // - variant working based upon tags
  variant = "h1",
  children = "",
  mb = 25,
  customClass,
  style = {},
  ...overrides
}) => {
  const conditionalStyles = {
    marginBottom: `${mb}px`,
    ...style,
  };

  return (
    <h1
      className={`${styles.heading} ${styles[variant]} ${customClass}`}
      style={conditionalStyles}
      {...overrides}
    >
      {children}
    </h1>
  );
};

export default Heading;
