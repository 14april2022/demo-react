import React, { useEffect } from "react";

function Img() {
  useEffect(() => {
    console.log("Img Component has been mounted");

    return () => {
      console.log("Img Component has been destroy");
    };
  });
  return (
    <>
      <h2>Image Component</h2>
      <img
        src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
        alt=""
        width="300px"
      />
    </>
  );
}

export default Img;
