import React from "react";

const EventLoadingTiles = ({ tileCount = 1, ...props }) => (
  <>
    {[...new Array(tileCount)].map((_, skeltonIndex) => {
      return (
        <img
          key={`skeltonIndex_${skeltonIndex}`}
          src="/img/event-loading.svg"
          alt="loading..."
          {...props}
        />
      );
    })}
  </>
);

const EventLoadingTile = (props) => (
  <img src="/img/event-loading.svg" alt="loading..." {...props} />
);

export { EventLoadingTile, EventLoadingTiles };
