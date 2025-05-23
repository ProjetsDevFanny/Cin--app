import React from "react";
import Movies from "../components/Movies";
import Navigation from "../components/Navigation";
import TittleHome from "../components/TittleHome";
import Form from "../components/Form";

const home = () => {
  return (
    <div>
      <Navigation />
      <TittleHome />
      <Form />
      <Movies />
    </div>
  );
};

export default home;
