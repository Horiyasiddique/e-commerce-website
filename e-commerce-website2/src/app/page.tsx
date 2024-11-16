import React from "react";

import Cake from "./(shop)/Cake/page";
import About from "./(shop)/About/page";
import Contact from "./(shop)/Contact/page";
function page() {
  return (
    <div>
      <About />
      <Cake />
      <Contact/>
    </div>
  );
}

export default page;
