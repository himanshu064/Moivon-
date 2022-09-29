import React from "react";
import EventsInfo from "../EventsInfo";
import Text from "../Text";
import styles from "./index.module.css";

const EventAccordion = ({ event, isExpanded, onExpand }) => {
  return (
    <>
      <div className="border-b1" style={{padding: 0}}>
        <div className={`${styles.evnts} ${styles.tablet}`}>
            <EventsInfo className={styles.eventInfoTablet} event={event} />
            <Text className={styles.textClass + ' ' + styles.textClassTablet}>{event.description}</Text>
        </div>
      </div>
    </>
  );
};

export default EventAccordion;
