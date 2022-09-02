import React from "react";
import styles from "./index.module.css";

const EventLoadingTile = ({ className = "", ...props }) => (
  <div className={`${styles.container} ${className}`} {...props}></div>
);

const EventLoadingTiles = ({ tileCount = 1, ...props }) => (
  <>
    {[...new Array(tileCount)].map((_, skeltonIndex) => {
      return (
        <EventLoadingTile key={`skeltonIndex_${skeltonIndex}`} {...props} />
      );
    })}
  </>
);

export { EventLoadingTile, EventLoadingTiles };
