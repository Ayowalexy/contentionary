import colors from "../assets/colors";
import styled from "@emotion/styled";

export const MobileHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${colors.white};
    background-color: #fff;
    height: 80px;
    .header_box_ {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
    }
    // padding: 20px;
    .menu {
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
    }
`