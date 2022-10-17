import styled from "@emotion/styled";
import colors from "../assets/colors/index";

interface Props {
  image: string;
  height?: string;
  width?: string;
  radius?: string;
}

export const Slide = styled.div<Props>`
  width: ${(props) => (props.width ? props.width : "291px")};
  height: ${(props) => (props.height ? props.height : "432px")};
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: ${(props) => (props.radius ? props.radius : "0px")};
  display: flex;
  overflow: hidden;
  flex-direction: column;
  // align-items: flex-end;

  .subText {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 26.1457px;
      line-height: 30px;
      color: #ffffff;
      @media (max-width: 600px) {
        font-size: 12px;
        line-height: 12px;
        padding-left: 10px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    width: 113px;
    height: 133px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    p {
      font-size: 14px;
      padding: 0px 0px 0px 0px;
    }
  }
`;

export const SlideParent = styled.div`
  .bg {
    &:hover,
    .element {
      top: 100px;
    }
  }
  ,
  .element {
    top: 100px;

  }
  .text {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 38px;
    color: #fff;
    padding: 0px 0px 0px 20px;
    @media (max-width: 600px) {
      font-size: 12px;
      line-height: 18px;
    }
  }
  .subText {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    padding: 0px 20px 20px 20px;
    @media (max-width: 600px) {
      padding: 0px;
    }
  }
  .element {
    position: absolute;
    top: 360px;
    transition: ease all 300ms;
    @media (max-width: 600px) {
      top: 100px;
    }
    .subText_2 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: ${colors.white};
      padding-left: 20px;
     
    }
    &:hover {
      top: 150px;
    }
  }
`;
