import { useEffect } from "react";

// Adapted from
// https://upmostly.com/tutorials/build-an-infinite-scroll-component-in-react-using-react-hooks
export default function useScrollBottom(onScrollBottom) {
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        onScrollBottom();
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScrollBottom]);
}
