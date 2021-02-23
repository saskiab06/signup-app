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

export default getClientDimensions;
