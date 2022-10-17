import React, { useState } from "react";
import { FooterStyles } from "../../styles/Footer";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";
import { IButton, IInput } from "../../styles/Button";
import AppLogo from "../../assets/svgs/AppLogo.svg";
import { MobileFooter } from "../../styles/MobileFooter";

interface Props {
  email: string;
}
const Footer = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const [values, setValues] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(value);
  };
  return (
    <>
      {matches ? (
        <FooterStyles>
          <div className="footer_cont">
            <div className="footer_parent">
              <div className="footer_container">
                <div className="logo">Fountain</div>
                <div className="subText_footer">
                  We are not here to sell you products, we sell value through
                  our expertise.
                </div>
                <div className="icons">
                  <BsFacebook fill="#fff" size={28} />
                  <AiFillTwitterCircle size={28} />
                  <BsInstagram size={28} />
                  <FaLinkedinIn size={28} />
                </div>
              </div>
              <div className="footer_side">
                <div>
                  <div className="bottom">
                    <div className="footer_header">Address:</div>
                    <div className="footer_text">
                      38 opebi Road, Ikeja, Lagos State, Nigeia.
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="footer_header">Phone:</div>
                    <div className="footer_text">+2349022396389</div>
                  </div>
                  <div className="bottom">
                    <div className="footer_header">Email:</div>
                    <div className="footer_text">contact@contentionary.com</div>
                  </div>
                </div>

                <div className="links">
                  <div>Company</div>
                  <div>About Us</div>
                  <div>Features</div>
                  <div>Pricing</div>
                </div>
              </div>
            </div>
            <div>
              <div className="subscribe">Subscribe to get latest updates</div>
              <div className="send">
                <IInput name="email" onChange={handleChange} value={values} />
                <IButton>Subscribe</IButton>
              </div>
            </div>
            <div className="footer_logo">
              <img src={AppLogo} alt="logo" />
              <div>Powered By Contentionary</div>
            </div>
          </div>
        </FooterStyles>
      ) : (
        <MobileFooter>
          <div className="mobile_footer">
            <div className="subscribe">Subscribe to get latest updates</div>
            <div className="send">
              <IInput
                height="34px"
                name="email"
                onChange={handleChange}
                value={values}
              />
              <IButton height="36px">Subscribe</IButton>
            </div>
            <div className="mobile_f">
              <div>
                <div className="mobile_address">
                  Address: <br />
                  <span>38 opebi Road, Ikeja, Lagos State, Nigeia.</span>
                </div>
                <div className="mobile_address">
                  Phone: <br />
                  <span>+2349022396389</span>
                </div>
                <div className="mobile_address">
                  Email: <br />
                  <span>contact@contentionary.com</span>
                </div>
              </div>
              <div className="mobile_side">
                <div>Company</div>
                <div>About Us</div>
                <div>Features</div>
                <div>Pricing</div>
              </div>
            </div>
            <div className="mobile_actions">
              <div className="footer_logo_mobile">Fountain</div>
              <div className="mobile_icons_footer">
                <BsFacebook fill="#fff" size={23} />
                <AiFillTwitterCircle size={23} />
                <BsInstagram size={23} />
                <FaLinkedinIn size={23} />
              </div>
             <img src={AppLogo} alt='image' />
             <div className="mobile_powered">Powered By Contentionary</div>
            </div>
          </div>
        </MobileFooter>
      )}
    </>
  );
};

export default Footer;
