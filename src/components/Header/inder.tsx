import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Button } from "../../styles/Button";
import Drawer from "@mui/material/Drawer";
import { BsSearch } from "react-icons/bs";
import "../../pages/Home/Deskstop/styles.home.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { MobileHeader } from "../../styles/MobileHeader";
import Logo from "../../assets/svgs/logo.svg";
import User from "../../assets/svgs/user.svg";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width:600px)");

  const toggleDrawer = () => setOpen(!open);
  return (
    <>
      {matches ? (
        <div className="header">
          <div className="logo">Fountain</div>
          <div className="actions">
            {[
              {
                text_1: "Home",
                text_2: "Home",
              },
              {
                text_1: "Courses",
                text_2: "Courses",
              },
              {
                text_1: "Instructors",
                text_2: "Instructors",
              },
              {
                text_1: "Schedules",
                text_2: "Schedules",
              },
              {
                text_1: "Contact Us",
                text_2: "Contact Us",
              },
            ].map((element, idx) => (
              <div className="text_container">
                <div className="text_1" key={element.text_1 + idx}>
                  {element.text_1}
                </div>
                <div className="text_2" key={element.text_2 + idx + 3}>
                  {element.text_2}
                </div>
              </div>
            ))}
          </div>
          <div className="prompts">
            <BsSearch />
            <div>Login</div>
            <Button height="44px" width="104px">
              Register
            </Button>
          </div>
        </div>
      ) : (
        <React.Fragment key={"left"}>
          <MobileHeader>
            <div className="header_box_">
              <div className="menu">
                <AiOutlineMenu size={25} fill='#000'/>
                <img src={Logo} alt="logo" />
              </div>
              <img src={User} />
            </div>
          </MobileHeader>
          <Drawer anchor={"left"} open={open} onClose={toggleDrawer}>
            Hello
          </Drawer>
        </React.Fragment>
      )}
    </>
  );
};

export default Header;
