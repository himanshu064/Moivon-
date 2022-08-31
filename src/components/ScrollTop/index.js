import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // scroll to top except when you click the back button
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}

export default ScrollTop;
