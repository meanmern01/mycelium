import Image from "next/image";
import React, { Component } from "react";
const TabPanelBody = () => {
  return (
    <div className="tabPanelBodyMain">
      <div className="tabPanelLeftPart">
        <h1
          style={{
            fontFamily: "18px",
            fontFamily: "inter",
            fontWeight: 300,
            lineHeight: "22px",
            marginBottom: "5%",
          }}
        >
          Company Details
        </h1>
        <div className="companyDetailsHolder">
          <div>
            <div className="informationHolder">
              <h4>Website URL</h4>
              <p style={{ color: "#896EB5" }}>www.grizzle.london</p>
            </div>
            <div className="informationHolder">
              <h4>Country</h4>
              <p>United Kingdom</p>
            </div>
            <div className="informationHolder">
              <h4>Location</h4>
              <p>6 Hoxton Square London, N1 6NU</p>
            </div>
          </div>
          <div>
            <div className="informationHolder">
              {" "}
              <h4>Name</h4>
              <p>Tom Carpenter</p>
            </div>
            <div className="informationHolder">
              {" "}
              <h4>Contact</h4>
              <p>+44 1516 561 651</p>
            </div>
            <div className="informationHolder">
              {" "}
              <h4>Email</h4>
              <p>info@grizzle.london</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tabPanelRightPart">
        <h1>Carbon accounting</h1>
        <div className="companyDetailsHolder">
          <div>
            <div className="informationHolder">
              <h4>Mycelium score </h4>

              <div className="subInformationHolder">
                <Image
                  src="/Speedometer-02---line-logo-inner 1.png"
                  width={73.67}
                  height={62.73}
                />
                <p>7.7</p>
              </div>
            </div>
            <div className="informationHolder">
              <h4>Confidence Score</h4>
              <p>United Kingdom</p>
            </div>
          </div>
          <div>
            <div className="informationHolder">
              {" "}
              <h4>Carbon accountant</h4>
              <p>Tom Carpenter</p>
            </div>
            <div className="informationHolder">
              {" "}
              <h4>vs EXIOBASE</h4>
              <p>+44 1516 561 651</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPanelBody;
