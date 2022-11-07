import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
const DeviceTable = () => {
  const [value, setValue] = useState(-30);

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
        <tr>
          <td style={{ color: "#896EB5" }}>1</td>

          <td
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              textAlign: "left",
            }}
          >
            <Image src="/grizzle square logo 1.png" width={22} height={22} />
            <p
              style={{
                color: "black",
                marginBottom: "0px",
                fontWeight: "bold",
                textDecoration: null,
              }}
            >
              <Link className="menuLink" href="singleDevice/Mark">
                Mark
              </Link>
            </p>
          </td>

          <td>0.0688</td>
          <td>unknown</td>
          <td
            style={{
              color: value < -10 ? "#6EB575" : "#C0D372",
              fontWeight: 600,
            }}
          >
            -30% CO2e
          </td>
          <td
            style={{
              color: value < -10 ? "#6EB575" : "#C0D372",
              fontWeight: 600,
            }}
          >
            75%
          </td>
        </tr>
        <tr>
          <td style={{ color: " #896EB5" }}>2</td>
          <td
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              textAlign: "left",
            }}
          >
            <Image src="/grizzle square logo 1.png" width={22} height={22} />
            <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Mark</p>
          </td>
          <td>0.0688</td>
          <td>unknown</td>
          <td>-30% CO2e</td>
          <td>75%</td>
        </tr>
        <tr>
          <td style={{ color: " #896EB5" }}>3</td>
          <td
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              textAlign: "left",
            }}
          >
            <Image src="/grizzle square logo 1.png" width={22} height={22} />
            <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Mark</p>
          </td>
          <td>0.0688</td>
          <td>unknown</td>
          <td>-30% CO2e</td>
          <td>75%</td>
        </tr>
        <tr>
          <td style={{ color: " #896EB5" }}>4</td>
          <td
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              textAlign: "left",
            }}
          >
            <Image src="/grizzle square logo 1.png" width={22} height={22} />
            <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Mark</p>
          </td>
          <td>0.0688</td>
          <td>unknown</td>
          <td>-30% CO2e</td>
          <td>75%</td>
        </tr>
        <tr>
          <td style={{ color: " #896EB5" }}>5</td>
          <td
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              textAlign: "left",
            }}
          >
            <Image src="/grizzle square logo 1.png" width={22} height={22} />
            <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Mark</p>
          </td>
          <td>0.0688</td>
          <td>unknown</td>
          <td>-30% CO2e</td>
          <td>75%</td>
        </tr>
        <tr>
          <td style={{ color: " #896EB5" }}>6</td>
          <td
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              textAlign: "left",
            }}
          >
            <Image src="/grizzle square logo 1.png" width={22} height={22} />
            <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Mark</p>
          </td>
          <td>0.0688</td>
          <td>unknown</td>
          <td>-30% CO2e</td>
          <td>75%</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DeviceTable;
