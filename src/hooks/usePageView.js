import { useEffect } from "react";
import ReactGA from "react-ga4";
const usePageView = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", path: window.location.pathname });
  }, []);
};
export { usePageView };
