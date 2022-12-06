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
  // console.log(router);
  useEffect(() => {
    details();
  }, []);

  const details = async () => {
    try {
      setLoading(true);
      setError(null);
      if (router.query.id) {
        var id = router.query.id.replace("afafaf", "/");
        var bytes = CryptoJS.AES.decrypt(id, "secret-id");
        var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        console.log(decryptedData, "decryptedData");
        const detail = await axios.get(
          `http://54.174.180.252:8000/searchDataById/${decryptedData}`
        );
        setData(detail.data.Data);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
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
      <NavigationBar />
      {data && <SingleProdcutContainer productData={data} />}
      <HomepageFooter />
    </div>
  );
};

export default SingleProduct;
