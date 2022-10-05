import React, { useLayoutEffect, useRef } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { ALL_QUERIES } from "../../utils/endpoints";
import { fetchAllGenres } from "../../services/GenreService";
import TransparentHeader from "../TransparentHeader";
import ScrollingHeader from "../ScrollingHeader";
import { useLocation } from "react-router-dom";

function Header(props) {
  const { data: allGenres, isLoading: allGenresLoading } = useQuery(
    ALL_QUERIES.QUERY_ALL_GENRES(),
    fetchAllGenres
  );
  const transparentHeaderRef = useRef();
  const scrollingHeaderRef = useRef();
  const spacerRef = useRef();

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    console.log(pathname)
    transparentHeaderRef.current.classList.add('transition-0');
    scrollingHeaderRef.current.classList.add("transition-0");
    if (pathname === '/') {
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
      }, 100)

      document.addEventListener("scroll", onScroll);

      if (window.scrollY <= 100) {
        if (transparentHeaderRef.current) {
          transparentHeaderRef.current.classList.add("scroll-down");
          transparentHeaderRef.current.classList.remove("scroll-up");
        }
  
        if (scrollingHeaderRef.current) {
          scrollingHeaderRef.current.classList.add("scroll-up");
          scrollingHeaderRef.current.classList.remove("scroll-down");
        }
        setTimeout(() => {
          transparentHeaderRef.current.classList.remove('transition-0');
          scrollingHeaderRef.current.classList.remove("transition-0");
        }, 100);
      }
  
      return () => {
        document.removeEventListener("scroll", onScroll);
      };
    } else {
      if (transparentHeaderRef.current) {
        transparentHeaderRef.current.classList.remove("scroll-down");
        transparentHeaderRef.current.classList.add("scroll-up");
      }

      if (scrollingHeaderRef.current) {
        scrollingHeaderRef.current.classList.remove("scroll-up");
        scrollingHeaderRef.current.classList.add("scroll-down");
      }
      setTimeout(() => {
        transparentHeaderRef.current.classList.remove('transition-0');
        scrollingHeaderRef.current.classList.remove("transition-0");
      }, 100);
    }
  }, [pathname]);

  const renderScrollingHeader = () => {
    // const restrictedPaths = ["/event-detail"];
    const restrictedPaths = [];
    let isAllowed = true;
    restrictedPaths.forEach((path) => {
      isAllowed = pathname.startsWith(path) ? false : true;
    });
    return isAllowed;
  };

  return (
    <div className="app-header">
      <TransparentHeader
        setMenuMask={props.setMenuMask}
        ref={transparentHeaderRef}
        genres={allGenres?.data?.data}
      />
      {renderScrollingHeader() && (
        <ScrollingHeader
          setMenuMask={props.setMenuMask}
          ref={scrollingHeaderRef}
          genres={allGenres?.data?.data}
        />
      )}
      <div ref={spacerRef} className="spacer" />
    </div>
  );
}

export default Header;
