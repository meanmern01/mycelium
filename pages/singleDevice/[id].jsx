import { useRouter } from "next/router";
import React from "react";
import HomepageFooter from "../../component/Footer";

import NavigationBar from "../../component/Navbar";
import SingleProdcutContainer from "../../component/SignleProductContainer";
const SingleProduct = () => {
  const router = useRouter();
  console.log(router.query.id, "Hey");
  return (
    <div style={{ height: "-webkit-fill-available" }}>
      <NavigationBar />
      <SingleProdcutContainer />
      <HomepageFooter />
    </div>
  );
};

export default SingleProduct;
