import React from "react";
import { useMediaQuery } from "@mui/material";
import { Button } from "../../styles/Button";
import Desktop from "../../assets/images/image_22.png";
import Mobile from "../../assets/images/MS.png";
import colors from "../../assets/colors/index";

import { PublicationStyles } from "../../styles/PublicationStyles";

const Publications = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <PublicationStyles isDesktop={matches}>
      <div className="exam_container">
        <div className="exam_styles">
          <div className="exam_text">
            Get <span>Publicstions</span> from <br /> best Aurtors around <br />
            the Globe
          </div>
          <div className="exam_text_2">
            Prepare your self for greater challenges with our online
            examination.
          </div>
          <div style={{marginBottom: !matches ? '70px' : '0px'}}>
            <Button width="157px" height="60px" color={colors.primary}>
              Take a test
            </Button>
          </div>
        </div>
        <div className="exam_styles_box">
          <img src={Desktop} alt="image" />
        </div>
      </div>
    </PublicationStyles>
  );
};

export default Publications;
