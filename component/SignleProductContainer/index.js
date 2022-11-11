import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { Component, useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import DeviceTable from "../TableForHomepage/table";
// import Test from "../../public/Frame.png"
import TabPanelBody from "../TabPanelBody";
import axios from "axios";

const HeaderOfSingleProduct = (props) => {
  return (
    <>
      <Container>
        <div className="singleHeaderContainer">
          <div className="first_singleHeaderContainer">
            {" "}
            {/* <Image src={props.value.company_logo} width={82} height={82} /> */}
            <Image src='../grizzle square logo 1.png' width={82} height={82} />
          </div>
          <div className="second_singleHeaderContainer">
            <div className="rankedContianer">
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  color: "#896EB5",
                  marginBottom: 0,
                }}
              >
                Sector
              </p>
              <p style={{ fontSize: 14, fontWeight: 400, marginBottom: 0 }}>
                {props.value.Sectors}
              </p>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  color: "#896EB5",
                  marginBottom: 0,
                }}
              >
                Ranked :{" "}
                <span
                  style={{ fontSize: 14, fontWeight: 400, marginBottom: 0 }}
                >
                  {props.value.id}
                </span>
              </p>
            </div>
            <div className="companyNameHolder">
              <h1>{props.value.organization_name}</h1>
            </div>
            <div className="companyDescription">
              <p>{props.value.company_description}</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const TabPanelSingleDevice = (prop) => {
  const [value, setValue] = useState(0);
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabPanelSingleDevice">
      <Container>
        <Box
          sx={{
            width: "80%",
            // border: "1px solid white",
            backgroundColor: "white",
            boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="2021" {...a11yProps(0)} />
              <Tab label="2022" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TabPanelBody data={prop.value} companyName={"2021"} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TabPanelBody data={prop.value} companyName={"2022"} />
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
};
const SingleProdcutContainer = ({ value }) => {
  console.log(value, 'aaaaaaaaaaaaaa');
  // const router = useRouter();
  // console.log(queryId, "Hey");
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   localStorage.setItem("queryId", router.query.id);
  //   setTimeout(() => {
  //     details();
  //   }, 1000);
  // }, []);

  // const details = async () => {
  //   console.log(localStorage.getItem("queryId"));
  //   const detail = await axios.get(
  //     `http://54.174.180.252:8000/searchDataById/${queryId}}`
  //   );
  //   detail.data.Data.map((item, i) => setData(item));
  // };

  return (
    <div className="singleProdcutContainer">
      <HeaderOfSingleProduct value={value} />
      <TabPanelSingleDevice value={value} />
    </div>
  );
};

export default SingleProdcutContainer;
