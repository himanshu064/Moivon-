import React, { useLayoutEffect, useRef } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { ALL_QUERIES } from "../../utils/endpoints";
import { fetchAllGenres } from "../../services/GenreService";
import TransparentHeader from "../TransparentHeader";
import ScrollingHeader from "../ScrollingHeader";
import { useLocation } from "react-router-dom";

function Header() {
  const { data: allGenres, isLoading: allGenresLoading } = useQuery(
    ALL_QUERIES.QUERY_ALL_GENRES(),
    fetchAllGenres
  );
  const transparentHeaderRef = useRef();
  const scrollingHeaderRef = useRef();
  const spacerRef = useRef();

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const onScroll = debounce(() => {
      if (window.scrollY > 100) {
        if (transparentHeaderRef.current) {
          transparentHeaderRef.current.classList.remove("scroll-down");
          transparentHeaderRef.current.classList.add("scroll-up");
        }

        if (scrollingHeaderRef.current) {
          scrollingHeaderRef.current.classList.remove("scroll-up");
          scrollingHeaderRef.current.classList.add("scroll-down");
        }
      } else {
        if (transparentHeaderRef.current) {
          transparentHeaderRef.current.classList.remove("scroll-up");
          transparentHeaderRef.current.classList.add("scroll-down");
        }

        if (scrollingHeaderRef.current) {
          scrollingHeaderRef.current.classList.remove("scroll-down");
          scrollingHeaderRef.current.classList.add("scroll-up");
        }
      }
    }, 100);

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  const renderScrollingHeader = () => {
    const restrictedPaths = ["/event-detail"];
    let isAllowed = false;
    restrictedPaths.forEach((path) => {
      isAllowed = pathname.startsWith(path) ? false : true;
    });
    return isAllowed;
  };

  return (
    <div className="app-header">
      <TransparentHeader
        ref={transparentHeaderRef}
        genres={allGenres?.data?.data}
      />
      {renderScrollingHeader() && (
        <ScrollingHeader
          ref={scrollingHeaderRef}
          genres={allGenres?.data?.data}
        />
      )}
      <div ref={spacerRef} className="spacer" />
    </div>
  );
}

export default Header;
