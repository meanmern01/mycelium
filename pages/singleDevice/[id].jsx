import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import HomepageFooter from "../../component/Footer";

import NavigationBar from "../../component/Navbar";
import SingleProdcutContainer from "../../component/SignleProductContainer";

const SingleProduct = () => {
  const router = useRouter();
  const [data, setData] = useState({});

  useEffect(() => {
    details();
  }, []);

  const details = async () => {
    const text = window.location.pathname.split("/")

    // console.log(text[text.length - 1], "router");
    const detail = await axios.get(`http://54.174.180.252:8000/searchDataById/${text[text.length - 1]}`)
    console.log(detail, "---details")
    setData(detail.data.Data);
  };

  return (
    <div style={{ height: "-webkit-fill-available" }}>
      <NavigationBar />
      {data && <SingleProdcutContainer productData={data} />}
      <HomepageFooter />
    </div>
  );
};

export default SingleProduct;

