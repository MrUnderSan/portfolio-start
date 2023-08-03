import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.10);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  
  &:hover {
    background: ${theme.colors.accent};
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`

const Name = styled.span`
  ${font({family: "'Josefin Sans',sans-serif", weight: 700, fMax: 22, fMin: 16})}
  letter-spacing: 3px;
`

const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
`

export const S = {
    Footer,
    SocialList,
    SocialItem,
    SocialLink,
    Name,
    Copyright
}