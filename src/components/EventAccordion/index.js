import React from "react";
import EventsInfo from "../EventsInfo";
import Text from "../Text";

const EventAccordion = ({ event, isExpanded, onExpand }) => {
  const btnText = Math.random() > 0.5 ? "gallery" : "feature venue";
  return (
    <>
      <div className="border-b">
        <h3 onClick={onExpand}>{event.title}</h3>
        {isExpanded && (
          <div className={`pb-4`}>
            <Text>{event.description}</Text>
            <EventsInfo
              btn={btnText}
              event={{
                ...event,
                btnText,
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default EventAccordion;
