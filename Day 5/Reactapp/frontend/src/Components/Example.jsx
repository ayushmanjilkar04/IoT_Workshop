import React, { useState } from "react";

const Example = () => {
  // const [state, setState] = useState(state);
  const [counter, setCounter] = useState(0);

  const Increament = () => {
    setCounter(counter + 1);
  };

  const Decreament = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="items-center justify-center m-auto h-auto p-2.5 w-max bg-gray-200 rounded ">
        <h1>Use State Example</h1>
        <h1>Counter: {counter}</h1>
        <button
          className="h-16 w-24 bg-green-600 text-white rounded m-1.5"
          onClick={Increament}
        >
          Increament
        </button>
        <button
          className="h-16 w-24 bg-red-600 text-white rounded m-1.5"
          onClick={Decreament}
        >
          Decreament
        </button>
      </div>
    </>
  );
};

export default Example;
