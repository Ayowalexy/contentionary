import styled from "@emotion/styled";
import Ds from "../assets/images/bg.png";
import colors from "../assets/colors/index";
import Ms from "../assets/images/bg_2.png";

interface Props {
  isDesktop: boolean;
}

export const PublicationStyles = styled.div<Props>`
  width: 100%;
  height: 660px;
  background-image: url(${Ds});
  background-size: cover;
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    background-image: url(${Ms});
    height: fit-content;
  }
  .exam_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    align-items: center;
    @media (max-width: 600px) {
        width: 100%;
      }
    .exam_styles {
      width: 50%;
      order: ${(props) => (props.isDesktop ? 1 : 2)};
      @media (max-width: 600px) {
        width: 100%;
        display: flex;
        jusitify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .exam_text {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 52px;
        line-height: 78px;
        @media (max-width: 600px) {
          font-size: 32px;
          line-height: 42px;
          text-align: center;
          margin-top: 30px;
        }
        color: ${colors.black};
        span {
          color: ${colors.primary};
        }
      }
      .exam_text_2 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 40px;
        color: ${colors.black};
        @media (max-width: 600px) {
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            margin: 30px;
          }
      }
    }
    .exam_styles_box {
      display: flex;
      jusitify-content: center;
      align-items: center;
      width: 50%;
      order: ${(props) => (props.isDesktop ? 2 : 1)};
      @media (max-width: 600px) {
        width: 100%;
        display: flex;
        jusitify-content: center;
        align-items: center;
        margin-top: 70px;
      }
      img {
        width: 590px;
        height: 478px;
        @media (max-width: 600px) {
          width: 344px;
          height: 304px;
          // margin-right: 100px;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
  }
`;
