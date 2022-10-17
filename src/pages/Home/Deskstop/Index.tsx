//import styles
import "./styles.home.scss";
import { DeskstopStyles } from "../../../styles/DeskopHome";
import colors from "../../../assets/colors";

//import icons
import { BsSearch } from "react-icons/bs";

//import Button
import { Button } from "../../../styles/Button";
import { Rounded } from "../../../styles/RoundedBtn";

//svgs
import Chat from "../../../assets/svgs/chat.svg";
import Exams from "../../../assets/svgs/exams.svg";
import Profile from "../../../assets/svgs/profile.svg";
import { useMediaQuery } from "@mui/material";

import Header from "../../../components/Header/inder";
import Categories from "../../../components/Categories";
import Experts from "../../../components/Experts";
import Courses from "../../../components/Courses";
import Examination from "../../../components/Examination";
import PopularExamination from "../../../components/PopularExamination";
import Scholars from "../../../components/Scholars";
import Competition from "../../../components/Competition";
import Publications from "../../../components/Publication";
import RecentExamination from "../../../components/RecentPublication";
import Footer from "../../../components/Footer";
import Reviews from "../../../components/Reviews";

const Home = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <DeskstopStyles isDesktop={matches}>
      <Header />
      <div className="header_body">
        <div className="classical">
          A Classical Education <br />
          for the Future
        </div>
        <div className="prepare">
          We prepare you to engage in the world that is and to help bring
          <br /> about a world that ought to be
        </div>
        <div className="btn">
          <Button height="62px" width="162px" color={colors.primary}>
            Get Started
          </Button>
        </div>
      </div>

      {
        <div className="actions_types">
          <div className="action_types_box">
            <div className="action_box">
              <Rounded isDestop={matches}>
                <img src={Chat} alt="chat" />
              </Rounded>
              <div className="action_text">Live Chat</div>
            </div>

            <div className="action_box">
              <Rounded isDestop={matches}>
                <img src={Exams} alt="exmanition" />
              </Rounded>
              <div className="action_text">Examination</div>
            </div>

            <div className="action_box">
              <Rounded isDestop={matches}>
                <img src={Profile} alt="profile" />
              </Rounded>
              <div className="action_text">Competition</div>
            </div>
          </div>
        </div>
      }

      <Categories />
      <Experts />
      <Courses />
      <Examination />
      <PopularExamination />
      <Scholars />
      <Competition />
      <Publications />
      <RecentExamination />
      <Reviews />
      <Footer />
    </DeskstopStyles>
  );
};

export default Home;
