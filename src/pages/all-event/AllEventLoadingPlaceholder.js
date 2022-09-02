import React from "react";
import Col from "react-bootstrap/Col";
import { EventLoadingTile } from "../../components/EventLoadingTile";

const AllEventLoadingPlaceholder = () => {
  return (
    <>
      {[...new Array(10)].map((_, skeltonIndex) => {
        return (
          <Col md={4} className="mb-3">
            <EventLoadingTile key={`skeltonIndex_${skeltonIndex}`} />
          </Col>
        );
      })}
    </>
  );
};

export default AllEventLoadingPlaceholder;
