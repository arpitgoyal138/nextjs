"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Counter Component");
  return (
    <h1 onClick={() => setCount((count) => count + 1)}>
      Counter Here {count}{" "}
    </h1>
  );
};

export default Counter;
