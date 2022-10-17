import styled from "@emotion/styled";
import colors from "../assets/colors/index";

export const FooterStyles = styled.div`
  width: 100%;
  height: 548px;
  background-color: ${colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  .footer_cont {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .subscribe {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
      color: ${colors.white};
      text-align: center;
      margin-top: 90px;
    }
    .footer_logo {
      align-self: flex-start;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      gap: 15px;
      div {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        color: ${colors.white};
      }
    }
    .footer_parent {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .footer_container {
        width: 65%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        .logo {
          font-family: "Source Sans Pro";
          font-style: normal;
          font-weight: 600;
          font-size: 32.8px;
          line-height: 41px;
          color: ${colors.primary};
        }
        .subText_footer {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 1px;
          text-transform: lowercase;
          width: 300px;
          color: ${colors.white};
        }
        .icons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          color: ${colors.white};
        }
      }
      .footer_side {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: row;
        width: 35%;
        .bottom {
          display: flex;
          justify-content: center;
          flex-direction: column;
          gap: 2px;
          margin-top: 15px;
          align-items: flex-start;
          font-family: "Poppins";
          font-style: normal;
          color: ${colors.white};
          .footer_header {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
          }
          .footer_text {
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
          }
        }
        .links {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          gap: 10px;
          font-family: "Poppins";
          font-style: normal;
          line-height: 24px;
          color: ${colors.white};
          div:nth-of-type(1) {
            font-size: 16px;
            font-weight: 600;
          }
          div {
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
    }
  }
`;
