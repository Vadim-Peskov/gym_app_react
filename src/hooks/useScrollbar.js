import { useEffect } from "react";
import OverlayScrollbars from "overlayscrollbars";

export const useScrollbar = (root, hasScroll) => {
  useEffect(() => {
    let instance;

    if (root.current && hasScroll) {
      instance = OverlayScrollbars(root.current, {});
    }

    return () => {
      if (instance) instance.destroy();
    }
  }, [root, hasScroll]);
}