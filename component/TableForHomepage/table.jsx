// import Image from "next/image";
import { Container, Image, NavItem } from "react-bootstrap";
import Link from "next/link";
import React, { useState } from "react";
import { Table } from "react-bootstrap";

const DeviceTable = (props) => {
  const [value, setValue] = useState(-30);
  // const [tabdata,setTabdata] = useState({})

  return (
    <Table id="deviceTable" variant="light" hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>kg CO2e / £</th>
          <th>Carbon Accountant</th>
          <th>vs Baseline</th>
          <th>Confidence</th>
        </tr>
      </thead>
      <tbody>
        {
          props.value.map((item, i) =>

            <tr>
              <td style={{ color: "#896EB5" }}>{item.rank}</td>

              <td>
                <div className="img_heading">
                  <Image src={item.company_logo} width={30} height={30} />
                  <p
                    style={{
                      color: "black",
                      marginBottom: "0px",
                      fontWeight: "bold",
                      textDecoration: null,
                    }}
                    onClick={() => localStorage.setItem("Item", JSON.stringify(item))}
                  >
                    <Link className="menuLink" href="singleDevice/Mark">
                      {item.company_name}
                    </Link>
                  </p>
                </div>
              </td>

              <td>{item.kg_co2e}</td>
              <td><Image src={item.company_logo} width={150} height={50} /></td>
              <td
                style={{
                  color: value < -10 ? "#6EB575" : "#C0D372",
                  fontWeight: 600,
                }}
              >
                {item.exiobase}% CO2e
              </td>
              <td
                style={{
                  color: value < -10 ? "#6EB575" : "#C0D372",
                  fontWeight: 600,
                }}
              >
                {item.confidence_score}%
              </td>
            </tr>
          )
        }
        {/* <tr>
          <td style={{ color: " #896EB5" }}>2</td>
          <td>
            <div className="img_heading">
              <Image src="/grizzle square logo 1.png" width={22} height={22} />
              <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Mark</p>
            </div>
          </td>
          <td>0.0688</td>
          <td>unknown</td>
          <td>-30% CO2e</td>
          <td>75%</td>
        </tr>
        <tr>
          <td style={{ color: " #896EB5" }}>3</td>
          <td>
            <div className="img_heading">
              <Image src="/grizzle square logo 1.png" width={22} height={22} />
              <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Mark</p>
            </div>
          </td>
          <td>0.0688</td>
          <td>unknown</td>
          <td>-30% CO2e</td>
          <td>75%</td>
        </tr>
        <tr>
          <td style={{ color: " #896EB5" }}>4</td>
          <td>
            <div className="img_heading">
              <Image src="/grizzle square logo 1.png" width={22} height={22} />
              <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Mark</p>
            </div>
          </td>
          <td>0.0688</td>
          <td>unknown</td>
          <td>-30% CO2e</td>
          <td>75%</td>
        </tr>
        <tr>
          <td style={{ color: " #896EB5" }}>5</td>
          <td>
            <div className="img_heading">
              <Image src="/grizzle square logo 1.png" width={22} height={22} />
              <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Mark</p>
            </div>
          </td>
          <td>0.0688</td>
          <td>unknown</td>
          <td>-30% CO2e</td>
          <td>75%</td>
        </tr>
        <tr>
          <td style={{ color: " #896EB5" }}>6</td>
          <td>
            <div className="img_heading">
              <Image src="/grizzle square logo 1.png" width={22} height={22} />
              <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Mark</p>
            </div>
          </td>
          <td>0.0688</td>
          <td>unknown</td>
          <td>-30% CO2e</td>
          <td>75%</td>
        </tr> */}
      </tbody>
    </Table>
  );
};

export default DeviceTable;
