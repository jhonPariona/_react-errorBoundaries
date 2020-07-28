import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  if (counter === 3) {
    throw new Error("Opss ocurrio un error!");
  }

  return (
    <div
      style={{
        border: "1px solid black",
        marginBottom: "1.5em",
        padding: "0.5rem",
        maxWidth: "15rem",
      }}
    >
      <p>{counter}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Counter;
