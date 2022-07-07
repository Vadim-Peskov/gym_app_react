import { useState, useLayoutEffect } from "react";
import { c } from "../components/styles"; 

const queries = [
  c.media_mobile,
  c.media_tablet,
  c.media_desctop,
];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map(i => matchMedia(i));
  const getValues = () => mediaQueryLists.map(i => i.matches);
  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);
    mediaQueryLists.forEach(i => i.addEventListener('change', handler));
    
    return () => mediaQueryLists.forEach(i => i.removeEventListener('change', handler));
  }, []);

  return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, i, ind) => (
    {...acc, [i]: values[ind]}
  ), {})
};