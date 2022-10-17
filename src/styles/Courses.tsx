import styled from "@emotion/styled";
import colors from "../assets/colors/index";

export const CoursesStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .container_courses {
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 600px) {
      width: 90%;
    }
    .explore {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 60px;
      text-align: center;
      text-transform: capitalize;
      color: #333333;
      margin-top: 60px;
    }
    .sort {
      width: 129px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${colors.white};
      background: ${colors.primary};
      border-radius: 50px;
      gap: 10px;
      margin-top: 30px;
      align-self: flex-end;
    }
    .all_courses {
        display: flex;
        width: 100%;
        margin-top: 35px;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
  }
`;
