import styled from "@emotion/styled";
import colors from "../assets/colors/index";

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

interface btnProps {
  left: boolean;
}

export const Button = styled.button<Props>`
  border: none;
  outling: none;
  width: ${(props) => (props.width ? props.width : "104px")};
  height: ${(props) => props.height};
  border-radius: 5px;
  background-color: ${(props) => (props.color ? props.color : colors.white)};
  color: ${(props) => (props.color ? colors.white : colors.primary)};
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const ArrowBtn = styled.button`
  position: absolute;
  outline: 0;
  transition: all 0.5s;
  border-radius: 35px;
  z-index: 1000;
  border: 0;
  background: ${colors.primary};
  min-width: 43px;
  min-height: 43px;
  opacity: 1;
  right: calc(4% + 1px);
  cursor: pointer;
`;

export const PrevArrow = styled.button`
  position: absolute;
  outline: 0;
  transition: all 0.5s;
  border-radius: 35px;
  z-index: 1000;
  border: 0;
  background: ${colors.primary};
  min-width: 43px;
  min-height: 43px;
  opacity: 1;
  cursor: pointer;
  left: calc(4% + 1px);
`;

export const Input = styled.input`
  width: 90%;
  height: 50px;
  padding-left: 20px;
  outline: none;
  background-color: ${colors.input};
  border-radius: 10px;
  border: 1px solid #d9dce0;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #676767;
`;

interface IProps {
  height?: string;
  width?: string;
}

export const IInput = styled.input<Props>`
  width: ${(props) => (props.width ? props.width : "450px")};
  height: ${(props) => (props.height ? props.height : "50px")};
  padding-left: 20px;
  outline: none;
  background-color: ${colors.white};
  border: 0px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #676767;
`;

interface IBtn {
  height?: string;
  width?: string;
}

export const IButton = styled.button<IBtn>`
  width: ${(props) => (props.width ? props.width : "120px")};
  height: ${(props) => (props.height ? props.height : "52px")};
  outline: none;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: 0px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
