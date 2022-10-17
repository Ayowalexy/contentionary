import React, { SyntheticEvent, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import { ArrowProps } from "react-multi-carousel/lib/types";
import "react-multi-carousel/lib/styles.css";
import "./styles.categories.scss";
import { useMediaQuery } from "@mui/material";

import { Slide, SlideParent } from "../../styles/Slide";
import { ArrowBtn, PrevArrow } from "../../styles/Button";

//slide images
import Slide1 from "../../assets/images/slide1.png";
import Slide2 from "../../assets/images/slide2.png";
import Slide3 from "../../assets/images/slide3.png";
import Slide4 from "../../assets/images/slide4.png";

//arrows
import Forward from "../../assets/svgs/ArrowForward.svg";
import Backward from "../../assets/svgs/ArrowBackward.svg";

interface CustomLeftArrowProps extends ArrowProps {
  onClick?: () => void;
}

const Categories = () => {
  const matches = useMediaQuery("(min-width:600px)");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  const CustomRightArrow = ({ onClick }: CustomLeftArrowProps) => {
    return (
      <>
        {matches ? (
          <ArrowBtn onClick={() => onClick?.()}>
            <img src={Forward} alt="forward arrow" />
          </ArrowBtn>
        ) : null}
      </>
    );
  };

  const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
    return (
      <>
        {matches ? (
          <PrevArrow onClick={() => onClick?.()}>
            <img src={Backward} alt="forward arrow" />
          </PrevArrow>
        ) : null}
      </>
    );
  };

  return (
    <div className="container_categories">
      <div className="header">
        <p>Top cartegories</p>
      </div>
      <div className="carousel_all">
        <div className="see_all">See all</div>
        <Carousel
          swipeable={true}
          partialVisbile
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          containerClass="carousel-container"
          responsive={responsive}
          itemClass="image-item"
          removeArrowOnDeviceType={["mobile"]}
        >
          {[
            {
              text: "Marketing",
              image: Slide1,
              id: 1,
            },
            {
              text: "Design",
              image: Slide2,
              id: 2,
            },
            {
              text: "Programming",
              image: Slide3,
              id: 3,
            },
            {
              text: "Technology",
              image: Slide4,
              id: 4,
            },
            {
              text: "Technology",
              image: Slide4,
              id: 5,
            },
            {
              text: "Technology",
              image: Slide4,
              id: 6,
            },
          ].map((element) => (
            <SlideParent className="anim_box" key={element.id}>
              <Slide className="bg" image={element.image} />
              <div className="element">
                <p className="text">{element.text}</p>
                <div className="subText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                  nibh netus auctor consect massa. Maecen vivamus sed nibh enim
                  sed. Hac ridiculus tellus urna quam odio quis montes, diam.
                  Malesuada ut urna eu faucibus faucibus faucibus u
                </div>
              </div>
            </SlideParent>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
