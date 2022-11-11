
import { Container, Image } from "react-bootstrap";
import React, { Component } from "react";
import Link from "next/link";
const TabPanelBody = ({ singleDevice, companyName }) => {
  console.log("props----", singleDevice);
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
          Company Details : {companyName}
        </h1>
        <div className="companyDetailsHolder">
          <div>
            <div className="informationHolder">
              <h4>Website URL</h4>
              <p style={{ color: "#896EB5" }}>www.grizzle.london</p>
              {/*            <p style={{ color: "#896EB5", lineBreak: "anywhere" }}>{props.data.website_url ? props.data.website_url : 'www.grizzle.london'}</p> */}
            </div>
            <div className="informationHolder">
              <h4>Country</h4>
              < p > United Kingdom</p >
              {/* <p>{props.data.country ? props.data.country : 'United Kingdom'}</p> */}
            </div>
            <div className="informationHolder">
              <h4>Location</h4>
              <p>6 Hoxton Square London, N1 6NU</p>
              {/* <p>{props.data.location ? props.data.location : '6 Hoxton Square London, N1 6NU'}</p> */}
            </div>
          </div>
          <div>
            <div className="informationHolder">
              <h4>Name</h4>
              <p>Static</p>
              <p>Organimation</p>
            </div>
            <div className="informationHolder">
              <h4>Contact</h4>
              <p>+44 1516 561 651</p>
            </div>
            <div className="informationHolder">
              <h4>Email</h4>
              <p> info@grizzle.london</p>
            </div>
          </div>
        </div>
        <div className="documentSection">
          <h2>Documents</h2>
          <div >

            <a className="pdfHolder" style={{ cursor: 'pointer' }} href={singleDevice.document} target='_blank'>
              <Image
                src='/pdf.png'
                width={51}
                height={51}
              />
              <p>File-Name</p>
            </a>
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
                <p>{singleDevice.mycelium_score}</p>
              </div>
            </div>
            <div className="informationHolder">
              <h4>Confidence Score</h4>
              <div className="subInformationHolder2">
                <p>{singleDevice.confidence_score}%</p>
              </div>
            </div>
          </div>
          <div>
            <div className="informationHolder">
              <h4>Carbon accountant</h4>
              <div className="subInformationHolder3">
                <Image
                  src={singleDevice.carbon_accountant}
                  width={117}
                  height={22}
                />
              </div>
            </div>
            <div className="informationHolder">
              <h4>vs EXIOBASE</h4>
              <div className="subInformationHolder4">
                <p>-{singleDevice.exiobase}%</p>
                <span>co<sub>2</sub>e </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile_hide">
          <h2>Breakdown</h2>
          <div className="scopeInformationHolder">
            <div className="subScopeInformation">
              <h5>Scope 1</h5>
              <h6>(tCO<sub>2</sub>e) </h6>
              <p>{singleDevice.scope_1}</p>
            </div>
            <div className="subScopeInformation">
              <h5>Scope 2</h5>
              <h6>(tCO<sub>2</sub>e) </h6>
              <p>{singleDevice.scope2_total}</p>
            </div>
            <div className="subScopeInformation">
              <h5>Scope 3</h5>
              <h6>(tCO<sub>2</sub>e) </h6>
              <p>{singleDevice.scope3_total}</p>
            </div>
            <div className="subScopeInformation">
              <h5>Total</h5>
              <h6>(tCO<sub>2</sub>e) </h6>
              <p>26</p>
            </div>
          </div>
          <div className="bottomInformationHandler">
            <div className="subBottomInformation">
              <h5>kg CO<sub>2</sub>e / £</h5>
              <p>0.0688</p>
            </div>
            <div className="subBottomInformation">
              <h5>vs EXIOBASE UK</h5>
              <p style={{ color: '#6EB575' }}>-30% CO<sub>2</sub>e</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TabPanelBody;
