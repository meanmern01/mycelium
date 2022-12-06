import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import TabPanelBody from "../TabPanelBody";

const HeaderOfSingleProduct = ({ productHeaderData }) => {
  return (
    <>
      <Container>
        <div className="singleHeaderContainer">
          <div className="first_singleHeaderContainer">
            {" "}
            <Image
              src={productHeaderData?.company_logo}
              width={82}
              height={82}
            />
          </div>
          <div className="second_singleHeaderContainer">
            <div className="rankedContianer">
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#896EB5",
                  marginBottom: 0,
                }}
              >
                Sector
              </p>
              <p style={{ fontSize: 14, fontWeight: 400, margin: "0 8px" }}>
                {productHeaderData?.years[0]?.sector_name
                  ? productHeaderData?.years[0].sector_name
                  : "N/A"}
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#896EB5",
                  marginBottom: 0,
                }}
              >
                Ranked :{" "}
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    margin: "0 8px",
                    color: "black",
                  }}
                >
                  {productHeaderData?.id ? productHeaderData?.id : "N/A"}
                </span>
              </p>
            </div>
            <div className="companyNameHolder">
              <h1>
                {productHeaderData?.name ? productHeaderData?.name : "N/A"}
              </h1>
            </div>
            <div className="companyDescription">
              <p>
                {productHeaderData?.description
                  ? productHeaderData?.description
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const TabPanelSingleDevice = ({ productHeaderData }) => {
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
            backgroundColor: "white",
            boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
          }}
        >
          {productHeaderData?.years.length ? (
            <>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  {productHeaderData?.years?.map((data, index) => {
                    return <Tab label={data.year} {...a11yProps(index)} />;
                  })}
                </Tabs>
              </Box>
              {productHeaderData?.years?.map((data, index) => {
                return (
                  <TabPanel value={value} index={index}>
                    <TabPanelBody
                      singleDevice={productHeaderData}
                      companyName={index}
                    />
                  </TabPanel>
                );
              })}
            </>
          ) : (
            <p style={{ textAlign: "center", padding: 10, fontWeight: "bold" }}>
              N/A
            </p>
          )}
        </Box>
      </Container>
    </div>
  );
};
const SingleProdcutContainer = ({ productData }) => {
  return (
    <div className="singleProdcutContainer">
      {productData && (
        <>
          <HeaderOfSingleProduct productHeaderData={productData[0]} />
          {productData[0]?.years.length > 0 ? (
            <TabPanelSingleDevice productHeaderData={productData[0]} />
          ) : (
            <p style={{ fontWeight: "bold", textAlign: "center" }}>N/A</p>
          )}
        </>
      )}
    </div>
  );
};

export default SingleProdcutContainer;
