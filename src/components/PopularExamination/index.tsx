import React, { SyntheticEvent } from "react";
import Carousel from "react-multi-carousel";
import { ArrowProps } from "react-multi-carousel/lib/types";
import "react-multi-carousel/lib/styles.css";
import "./styles.categories.scss";
import { useMediaQuery } from "@mui/material";

import { Slide, SlideParent } from "../../styles/Slide";
import { ArrowBtn, PrevArrow } from "../../styles/Button";

import { array_3 } from "../../styles/asset";
//arrows
import Forward from "../../assets/svgs/ArrowForward.svg";
import Backward from "../../assets/svgs/ArrowBackward.svg";

interface CustomLeftArrowProps extends ArrowProps {
  onClick?: () => void;
}

const PopularExamination = () => {
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
        <p>Popular Examination</p>
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
          {array_3.map((element) => (
            <SlideParent key={element.id}>
              <Slide height="282px" width='262px' radius={'10px'} className="bg" image={element.image}>
                <div className="subText">
                    <p>
                    {`${element.subText.split('|')[0]}`}
                    <br />
                    {`${element.subText.split('|')[1]}`}
                    </p>
                </div>
              </Slide>
            </SlideParent>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularExamination;
