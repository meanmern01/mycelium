import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import HomepageFooter from "../component/Footer";

import NavigationBar from "../component/Navbar";
import SingleProdcutContainer from "../component/SignleProductContainer";

const SingleProduct = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    details();
  }, []);

  const details = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("hello", window.location.pathname);
      if (window.location.pathname.split("/")[1]) {
        var id = window.location.pathname
          .split("/")[1]
          .replace(/(afafaf)/g, "/");

        var bytes = CryptoJS.AES.decrypt(id.toString(), "123");
        var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        const detail = await axios.get(
          `http://54.174.180.252:8000/searchDataById/${decryptedData}`
        );
        console.log(detail, "Heu");
        setData(detail.data.Data);
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  if (error) {
    return <h1>{error}</h1>;
  }
  if (loading) {
    return <h4>Loading...</h4>;
  }
  return (
    <div style={{ height: "-webkit-fill-available" }}>
      {console.log(data)}
      <NavigationBar />
      {data && <SingleProdcutContainer productData={data} />}
      <HomepageFooter />
    </div>
  );
};

export default SingleProduct;
