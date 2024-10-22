import { useEffect, useState } from "react";
import React from "react";
import img1 from "../src/rocket.jpeg";

const Rocket = () => {
  const [position, setPosition] = useState(0);
  const [flying, setFlying] = useState(false);

  // console.log(start);

  const launch = () => {
    setFlying(true);
  };

  useEffect(() => {
    let up;
    // event.preventDefault();
    if (flying) {
      up = setInterval(() => {
        setPosition((prevPosition) => {
          if (prevPosition >= 400) {
            clearInterval(up);
            setFlying(false);
            prevPosition = 0;
          }
          return prevPosition + 5;
        });
      }, 10);
    }
    return () => clearInterval(up);
  }, [flying]);

  return (
    <div>
      <button onClick={launch}> Start </button>
      <img
        src={img1}
        alt="#"
        width={"100px"}
        height={"100px"}
        style={{
          position: "absolute",
          bottom: position,
        }}
      />
    </div>
  );
};

export default Rocket;
