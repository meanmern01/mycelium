import Link from "next/link";
import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../component/Navbar";
import HomePageBody from "../component/Homepage";
import HomepageFooter from "../component/Footer";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(11);
  return (
    <div className="mainHolder">
      {/* -Navigation Bar */}
      <NavigationBar />
      {/* Body */}
      <HomePageBody />
      {/* Footer */}
      <HomepageFooter />
    </div>
  );
};

export default Home;
