import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import DeviceTable from "../TableForHomepage/table";
import axios from "axios";
const HomePageBody = () => {
  const [searchCompany, setSearchCompany] = useState("");
  const [pagination, setPagination] = useState([]);
  const [data, setData] = useState([]);
  const [showdata, setShowdata] = useState([]);

  const showData = (num) => {
    setShowdata(data.slice(0, num))
  }

  const search = async (e) => {
    let items = [];
    setSearchCompany(e.target.value);
    await axios
      .get(`http://54.174.180.252:8000/searchData/${e.target.value}`)
      .then((td) => {
        console.log(td.data.Data);
        setData(td.data.Data);
        // setShowdata(td.data.Data)
        showData(td.data.Data.length)
        for (let number = 5; number <= td.data.Data.length; number = number + 5) { items.push(number); }
        setPagination(items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="contentHolder">
        <div className="Header mt-5">
          <Container id="headerComponentHolder">
            <h1 style={{ fontWeight: "bold", marginBottom: 1 }}>
              Worldwide carbon emissions database
            </h1>
            <p>13,000 submissions and counting. Open source, free to all.</p>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="&#xF002; search users"
                className="me-2"
                aria-label="Search"
                onChange={search}
              />
            </Form>
            <div className="searchResultHolder">
              <p>
                Showing{" "}
                <span style={{ color: "#896EB5", fontWeight: 600 }}>
                  {data?.length}
                </span>{" "}
                Mycelium results for{" "}
                <span style={{ color: "#896EB5", fontWeight: 600 }}>
                  ‘{searchCompany}’
                </span>{" "}
              </p>
              <p
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
            </div>
          </Container>
        </div>
        <div className="tableBody">
          <Container>
            <DeviceTable value={showdata.length > 0 ? showdata : data} />
          </Container>
          <Container>
            <div className="tableCaption">
              <p >
                Results per page :
                {pagination.map((data) => {
                  return (
                    <span
                      onClick={() => {
                        showData(data);
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
                })}{" "}
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
