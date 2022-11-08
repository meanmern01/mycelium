import React from "react";
// import Image from "next/image";
import { Container, Image } from "react-bootstrap";
const HomepageFooter = () => {
  return (
    <React.Fragment>
      <div className="mainHolderFooter">
        <div className="firstCol">
          <div className="footerInfoRowFirst">
            <div className="firstSubCol">
              <p>About Mycelium</p>
              <p>Terms and conditions</p>
            </div>
            <div className="secondSubCol">
              <p>Cookie policy</p>
            </div>
          </div>
          <div className="footerInfoRowSecond">
            <p> © 2022 Mycelium Network. All rights reserved</p>
          </div>
        </div>
        <div className="SecondCol">
          <Image src="/Group 138.png" width={180.82} height={32.79} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomepageFooter;
