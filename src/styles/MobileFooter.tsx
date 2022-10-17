import styled from "@emotion/styled";
import colors from "../assets/colors";

export const MobileFooter = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.dark};
    .mobile_footer {
        width: 90%;
        padding-top: 50px;
        .subscribe {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #FFFFFF;
        }
        .send {
            display: flex:
            width: 100%;
            justify-content: center;
            align-items: center;
            input {
                width: 60%
            }
            button {
                width: 30%
            }
            
        }

        .mobile_f {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 30px;
            .mobile_address {
                width: 60%;
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                margin-bottom: 20px;
                color: ${colors.white};
                span {
                    font-weight: 400;
                }
            }

            .mobile_side {
                width: 30%;
                font-family: 'Poppins';
                font-style: normal;
                font-size: 16px;
                line-height: 24px;
                color: ${colors.white};
                div:nth-of-type(1){
                    font-weight: 600;
                } 
                div {
                    font-weight: 400;
                }
            }
        }
        .mobile_actions {
            display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
            .footer_logo_mobile {
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 600;
                font-size: 32.8px;
                line-height: 41px;
                color: ${colors.primary};
            }
            .mobile_icons_footer {
                display: flex;
                margin-top: 20px;
                justify-content: center;
                align-items: center;
                gap: 20px;
                color: ${colors.white};
            }
            img {
                width: 193.63px;
                height: 37px;
                margin-top: 70px;
            }
            .mobile_powered {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 36px;
                color: ${colors.white};
                padding-top: 20px;
                padding-bottom: 20px;

            }
        }
        

    }
    
`;
