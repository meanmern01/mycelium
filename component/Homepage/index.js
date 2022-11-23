import React, { useEffect, useState } from "react";
import {  Container, Form } from "react-bootstrap";
import DeviceTable from "../TableForHomepage/table";
import axios from "axios";


const 
HomePageBody = () => {
  const [searchCompany, setSearchCompany] = useState("");
  const [pagination, setPagination] = useState([]);
  const [data, setData] = useState([]);
  const [showdata, setShowdata] = useState([]);
  const [rows, setRows] = useState(5)
  const [flag, setFlag] = useState(false)
  const showData = (num) => {

    setShowdata(data.slice(0, num))
  }

  useEffect(() => {
   
    const api = searchCompany !== '' ? `http://54.174.180.252:8000/searchData/${searchCompany}` : 'http://54.174.180.252:8000/getAllYearData'
    displayAllData(api)
  }, [searchCompany])
  const displayAllData = async (api) => {
    let items = [5];
    await axios
      .get(api)
      .then((td) => {
        setData(td.data.Data);
        setFlag(!flag)
        let number = 5
        do {
          number += 5
          items.push(number)
        } while (number <= td.data.Data.length);
        setPagination([5, 10, 15, 20, 25])
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const dataFilter = () => {
    setData(data.sort((a, b) => b.years[0]?.confidence_score - a.years[0]?.confidence_score))
    setFlag(!flag)
    showData(5)
  }

  return (
    <>
      <div className="contentHolder">
        <div className="Header mt-5">
          <Container id="headerComponentHolder">
            <h1 style={{ fontWeight: "bold", marginBottom: 1 }}>
              Worldwide carbon emissions database
            </h1>
            <p>13,000 submissions and counting. Open source, free to all.</p>

            <p className="mobile_show">
              Showing{" "}
              <span style={{ color: "#896EB5", fontWeight: 600 }}>
                {data?.length}
              </span>{" "}
              Mycelium results for{" "}
              <span style={{ color: "#896EB5", fontWeight: 600 }}>
                {searchCompany}
              </span>{" "}
            </p>

            <p className="filter mobile_show_1"
              style={{ textDecoration: "underline", letterSpacing: "0.5px" }}
            >
              Filter :{" "}
              <span
                style={{
                  color: "#896EB5",
                  fontWeight: 600,
                }}
              >
                {" "}
                Highest to lowest score{" "}
              </span>{" "}
            </p>

            <div className="searchResultHolder">
              <p>
                Showing{" "}
                <span style={{ color: "#896EB5", fontWeight: 600 }}>
                  {data?.length}
                </span>{" "}
                Mycelium results
                {searchCompany && 
                 <span>{" "}for{" "}
                <span style={{ color: "#896EB5", fontWeight: 600 }}>
                  ‘{searchCompany}’
                </span>{" "}
                 </span>
                }
              </p>

              <p className="filter"
                style={{ textDecoration: "underline", letterSpacing: "0.5px" }}
              >
                Filter :{" "}
                <span
                  style={{
                    color: "#896EB5",
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                  onClick={dataFilter}
                >
                  {" "}
                  Highest to lowest score{" "}
                </span>{" "}
              </p>
            </div>
            <Form className="d-flex custom_form">
              <Form.Control
                type="search"
                placeholder="&#xF002; search users"
                className="me-2"
                aria-label="Search"
                onChange={(e) => {
                  setSearchCompany(e.target.value)
                }}
              />
            </Form>
          </Container>
        </div>
        <div className="tableBody">
          <Container>
            <DeviceTable alldata={data} rows={rows} value={showdata.length > 0 ? showdata : data.slice(0, 5)} flag={flag}/>
          </Container>

          <Container>
            <div className="tableCaption">
              <p >
                Results per page :
                {data.length > 0 ? pagination.map((data, index) => {
                  return (
                    <span
                      key={index}
                      onClick={() => {
                        showData(data);
                        setRows(data);
                      }}
                      style={{
                        color: "#896EB5",
                        paddingLeft: "5px",
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      {data}
                    </span>
                  );
                })
                  :
                  <span
                    style={{
                      color: "#896EB5",
                      paddingLeft: "5px",
                      fontWeight: 600,
                    }}
                  >0 </span>
                }
              </p>
              <p style={{ color: "#896EB5" }}>
                Showing results in:{" "}
                <span
                  style={{
                    paddingRight: "5px",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  {" "}
                  GBP (£)
                </span>
              </p>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HomePageBody;
