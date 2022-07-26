import { useEffect } from "react";

const useBackgroundVideo = () => {
  useEffect(() => {
    document.querySelector("video.backgroundVideo").style.display = "block";

    return () => {
      document.querySelector("video.backgroundVideo").style.display = "none";
    };
  }, []);
};

export { useBackgroundVideo };
