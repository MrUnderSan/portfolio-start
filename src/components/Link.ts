import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a<{active?: boolean}>`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;

  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    background-color: ${theme.colors.accent};

    position: absolute;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
    bottom: 4.5px;
    height: 0;
    transition: ${theme.animations.transition};
    
    ${props => props.active && css<{active?: boolean}>`
      height: 10px;
    `}
  }
`