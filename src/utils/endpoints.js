// BUILD_ prefix is for actual api endpoint
// QUERY_ prefix is for react-query state management

import { objectToQueryParams } from "./helpers";

export const ALL_QUERIES = {
  QUERY_ALL_EVENTS: ({ genre = "all", sort, order }) => [
    "events",
    genre,
    sort,
    order,
  ],
  QUERY_RELATED_EVENTS: () => ["relatedEvents"],
  QUERY_UPCOMING_EVENTS: () => ["upcomingEvents"],
  QUERY_SINGLE_EVENT: ({ eventId }) => ["event", eventId],
  QUERY_ALL_GENRES: () => ["genres"],
  QUERY_HERO_SLIDER: () => ["heroSlider"],
  QUERY_MOST_POPULAR: () => ["mostPopular"],
};

export const ALL_ENDPOINTS = {
  BUILD_ALL_EVENTS: ({ page = 1, perPage = 10, genreId, sort, order }) => {
    const data = {
      published: true,
      page,
      size: perPage,
    };

    if (sort) {
      data["sort"] = sort;
    }
    if (order) {
      data["order"] = order;
    }
    if (genreId !== "all") {
      data["genreId"] = genreId;
    }

    const qs = `?${objectToQueryParams(data)}`;
    return "/events" + qs;
  },
  BUILD_SINGLE_EVENT: ({ eventId }) => `/events/${eventId}`,
  BUILD_RELATED_EVENTS: () => "/events?size=3&published=true&sort=earliest",
  BUILD_UPCOMING_EVENTS: () =>
    `/events?size=10&published=true&upComing=true&sort=upComingSeq&order=asc`,
  BUILD_MOST_POPULAR_EVENTS: () =>
    `/events?size=10&published=true&mostPopular=true&sort=mostPopularSeq&order=asc`,
  BUILD_POST_QUERY: () => `/misc/contactus`,
  BUILD_POST_NEW_EVENT: () => `/events`,
  BUILD_ALL_GENRES: () => `/genres`,
  BUILD_HERO_SLIDER: ({ page, size }) => {
    const data = {
      page,
      size,
    };
    const qs = `?${objectToQueryParams(data)}`;
    return "/heroimage" + qs;
  },

  // genres
  BUILD_FETCH_ALL_GENRES: () => `/genres`,
};
