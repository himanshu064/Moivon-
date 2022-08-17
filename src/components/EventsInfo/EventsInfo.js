import React from "react";
import styles from "./eventinfo.module.css";

import Button from "../Button";
import { format, parseISO } from "date-fns";

function EventsInfo({ event }) {
  return (
    <>
      <div className={styles.gridDiv}>
        <div className={`${styles.galleryBtn} ${styles.borderRight}`}>
          <Button>{event.btnText}</Button>
        </div>
        <div className={`${styles.dateDiv}  ${styles.borderRight}`}>
          <span className={styles.title}>Date</span>
          <span className={styles.date}>
            {format(parseISO(event?.dates), "dd MMM")}
          </span>
        </div>
        <div className={`${styles.locationDiv}  ${styles.borderRight}`}>
          <span className={styles.title}>Location</span>
          <span className={styles.location}>{event.location}</span>
        </div>
      </div>
    </>
  );
}

export default EventsInfo;
