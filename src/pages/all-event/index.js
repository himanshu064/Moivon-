import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Event from "../../components/Event";
import styles from "./index.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import RouteTitle from "../../components/RouteTitle/RouteTitle";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllEvent } from "../../services/EventService";
import { ALL_QUERIES } from "../../utils/endpoints";
import Loader from "../../components/Loader";
import { calculateTotalPagesCount } from "../../utils/helpers";

const PER_PAGE = 10;

function AllEvent() {
  const [key, setKey] = useState("AllEvent");
  const {
    isLoading,
    isError,
    error,
    data: eventsData,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ALL_QUERIES.QUERY_ALL_EVENTS(),
    ({ pageParam = 1 }) =>
      fetchAllEvent({ page: pageParam, perPage: PER_PAGE }),
    {
      getNextPageParam: (lastPageResponse, allPages) => {
        const totalEvents = lastPageResponse?.data?.totalEvent;
        const totalPages = calculateTotalPagesCount(PER_PAGE, totalEvents);
        const nextPage = allPages.length + 1;
        return nextPage <= totalPages ? nextPage : undefined;
      },
    }
  );

  if (isLoading) return <Loader />;

  if (isError) return <p>{error}</p>;

  const computedDataArray = eventsData.pages.flatMap((page) => page.data?.data);

  const RenderEvent = () => {
    return (
      <Row>
        {computedDataArray.map((event) => (
          <Col md={4} className='mb-3' key={event.id}>
            <Event event={event} />
          </Col>
        ))}
      </Row>
    );
  };

  const ALL_COMPONENT = {
    AllEvent: RenderEvent,
    Classic: RenderEvent,
    Gallery: RenderEvent,
    Feature: RenderEvent,
    Design: RenderEvent,
    Individual: RenderEvent,
  };

  const randomTabContent = () => {
    const DyanmicComponet = ALL_COMPONENT[key];
    return <DyanmicComponet />;
  };

  return (
    <>
      <RouteTitle title='All Events' />
      <section className='section'>
        <Container>
          <Row>
            <Col md={12}>
              <div className={" mb-4 " + styles.navHead}>
                <Heading mb='0' variant='subHeading'>
                  Events
                </Heading>
                <div
                  className={`align-items-center justify-content-between gap-5 w-100 ${styles.topHead}`}
                >
                  <Tabs
                    id='controlled-tab-example'
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className={`mb-3 customTab ${styles.customTabs}`}
                  >
                    <Tab eventKey='AllEvent' title='All events'></Tab>
                    <Tab eventKey='Classic' title='CLASSIC MUSEUM'></Tab>
                    <Tab eventKey='Gallery' title='GALLERY'></Tab>
                    <Tab eventKey='Feature' title='FEATURE VENUE'></Tab>
                    <Tab eventKey='Design' title='DESIGN CONVETION'></Tab>
                    <Tab eventKey='Individual' title='INDIVIDUAL'></Tab>
                  </Tabs>

                  <div className={styles.sortBtn}>
                    <Button type='outline'>Sort</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              {computedDataArray.length === 0 && !isLoading ? (
                <p className='no-data'>No Event found</p>
              ) : (
                <InfiniteScroll
                  dataLength={computedDataArray.length}
                  next={fetchNextPage}
                  hasMore={hasNextPage}
                  loader={<h4>Loading...</h4>}
                >
                  {randomTabContent()}
                </InfiniteScroll>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AllEvent;
