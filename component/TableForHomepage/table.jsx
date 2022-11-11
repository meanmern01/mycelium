// import Image from "next/image";
import { Container, Image, NavItem } from "react-bootstrap";
import Link from "next/link";
import React, { useState } from "react";
import { Table } from "react-bootstrap";


const DeviceTable = (props) => {
  const [value, setValue] = useState(-30);
  // const [tabdata,setTabdata] = useState({})
  // console.log(props.value);
  return (

    <Table id="deviceTable" variant="light" hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th style={{ textAlign: 'left' }}>Name</th>
          <th>kg CO2e / £</th>
          <th> Carbon Accountant</th>
          <th>vs Baseline</th>
          <th>Confidence</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.value.map((item, i) => (
          <tr>
            <td style={{ color: "#896EB5" }}>{item.id}</td>

            <td style={{ textAlign: 'left', paddingLeft: '10px' }}>
              <div className="img_heading">
                <Image
                  // src={item.company_logo}
                  src="../grizzle square logo 1.png"
                  style={{ marginRight: "10px" }}
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
                    {item.organization_name}
                  </Link>
                </p>
              </div>
            </td>

            {/* <td>{item.kg_co2e}</td> */}
            <td>5.2</td>
            <td className="carbon_img">
              <Image
                // src={item.company_logo}
                src="../grizzle square logo 2.png"
              // style={{ width: 150, height: 50 }}
              />
            </td>
            <td
              style={{
                color: value < -10 ? "#6EB575" : "#C0D372",
                fontWeight: 600,
              }}
            >
              {/* {item.exiobase}% CO2e */}
              30% CO2e
            </td>
            <td
              style={{
                color: value < -10 ? "#6EB575" : "#C0D372",
                fontWeight: 600,
              }}
            >
              {/* {item.confidence_score}% */}
              5%
            </td>
            <td> <Image src="../arrow.png" height={15} /> </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DeviceTable;
