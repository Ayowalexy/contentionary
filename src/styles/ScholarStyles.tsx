import styled from "@emotion/styled";
import Ds from "../assets/images/bg.png";
import colors from "../assets/colors/index";
import Ms from "../assets/images/bg_2.png";

interface Props {
  isDesktop: boolean;
}

export const ScholarsStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  .header_ {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    text-align: center;
    margin-top: 80px;
    line-height: 50px;
    letter-spacing: -0.02em;
    color: ${colors.black};
    @media (max-width: 600px) {
      font-size: 24px;
      width: 360px;
      line-height: 30px;
    }
  }
  .container {
    width: 100%;
    height: 660px;
    background-image: url(${Ds});
    background-size: cover;
    margin-top: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 600px) {
      flex-direction: column;
      background-image: url(${Ms});
    }
    .side_1 {
      width: 45%;
      @media (max-width: 600px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 477px;
        height: 477px;
        @media (max-width: 600px) {
          width: 344px;
          height: 344px;
          margin-left: 40px;
        }
      }
    }
    .enroll {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      display: flex;
      align-items: center;
      letter-spacing: -0.02em;
      text-transform: capitalize;
      color: ${colors.black};
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .form {
      background: ${colors.white};
      width: 30%;
      height: 70%;
      box-shadow: 0px 0px 25px rgba(17, 24, 39, 0.18);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      padding: 2%;

      @media (max-width: 600px) {
        width: 87%;
      }
      .footer_button {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-item: flex-end;
      }
      .form_header {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: ${colors.black};
      }
    }
    @media (max-width: 600px) {
      background-image: url(${Ms});
      height: fit-content;
    }
  }
`;
