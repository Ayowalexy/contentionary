import React, { useState } from "react";
import { ReviewStyles } from "../../styles/ReviewStyles";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import colors from "../../assets/colors";
import Profile from "../../assets/images/profile.png";
import { array_5 } from "../../styles/asset";
import { useMediaQuery } from "@mui/material";
import { MobileReview } from "../../styles/MobileReview";

interface Props {
  name: string;
  title: string;
  image: string;
}

const Reviews = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const [translateX, setTranslateX] = useState(0);

  const Card = ({ name, title, image }: Props) => (
    <div className="review_card">
      <div className="t_header">
        <img src={image} alt="profile" />
        <div className="profile_image">
          <div className="name">{name}</div>
          <div className="title">{title}</div>
        </div>
      </div>
      <div className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac
        blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet
        non, quis enim velit tempus. Interdum duis imperdiet venenatis
      </div>
    </div>
  );

  const next = () => {
    const number = matches ? 300 : 450;
    setTranslateX((prev) => prev + 300);
  };

  const prev = () => {
    const number = matches ? 300 : 450;
    setTranslateX((prev) => prev - 300);
  };

  return (
    <>
      {matches ? (
        <ReviewStyles>
          <div className="review">Review</div>
          <div className="review_container">
            <div className="testimonials">
              <div className="say">
                What our <br />
                <span>Students</span> say <br /> about us
              </div>
              <div className="arrow_container">
                <div id="prev" onClick={prev} className="arrow">
                  <MdArrowBackIos fill={colors.primary} size={30} />
                </div>
                <div id="next" onClick={next} className="arrow">
                  <MdArrowForwardIos fill={colors.primary} size={30} />
                </div>
              </div>
            </div>

            <div className="review_box">
              <div
                className="review_cont"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                {array_5.map((element, idx) => (
                  <Card
                    key={idx + element.name}
                    name={element.name}
                    title={element.title}
                    image={element.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </ReviewStyles>
      ) : (
        <MobileReview>
          <div className="review_container">
            <div className="review_1">
              <div className="header_word">
                What our <span>Students</span> <br />
                say about us
              </div>
              <div className="arrow_container">
                <div id="prev" onClick={prev} className="arrow">
                  <MdArrowBackIos fill={colors.primary} size={17} />
                </div>
                <div id="next" onClick={next} className="arrow">
                  <MdArrowForwardIos fill={colors.primary} size={17} />
                </div>
              </div>
            </div>
            <div className="mobile_review_"  style={{ transform: `translateX(${translateX}px)` }}>
              {array_5.map((element, idx) => (
                <Card
                  key={idx + element.name}
                  name={element.name}
                  title={element.title}
                  image={element.image}
                />
              ))}
            </div>
          </div>
        </MobileReview>
      )}
    </>
  );
};
export default Reviews;
