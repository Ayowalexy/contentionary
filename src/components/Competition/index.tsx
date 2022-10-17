import React, { SyntheticEvent } from "react";
import Carousel from "react-multi-carousel";
import { ArrowProps } from "react-multi-carousel/lib/types";
import "react-multi-carousel/lib/styles.css";
import "./styles.categories.scss";
import { useMediaQuery } from "@mui/material";

import { Slide, SlideParent } from "../../styles/Slide";
import { ArrowBtn, PrevArrow } from "../../styles/Button";
import { array_4 } from "../../styles/asset";
//arrows
import Forward from "../../assets/svgs/ArrowForward.svg";
import Backward from "../../assets/svgs/ArrowBackward.svg";

interface CustomLeftArrowProps extends ArrowProps {
  onClick?: () => void;
}

const Competition = () => {
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
        <p>Featured Competition</p>
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
          {array_4.slice(0, 4).map((element) => (
            <SlideParent key={element.id}>
              <Slide className="bg" image={element.image} />
              <div className="element">
                <p className="text">{element.text}</p>
                {matches && (
                  <div className="subText_2">
                    {element.subText.split("\n").map((item, idx) => (
                      <div key={idx}>
                        {" "}
                        {item} <br />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </SlideParent>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Competition;
