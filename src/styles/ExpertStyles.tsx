import DesktopBG from "../assets/images/bg.png";
import styled from "@emotion/styled";
import MobileBG from "../assets/images/bg_2.png";
import HeroDS from "../assets/images/hero1.png";
import colors from "../assets/colors/index";

interface Props {
  isDesktop: boolean;
}

export const ExpertStyles = styled.div<Props>`
  width: 100%;
  height: 660px;
  background-image: url(${DesktopBG});
  background-size: cover;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .expert_cont {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 600px) {
      flex-direction: column;
      background-image: url(${MobileBG});
      height: fit-content;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    background-image: url(${MobileBG});
    height: fit-content;
  }
  .hero_image {
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 490px;
      height: 490px;
      @media (max-width: 600px) {
        width: 379px;
        height: 379px;
      }
    }
  }
  .expert_text {
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 600px) {
      width: 100%;
      align-items: center;
    }
    .text_1 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 52px;
      line-height: 78px;
      color: #333333;
      span {
        color: ${colors.primary};
      }
      @media (max-width: 600px) {
        font-size: 32px;
        line-height: 48px;
        text-align: center;
        width: 90%;
        margin-top: 30px;
      }
    }
    .text_2 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
      color: #333333;
      width: 500px;
      padding-bottom: 20px;
      @media (max-width: 600px) {
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        width: 80%;
      }
    }
  }
`;
