import React from "react";
import TuitsList from "./tuit-summary-list";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
 return(
   <>
     <h4>Home</h4>
     <WhatsHappening/>
     <TuitsList/>
   </>
 );
};
export default HomeScreen;