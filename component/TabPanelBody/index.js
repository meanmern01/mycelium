
import { Container, Image } from "react-bootstrap";
import React, { Component } from "react";
import Link from "next/link";
const TabPanelBody = ({ singleDevice, companyName }) => {
  // console.log("props----", singleDevice);
  console.log("----", singleDevice);
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
          Company Details : 
        </h1>
        <div className="companyDetailsHolder">
          <div>
            <div className="informationHolder">
              <h4>Website URL</h4>
              {/* <p style={{ color: "#896EB5" }}>www.grizzle.london</p> */}
              <p style={{ color: "#896EB5", lineBreak: "anywhere" }}>{singleDevice.website_url ? singleDevice.website_url : 'N/A'}</p>
            </div>
            <div className="informationHolder">
              <h4>Country</h4>
              {/* <p> United Kingdom</p> */}
              <p>{singleDevice.country ? singleDevice.country : 'N/A'}</p>
            </div>
            <div className="informationHolder">
              <h4>Location</h4>
              {/* <p>6 Hoxton Square London, N1 6NU</p> */}
              <p>{singleDevice.location ? singleDevice.location : 'N/A'}</p>
            </div>
          </div>
          <div>
            <div className="informationHolder">
              <h4>Name</h4>
              <p>{singleDevice.name ? singleDevice.name : 'N/A'}</p>
            </div>
            <div className="informationHolder">
              <h4>Contact</h4>
              <p>{singleDevice.contact ? singleDevice.contact : 'N/A'}</p>
            </div>
            <div className="informationHolder">
              <h4>Email</h4>
              <p>{singleDevice.email ? singleDevice.email : 'N/A'}</p>
            </div>
          </div>
        </div>
        {
          singleDevice.years[companyName].document ?
            <div className="documentSection">
              <h2>Documents</h2>
              <div >
                <a className="pdfHolder" style={{ cursor: 'pointer' }} href={singleDevice.years[companyName].document} target='_blank'>
                  <Image
                    src='/pdf.png'
                    width={51}
                    height={51}
                  />
                  <p>{singleDevice.years[companyName].document.split("/").reverse()[0]}</p>
                </a>
              </div>
            </div>
            :
            'N/A'
        }
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
                <p>{singleDevice.years[companyName].mycelium_score ? singleDevice.years[companyName].mycelium_score : "N/A"}</p>
              </div>
            </div>
            <div className="informationHolder">
              <h4>Confidence Score</h4>
              <div className="subInformationHolder2">
                {singleDevice.years[companyName].confidence_score ? <p>{singleDevice.years[companyName].confidence_score } %</p> : <p>N/A</p> }
              </div>
            </div>
          </div>
          <div>
            <div className="informationHolder">
              <h4>Carbon accountant</h4>
              <div className="subInformationHolder3">
                <Image
                  src={singleDevice.years[companyName]?.carbon_accountant ? singleDevice.years[companyName]?.carbon_accountant : "N/A"}
                  width={117}
                // height={50}
                />
              </div>
            </div>
            <div className="informationHolder">
              <h4>vs EXIOBASE</h4>
              <div className="subInformationHolder4">
                {singleDevice.years[companyName].exiobase ? <>
                <p>{singleDevice.years[companyName].exiobase}%</p><span> co<sub>2</sub>e </span>
                </>
                :
                <p>N/A</p>
                }
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
              <p>{singleDevice.years[companyName].scope1 ? singleDevice.years[companyName].scope1 : "N/A"}</p>
            </div>
            <div className="subScopeInformation">
              <h5>Scope 2</h5>
              <h6>(tCO<sub>2</sub>e) </h6>
              <p>{singleDevice.years[companyName].scope2_total ? singleDevice.years[companyName].scope2_total: "N/A"}</p>
            </div>
            <div className="subScopeInformation">
              <h5>Scope 3</h5>
              <h6>(tCO<sub>2</sub>e) </h6>
              <p>{singleDevice.years[companyName].scope3_total ? singleDevice.years[companyName].scope3_total : "N/A"}</p>
            </div>
            <div className="subScopeInformation">
              <h5>Total</h5>
              <h6>(tCO<sub>2</sub>e) </h6>
              <p>{singleDevice.years[companyName].allscopetotal ? singleDevice.years[companyName].allscopetotal: "N/A"}</p>
            </div>
          </div>
          <div className="bottomInformationHandler">
            <div className="subBottomInformation">
              <h5>kg CO<sub>2</sub>e / £</h5>
              <p>{singleDevice.years[companyName].intensity_per_revenue ? singleDevice.years[companyName].intensity_per_revenue : "N/A"}</p>
            </div>
            <div className="subBottomInformation">
              <h5>vs EXIOBASE UK</h5>
              <p style={{ color: '#6EB575' }}>{singleDevice.years[companyName].exiobase ? singleDevice.years[companyName].exiobase:"N/A" }% CO<sub>2</sub>e</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TabPanelBody;
