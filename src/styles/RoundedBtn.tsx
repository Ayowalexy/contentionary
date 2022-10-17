import styled from "@emotion/styled";
import colors from "../assets/colors";

interface Props {
  isDestop?: boolean;
}

export const Rounded = styled.div<Props>`
  width: ${(props) => (props.isDestop ? '60px' : "50px")};
  height: ${(props) => (props.isDestop ? '60px' : "50px")};
  background: ${colors.faded};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
