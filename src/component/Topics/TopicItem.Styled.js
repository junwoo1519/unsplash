import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const TopicItem = styled(Link)`
  height: 56px;
  display: flex;
  align-items: center;
  color: #767676;
  border-bottom: 2px solid transparent;
  transition-property: color;
  transition-duration: .3s;

  &:hover {
    color: #000;
  }

  &:focus {
    border-bottom: 2px solid #000;
    color: #000;
  }

  ${(props) => props.shape === "following" && css`
    &::before {
      position: absolute;
      right: -21px;
      width: 1px;
      height: 32px;
      content: "";
      background-color: #d1d1d1;
    }
  `}
`;
