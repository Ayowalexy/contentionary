import React from "react";
import { ExpertStyles } from "../../styles/ExpertStyles";
import { Button } from "../../styles/Button";
import HeroDs from "../../assets/images/hero1.png";
import HeroMv from "../../assets/images/hero2.png";
import colors from "../../assets/colors";
import { useMediaQuery } from "@mui/material";

const Experts = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <ExpertStyles isDesktop={matches}>
      <div className="expert_cont">
        <div className="hero_image">
          <img className="img" src={matches ? HeroDs : HeroMv} alt="image" />
        </div>
        <div className="expert_text">
          <div className="text_1">
            We are <span>Experts</span> <br />
            Learning Institution
          </div>
          <div className="text_2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit elit,
            bibendum volutpat platea mi, adipiscing eget magna. Eu nulla ut urna
            venenatis velit et tincidunt. Id vitae velit
          </div>
          <div style={{marginBottom: !matches ? '90px' : '0px'}}>
            <Button width="157px" height="60px" color={colors.primary}>
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </ExpertStyles>
  );
};

export default Experts;
