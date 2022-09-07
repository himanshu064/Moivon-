import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTopInstantly } from "../../utils/helpers";

function ScrollTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // scroll to top except when you click the back button
    scrollToTopInstantly();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}

export default ScrollTop;
