import styled from "@emotion/styled";
import colors from "../assets/colors";

export const ReviewStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
  .review {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    text-transform: capitalize;
    color: #242243;
    margin-top: 90px;
  }
  .review_container {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    .testimonials {
      width: 30%;
      display: flex;
      justify-content: center;
      gap: 40px;
      flex-direction: column;
      align-items: flex-start;
      .say {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 65px;
        text-transform: capitalize;
        color: ${colors.dark};
        span {
          color: ${colors.primary};
        }
      }
      .arrow_container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        .arrow {
          width: 60px;
          height: 60px;
          border: 1px solid #f77e23;
          border-radius: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }
      }
    }
    .review_box {
      width: 65%;
      overflow: hidden;
      .review_cont {
        width: 100%;
        display: -webkit-box;
        justify-content: center;
        align-items: flex-start;
        gap: 50px;
        transition: ease all 300ms;
      }
    }
    .review_card {
      width: 380px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      box-sizing: border-box;
      .t_header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        .name {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 27px;
          color: ${colors.dark};
        }
        .title {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 25px;
          color: #f77e23;
        }
      }
      .text {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: #333333;
        margin-top: 20px;
      }
    }
  }
`;
