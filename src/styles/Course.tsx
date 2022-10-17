import styled from "@emotion/styled";
import colors from "../assets/colors/index";

export const CourseStyles = styled.div`
  width: 32%;
  margin-top: 30px;
  background: ${colors.white};
  box-shadow: 0px 0px 20px rgba(203, 203, 203, 0.25);
  border-radius: 10px;
  transition: ease all 300ms;
  @media (max-width: 600px) {
    width: 48%;
  }
  &: hover {
    transform: translateY(-30px);
  }
  img {
    width: 100%;
    height: 200px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    @media (max-width: 600px) {
      width: 100%;
      height: 103px;
    }
  }
  .section_1 {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    flex-direction: column;
    @media (max-width: 600px) {
        padding: 10px;
      }
    .footer_price_mb {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #F77E23;
        padding-top: 5px;
    }
    .section_1_content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
    }
    .section_text {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 26px;
      text-transform: capitalize;
      color: ${colors.black};
      @media (max-width: 600px) {
        font-size: 12px;
        line-height: 20px;
      }
    }
    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      img {
        width: 14px;
        height: 14px;
      }
    }
    .footer_container {
      width: 100%;
      margin-top: 40px;
      @media (max-width: 600px) {
        margin-top: 10px;
      }
      .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .footer_price {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 36px;
          color: ${colors.primary};
        }
        
        .footer_1 {
          gap: 20px;
          .footer_text {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: ${colors.black};
            @media (max-width: 600px) {
                font-size: 10px;
              }
          }
          display: flex;
          justify-content: center;
          align-items: center;
          .footer_flex {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 6px;
            img {
              width: 20px;
              height: 20px;
              @media (max-width: 600px) {
                width: 10px;
                height: 10px;
              }
            }
          }
        }
      }
    }
  }
`;
