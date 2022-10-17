import React from "react";
import { CoursesStyles } from "../../styles/Courses";
import { IoIosArrowDown } from "react-icons/io";
import { CourseStyles } from "../../styles/Course";
import { useMediaQuery } from "@mui/material";

import Star from "../../assets/svgs/star.svg";
import People from "../../assets/svgs/Group.svg";

import { array_1, array_2 } from "../../styles/asset";

interface Props {
  name: string;
  rating: number;
  duration: string;
  students: string;
  price: string;
  image: string;
}

interface CProps {
  element: Props;
}

const Courses = () => {
  const matches = useMediaQuery("(min-width:600px)");

  const Course = ({ element }: CProps) => (
    <CourseStyles>
      <img src={element.image} alt="image 1" className="img" />
      <div className="section_1">
        <div className="section_1_content">
          <div className="section_text">{element.name}</div>
          <div className="flex">
            <img src={Star} alt="star" />
            <div>{element.rating}</div>
          </div>
        </div>
        {!matches && <div className="footer_price_mb">{element.price}</div>}
        <div className="footer_container">
          <div className="footer">
            <div className="footer_1">
              <div className="footer_text">{element.duration}</div>
              <div className="footer_flex">
                <img src={People} alt="people" />
                <div className="footer_text">{element.students}</div>
              </div>
            </div>
            {matches && <div className="footer_price">{element.price}</div>}
          </div>
        </div>
      </div>
    </CourseStyles>
  );
  return (
    <CoursesStyles>
      <div className="container_courses">
        <div className="explore">
          Explore our <br />
          popular course
        </div>
        <div className="sort">
          <IoIosArrowDown size={20} />
          <div>Sort By</div>
        </div>
        <div className="all_courses">
          {matches ? (
            <>
              {array_1.map((element, idx) => (
                <Course element={element} key={idx} />
              ))}
            </>
          ) : (
            <>
              {array_2.map((element, idx) => (
                <Course element={element} key={idx} />
              ))}
            </>
          )}
        </div>
      </div>
    </CoursesStyles>
  );
};

export default Courses;
