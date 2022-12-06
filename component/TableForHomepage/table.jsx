import { Image } from "react-bootstrap";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import CryptoJS from "crypto-js";

const DeviceTable = (props) => {
  const [value, setValue] = useState(-30);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setpageCount] = useState();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }
  const size = useWindowSize();

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const encryptId = (id) => {
    return CryptoJS.AES.encrypt(JSON.stringify(id), "123")
      .toString()
      .replace(/\//g, "afafaf");
  };
  const id1 = 1;
  var ciphertext = CryptoJS.AES.encrypt(
    id1.toString(),
    "secret key 123"
  ).toString();
  var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
  var originalText = bytes.toString(CryptoJS.enc.Utf8);

  useEffect(() => {
    const offset = currentPage * props.rows;
    const currentPageData = props.alldata.slice(offset, offset + props.rows);

    setFilteredData(currentPageData);
    setpageCount(Math.ceil(props.alldata.length / props.rows));
  }, [props.flag, props.alldata, currentPage, props.rows]);

  return (
    <Table id="deviceTable" variant="light" hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th style={{ textAlign: "left" }}>Name</th>
          <th>kg CO2e / £</th>
          {size.width > 600 && <th> Carbon Accountant</th>}
          <th>vs Baseline</th>
          <th>Confidence</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, i) => (
          <tr key={i}>
            <td style={{ color: "#896EB5" }}>
              {item.rank_number ? item.rank_number : "N/A"}
            </td>

            <td style={{ textAlign: "left", paddingLeft: "10px" }}>
              <div className="img_heading">
                {item.company_logo && (
                  <Image className="cls_img_heading" src={item.company_logo} />
                )}
                <p
                  style={{
                    color: "black",
                    marginBottom: "0px",
                    fontWeight: "bold",
                    textDecoration: null,
                  }}
                >
                  <Link className="menuLink" href={`/${encryptId(item.id)}`}>
                    {item.name ? item.name : "N/A"}
                  </Link>
                </p>
              </div>
            </td>
            <td>
              {item.years[0] ? item.years[0].intensity_per_revenue : "N/A"}
            </td>
            {size.width > 600 && (
              <td className="carbon_img ">
                {item.years[0]?.carbon_accountant ? (
                  <Image
                    className="cls_img_carbon"
                    src={item.years[0].carbon_accountant}
                  />
                ) : (
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
                )}
              </td>
            )}
            <td
              style={{
                color: value < -10 ? "#6EB575" : "#C0D372",
                fontWeight: 600,
              }}
            >
              {item?.years[0]?.exiobase
                ? item.years[0].exiobase + "% CO2e"
                : "N/A"}
            </td>
            <td
              style={{
                color: value < -10 ? "#6EB575" : "#C0D372",
                fontWeight: 600,
              }}
            >
              {item.years[0]?.confidence_score
                ? item.years[0]?.confidence_score + "%"
                : "N/A"}
            </td>
            <td>
              {" "}
              <Image src="../arrow.png" height={15} />{" "}
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={7}>
            {props.rows >= 0 && (
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
              />
            )}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DeviceTable;
