import React, { useState } from "react";
import { ScholarsStyles } from "../../styles/ScholarStyles";
import HeroDS from "../../assets/images/hero_3DS.png";
import HeroMS from "../../assets/images/Competition.png";
import { Input } from "../../styles/Button";
import SimpleSelect from "../Customs/Select";
import { Button } from "../../styles/Button";
import colors from "../../assets/colors/index";
import { useMediaQuery } from "@mui/material";

interface Props {
  email: string;
  phoneNumner: string;
  fullName: string;
}

const Scholars = () => {
  const matches = useMediaQuery("(min-width:600px)");

  const [values, setValues] = useState<Props>({
    email: "",
    phoneNumner: "",
    fullName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <ScholarsStyles>
      <div className="header_">
        Competate with various scholars <br />
        around the globe
      </div>
      <div className="container">
        <div className="side_1">
          <img src={matches ? HeroDS : HeroMS} alt="hero" />
        </div>
        {!matches && <div className="enroll">Enroll for a Course Now</div>}
        <div className="form">
          <div className="form_header">
            Registration to get notified about new competition and article we
            publish.
          </div>

          <Input
            value={values.email}
            onChange={handleChange}
            placeholder="Full name"
            name="fullName"
          />

          <Input
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
          />

          <Input
            value={values.email}
            onChange={handleChange}
            placeholder="Phone Number"
            name="phoneNumber"
          />
          <SimpleSelect />
          <div className="footer_button">
            <div />
            <Button
              color={colors.primary}
              width={matches ? "221px" : "100%"}
              height="52px"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </ScholarsStyles>
  );
};

export default Scholars;
