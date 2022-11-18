// import Image from "next/image";
import { Container, Image, NavItem } from "react-bootstrap";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Pagination from "../Pagination/Pagination";
import ReactPaginate from "react-paginate";

const DeviceTable = (props) => {
  const [value, setValue] = useState(-30);
  // const [tabdata,setTabdata] = useState({})
  const [newdata, setNewData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [pageCount, setpageCount] = useState();

  useEffect(() => {
    setNewData(props.value)
  }, [props.value])

  // useEffect(() => {
  //   console.log(rowsperpage);
  //   setData(props.value);}, []);

    function handlePageClick({ selected: selectedPage }) {
      setCurrentPage(selectedPage);
      // console.log(selectedPage);
  }
   useEffect(( ) => {
      const offset = currentPage * props.rows;
      const currentPageData = props.alldata.slice(offset, offset + props.rows)
      // props.getData(currentPageData)
      console.log("currentPageData---",currentPageData);
      setFilteredData(currentPageData);
      console.log(props.rows, "----",props.alldata.length)
      setpageCount(Math.ceil(props.alldata.length / props.rows))
      console.log(props, "--pagecount")
   },[props.alldata,currentPage, props.rows ])
   

  return (

    <Table id="deviceTable" variant="light" hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th style={{ textAlign: 'left' }}>Name</th>
          <th >kg CO2e / £</th>
          <th> Carbon Accountant</th>
          <th>vs Baseline</th>
          <th>Confidence</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, i) => (
          <tr key={i}>
            <td style={{ color: "#896EB5" }}>{item.rank_number}</td>

            <td style={{ textAlign: 'left', paddingLeft: '10px' }}>
              <div className="img_heading">
                <Image
                  src={item.company_logo}
                  // src="../grizzle square logo 1.png"
                  style={{ marginRight: "10px", width: 50, height: 50 }}
                />
                <p
                  style={{
                    color: "black",
                    marginBottom: "0px",
                    fontWeight: "bold",
                    textDecoration: null,
                  }}
                >
                  <Link className="menuLink" href={`singleDevice/${item.id}`}>
                    {item.name}
                  </Link>
                </p>
              </div>
            </td>
            <td>{item.years[0] ? item.years[0].intensity_per_revenue : 'N/A'}</td>
            <td className="carbon_img ">
              {
                item.years[0]?.carbon_accountant ?
                  <Image
                    src={item.years[0].carbon_accountant}
                    style={{ width: 100, height: 50 }}
                  />
                  :
                  <p
                    style={{
                      color: "black",
                      marginBottom: "0px",
                      fontWeight: "bold",
                      textDecoration: null,
                    }}
                  >
                    N/A
                  </p>
              }
            </td>
            <td
              style={{
                color: value < -10 ? "#6EB575" : "#C0D372",
                fontWeight: 600,
              }}
            >
              {item.years[0] ? item.years[0].exiobase + '% CO2e' : 'N/A'}
            </td>
            <td
              style={{
                color: value < -10 ? "#6EB575" : "#C0D372",
                fontWeight: 600,
              }}
            >
              {item.years[0] ? item.years[0]?.confidence_score + '%' : 'N/A'}
            </td>
            <td> <Image src="../arrow.png" height={15} /> </td>
          </tr>
        ))}
        <tr>
          <td colSpan={7} >
          {
                props.rows >= 0 &&
                <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />

            }

            {/* <Pagination flag={props.flag} value={props.alldata} rows={props.rows} setFilteredData={setFilteredData} /> */}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DeviceTable;
