import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { Component, useState } from "react";
import { Container, Image } from "react-bootstrap";
import DeviceTable from "../TableForHomepage/table";
// import Test from "../../public/Frame.png"
import TabPanelBody from "../TabPanelBody";
const HeaderOfSingleProduct = () => {
  return (
    <>
      <Container>
        <div className="singleHeaderContainer">
          <div className="first_singleHeaderContainer">
            {" "}
            <Image src="/grizzle square logo 2.png" width={82} height={82} />
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
                Animation
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
                  1
                </span>
              </p>
            </div>
            <div className="companyNameHolder">
              <h1>Grizzle Ltd</h1>
            </div>
            <div className="companyDescription">
              <p>
                We’re an independent animation and motion design studio based in
                London & Sheffield
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const TabPanelSingleDevice = () => {
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
            boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)"
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
            <TabPanelBody companyName={"2021"} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TabPanelBody companyName={"2022"} />
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
};
const SingleProdcutContainer = () => {
  return (
    <div className="singleProdcutContainer">
      <HeaderOfSingleProduct />
      <TabPanelSingleDevice />
    </div>
  );
};

export default SingleProdcutContainer;
