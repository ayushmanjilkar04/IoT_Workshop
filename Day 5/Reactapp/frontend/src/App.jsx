import React from "react";
import Navbar from "./Components/Navbar";
import Example from "./Components/Example";
import Api from "./Components/Api";

const App = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl text-red-600 ml-2.5">React Application</h1>
      <Example />
      <Api />
    </>
  );
};

export default App;
