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
          <th style={{ textAlign: 'left' }}>Name</th>
          <th >kg CO2e / £</th>
          <th> Carbon Accountant</th>
          <th>vs Baseline</th>
          <th>Confidence</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.value.map((item, i) => (
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

            {/* <td>{item.kg_co2e}</td> */}
            <td>{item.years[0]?.intensity_per_revenue}</td>
            <td className="carbon_img">
              <Image
                // src={item.company_logo}
                src={item.years[0]?.carbon_accountant}
                style={{ width: 100, height: 50 }}
              />
            </td>
            <td
              style={{
                color: value < -10 ? "#6EB575" : "#C0D372",
                fontWeight: 600,
              }}
            >
              {item.years[0]?.exiobase}% CO2e
              {/* 30% CO2e */}
            </td>
            <td
              style={{
                color: value < -10 ? "#6EB575" : "#C0D372",
                fontWeight: 600,
              }}
            >
              {item.years[0]?.confidence_score ? item.years[0]?.confidence_score : 0}%
              {/* 5% */}
            </td>
            <td> <Image src="../arrow.png" height={15} /> </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DeviceTable;
