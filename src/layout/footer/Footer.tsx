import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Aliaksandr</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink target={"_blank"} href={"https://www.instagram.com/mrundersan/"}>
                        <Icon iconId={"instagram"} width={"21"} height={"21"} viewBox={"0 0 21 21"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink target={"_blank"} href={"https://t.me/MrUnderSan"}>
                        <Icon iconId={"telegram"} width={"21"} height={"21"} viewBox={"0 0 21 21"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink target={"_blank"} href={"https://www.linkedin.com/in/mrundersan/"}>
                        <Icon iconId={"linkedin"} width={"21"} height={"21"} viewBox={"0 0 21 21"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink target={"_blank"} href={"https://github.com/MrUnderSan"}>
                        <Icon iconId={"github"} width={"21"} height={"21"} viewBox={"0 0 24 24"}/>
                    </SocialLink>
                </SocialItem>

            </SocialList>
            <Copyright>© 2023 Aliaksandr Yurhilevich, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
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