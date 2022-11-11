import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { Component, useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import DeviceTable from "../TableForHomepage/table";
// import Test from "../../public/Frame.png"
import TabPanelBody from "../TabPanelBody";
import axios from "axios";

const HeaderOfSingleProduct = ({ productHeaderData }) => {
  console.log(productHeaderData, "Hey");
  return (
    <>
      <Container>
        <div className="singleHeaderContainer">
          <div className="first_singleHeaderContainer">
            {" "}
            <Image src={productHeaderData.company_logo} width={82} height={82} />
            {/* <Image src='../grizzle square logo 1.png' width={82} height={82} /> */}
          </div>
          <div className="second_singleHeaderContainer">
            <div className="rankedContianer">
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#896EB5",
                  marginBottom: 0,
                }}
              >
                Sector
              </p>
              <p style={{ fontSize: 14, fontWeight: 400, margin: "0 8px" }}>
                {/* {props.value.Sectors} */}Sector
              </p>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#896EB5",
                  marginBottom: 0,
                }}
              >
                Ranked :{" "}
                <span
                  style={{ fontSize: 14, fontWeight: 400, margin: "0 8px", color: 'black' }}
                >
                  {productHeaderData.id}
                </span>
              </p>
            </div>
            <div className="companyNameHolder">
              <h1>{productHeaderData.name}</h1>
            </div>
            <div className="companyDescription">
              <p>{productHeaderData.description}</p>
              {/* <p>We’re an independent animation and motion design studio based in London & Sheffield</p> */}
            </div>
          </div>
        </div>
      </Container>
    </>

  )
};

const TabPanelSingleDevice = ({ productHeaderData }) => {
  console.log(productHeaderData, "ghghg")
  const [value, setValue] = useState(0);
  function TabPanel(props) {
    const { children, index, ...other } = props;
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
              {productHeaderData?.years?.map((data, index) => {
                return (

                  <Tab label={data.year} {...a11yProps(index)} />
                )
              })}
              {/* <Tab label="2022" {...a11yProps(1)} /> */}
            </Tabs>
          </Box>
          {productHeaderData?.years?.map((data, index) => {
            return (
              <TabPanel value={value} index={index}>
                <TabPanelBody singleDevice={data} companyName={"2021"} />
              </TabPanel>
            )
          })}
          {/* //       <TabPanel value={value} index={1}>
  //         <TabPanelBody data={prop.value} companyName={"2022"} />
  //       </TabPanel> */}
        </Box>
      </Container>
    </div>
    // <h1>Disha</h1>
  );
};
const SingleProdcutContainer = ({ productData }) => {

  return (
    <div className="singleProdcutContainer">
      <HeaderOfSingleProduct productHeaderData={productData} />
      <TabPanelSingleDevice productHeaderData={productData} />
    </div>
  );
};

export default SingleProdcutContainer;
