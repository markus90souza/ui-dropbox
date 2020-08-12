import React from "react";

import Boot from "./assets/css/Boot";
import Section from "./Components/Section";

import data from "./Data";
import Sidenav from "./Components/Sidenav";
import Register from "./Pages/Register";

const App: React.FC = () => {
  return (
    <>
      <Boot />
      <Section
        backgroudColor={"blue"}
        title={data[0].title}
        description={data[0].description}
      />

      <Section
        backgroudColor={"dark"}
        title={data[3].title}
        description={data[3].description}
      />

      <Section
        backgroudColor={"white"}
        title={data[1].title}
        description={data[1].description}
      />

      <Section
        backgroudColor={"bege"}
        title={data[2].title}
        description={data[2].description}
      />

      <Sidenav>
        <Register />
      </Sidenav>
    </>
  );
};

export default App;
