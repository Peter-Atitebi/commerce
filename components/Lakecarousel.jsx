import React from "react";
import { Carousel } from "flowbite-react";

const Lakecarousel = () => {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96" id="lake-carousel">
        <Carousel pauseOnHover>
          <img src="jumiaimg\laketek\best-deals.png" alt="..." />
          <img src="jumiaimg\laketek\books.png" alt="..." />
          <img src="jumiaimg\laketek\finance.png" alt="..." />
          <img src="jumiaimg\laketek\healthcare.png" alt="..." />
          <img src="jumiaimg\laketek\programming-services.png" alt="..." />
          <img src="jumiaimg\laketek\travel.png" alt="..." />
        </Carousel>
      </div>
    </>
  );
};

export default Lakecarousel;
