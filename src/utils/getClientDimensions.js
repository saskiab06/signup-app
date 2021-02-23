import { useState, useEffect } from "react";

/* This function gets the height and width of the html document 
 that are used to make the front page background somewhat responsive on mobile devices. */
function getClientDimensions() {
  const el = document.querySelector("html");
  const height = el.clientHeight;
  const width = el.clientWidth;
  return {
    width,
    height,
  };
}

// Component for a useEffect hook is needed for Safari preview resize to work properly
const useClientDimensions = () => {
  const [clientDimensions, setClientDimensions] = useState(
    getClientDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setClientDimensions(getClientDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return clientDimensions;
};

export default useClientDimensions;
