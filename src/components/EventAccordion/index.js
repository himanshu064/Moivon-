import React from "react";
import EventsInfo from "../EventsInfo";
import Text from "../Text";
import styles from "./index.module.css";

const EventAccordion = ({ event, isExpanded, onExpand }) => {
  return (
    <>
      <div className="border-b1">
        <h3
          className={`text-truncate ${styles.title}`}
          title={event.title}
          onClick={onExpand}
        >
          {event.title}
        </h3>
        {isExpanded && (
          <div className={`${styles.evnts}`}>
            <Text className={styles.textClass}>{event.description}</Text>
            <EventsInfo event={event} />
          </div>
        )}
      </div>
    </>
  );
};

export default EventAccordion;
