import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <Header />
      <Home />
    </DataProvider>
  );
};

export default App;
