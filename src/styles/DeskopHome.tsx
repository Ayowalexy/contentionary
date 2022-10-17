import styled from "@emotion/styled";
import BGIMAGE from "../assets/images/desktop.png";
import M_BGIMAGE from "../assets/images/mobile.png";

interface Props {
  isDesktop: boolean;
}

export const DeskstopStyles = styled.div<Props>`
  width: 100%;
  height: ${(props) => (props.isDesktop ? "80vh" : "65vh")};
  background-image: url(${(props) => (props.isDesktop ? BGIMAGE : M_BGIMAGE)});
  background-size: cover;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 20px;
    .logo {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 600;
      font-size: 32.8px;
      line-height: 41px;
      color: #f77e23;
      padding-left: 70px;
    }
    .actions {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      height: 30px;
      overflow: hidden;
      color: #fff;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      .text_container {
        transition: ease all 300ms;
        padding-top: 30px;
        &: hover {
          animation-name: anim;
          cursor: pointer;
          transform: translateY(-30px);

        }
        .text_1 {
          padding-bottom: 10px;
          cursor: pointer;
          
          @keyframes anim {
            from {
              opacity: 1;
              transform: translateY(0px);
            }
            to {
              opacity: 0;
              transform: translateY(30px);
            }
          }
        }
        .text_2 {
          color: #242243;
          font-weight: 700;
        }
      }
    }
    .prompts {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      color: #fff;
      padding-right: 100px;
    }
  }

  .header_body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: -40px;
    .classical {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      text-align: center;
      color: #ffffff;
      animation-name: anim;
      animation-duration: 1000ms;
      animation-delay: 300ms;
      @keyframes anim {
        from {
          transform: translateY(40px);
          opacity: 0;
        } to {
          tranform: translateY(0px);
          opacity: 1;
        }
      }
    }
    .prepare {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      text-align: center;
      color: #ffffff;
      margin-bottom: 46px;
      animation-name: anim2;
      animation-duration: 1000ms;
      animation-delay: 600ms;
      @keyframes anim2 {
        from {
          transform: translateY(-50px);
          opacity: 0;
        } to {
          tranform: translateY(0px);
          opacity: 1;
        }
      }
    }

    .btn {
      animation-name: anim3;
      animation-duration: 1000ms;
      animation-delay: 600ms;
      animation-timing-function: ease-in;
      @keyframes anim3 {
        from {
          transform: translateX(-70px);
          opacity: 0;
        } to {
          tranform: translateY(0px);
          opacity: 1;
        }
      }
    }
  }

  .actions_types {
    width: 100%;
    display: flex;
    margin-top: -90px;
    justify-content: center;
    align-items: center;
    .action_types_box {
      width: 80%;
      height: 136px;
      background-color: #fff;
      box-shadow: 0px 21px 97px rgba(207, 207, 207, 0.25);
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .action_box {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
      }
      .action_text {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        color: #000000;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .header_body {
      .classical {
        font-weight: 700;
        font-size: 32px;
      }

      .prepare {
        font-weight: 400;
        font-size: 18px;
        width: 291px;
        padding-top: 20px;
      }
    }

    .actions_types {
      margin-top: 50px;
      .action_types_box {
        flex-wrap: wrap;
        width: 90%;
        gap: 10px;
        .action_text {
          font-size: 18px;
        }
      }
    }
  }
`;
