import styled from "@emotion/styled";
import colors from "../assets/colors";

export const MobileReview = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  margin-bottom: 60px;
  justify-content: center;
  align-items: center;
  .review_container {
    width: 90%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .review_1 {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      .header_word {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 25px;
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
        gap: 30px;
        .arrow {
          width: 35px;
          height: 35px;
          border: 0.583333px solid #f77e23;
          border-radius: 17.5px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .mobile_review_ {
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      //   gap: 20px;
      //   width: 100%;
      margin-top: 50px;

      width: 100%;
      display: -webkit-box;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;
      transition: ease all 300ms;
      overflow: hidden;
      .review_card {
        width: 48%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
      }
      .text {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #333333;
        padding-top: 20px;
      }
      .t_header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .name {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          color: ${colors.dark};
        }
        .title {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: #f77e23;
        }
      }
      img {
        width: 28px;
        height: 28px;
      }
    }
  }
`;
