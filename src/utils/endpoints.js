// BUILD_ prefix is for actual api endpoint
// QUERY_ prefix is for react-query state management

export const ALL_QUERIES = {
  QUERY_ALL_EVENTS: () => ["events"],
  QUERY_SINGLE_EVENT: ({ eventId }) => ["event", eventId],
};

export const ALL_ENDPOINTS = {
  BUILD_ALL_EVENTS: () => "/events?populate=*",
  BUILD_SINGLE_EVENT: ({ eventId }) => `/events/${eventId}?populate=*`,
  BUILD_POST_QUERY: () => `/queries`,
};
