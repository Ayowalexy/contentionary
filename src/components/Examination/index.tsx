import React from "react";
import { useMediaQuery } from "@mui/material";
import { Button } from "../../styles/Button";
import Desktop from "../../assets/images/DS.png";
import Mobile from "../../assets/images/MS.png";
import colors from '../../assets/colors/index';

import { ExaminationStyles } from "../../styles/ExaminationStyles";

const Examination = () => {
    const matches = useMediaQuery("(min-width:600px)");

  return (
    <ExaminationStyles isDesktop={matches}>
      <div className="exam_container">
        <div className="exam_styles">
          <div className="exam_text">
            Our online
            <br /> <span>examination is</span>
            <br /> top-notch
          </div>
          <div className="exam_text_2">
            Prepare your self for greater challenges with our online
            examination.
          </div>
          <Button width="157px" height="60px" color={colors.primary}>Take a test</Button>
        </div>
        <div className="exam_styles_box">
          <img src={Desktop} alt="image" />
        </div>
      </div>
    </ExaminationStyles>
  );
};

export default Examination;
