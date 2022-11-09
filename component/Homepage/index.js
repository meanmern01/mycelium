import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import DeviceTable from "../TableForHomepage/table";
import axios from "axios";

const HomePageBody = () => {
  const [searchCompany, setSearchCompany] = useState("");
  const [pagination, setPagination] = useState([]);
  const [data, setData] = useState([]);
  console.log(data.length, "Length");

  const search = async (e) => {
    const paginationArray = [];
    setSearchCompany(e.target.value);
    await axios
      .get(`http://54.174.180.252:8000/searchData/${e.target.value}`)
      .then((td) => {
        // console.log(td);
        setData(td.data.Data);
        data.length >= 5 && paginationArray.push(Math.ceil(data.length / 5));
        setPagination(paginationArray);
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
            <DeviceTable value={data} />
          </Container>
          <Container>
            <div className="tableCaption">
              <p>
                Results per page :{" "}
                {pagination.map((data) => {
                  return (
                    <span
                      onClick={() => {
                        alert(`You had click on the ${data}`);
                      }}
                      style={{
                        color: "#896EB5",
                        paddingRight: "5px",
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
