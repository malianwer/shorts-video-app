import React, { useRef } from "react";
import ShortVideos from "./ShortVideos";
import data from "../common/data.json";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function ShortContainer() {
  const shortContainerRef = useRef();

  return (
    <>
      <section ref={shortContainerRef} className="short-container">
        {data.map((short) => (
          <ShortVideos
            key={short.id}
            shortContainerRef={shortContainerRef}
            short={short}
          />
        ))}
      </section>

      <div className="navigation-container">
        <div
          onClick={() => {
            shortContainerRef.current.scrollTo(
              0,
              shortContainerRef.current.scrollTop - window.innerHeight
            );
          }}
          className="nav-up"
        >
          <FaArrowUp color="white" />
        </div>
        <div
          onClick={() => {
            shortContainerRef.current.scrollTo(
              0,
              shortContainerRef.current.scrollTop + window.innerHeight
            );
          }}
          className="nav-down"
        >
          <FaArrowDown color="white" />
        </div>
      </div>
    </>
  );
}

export default ShortContainer;
