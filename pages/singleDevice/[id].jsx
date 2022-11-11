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
    // localStorage.setItem("queryId", router.query.id);
    // setTimeout(() => {
    details();
    // }, 1000);
  }, []);

  const details = async () => {
    // console.log(localStorage.getItem("queryId"));
    const detail = await axios.get(
      `http://54.174.180.252:8000/searchDataById/${router.query.id}}`
    );
    detail.data.Data.map((item, i) => setData(item));
  };

  return (
    <div style={{ height: "-webkit-fill-available" }}>
      <NavigationBar />
      {data && <SingleProdcutContainer value={data} />}
      <HomepageFooter />
    </div>
  );
};

export default SingleProduct;