import React, { Fragment } from "react";
import Navbar from "Components/Navbar";
import Todos from "Components/Todos";

function Home() {
  return (
    <Fragment>
      <Navbar />
      <Todos />
    </Fragment>
  );
}

export default Home;
