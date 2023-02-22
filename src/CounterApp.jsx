import React, { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  //Hook
  const [counter, setCounter] = useState(value);

  const masUno = () => setCounter(counter + 1);
  const menosUno = () => setCounter(counter - 1);
  const reset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={masUno}>+1</button>
      <button onClick={menosUno}>-1</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

CounterApp.defaultProps = {
  values: "Sin valor",
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};