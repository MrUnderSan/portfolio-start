import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

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
                    <SocialLink target={"_blank"} href={"https://vk.com/undersan"}>
                        <Icon iconId={"vk"} width={"21"} height={"21"} viewBox={"0 0 21 21"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink target={"_blank"} href={"https://www.linkedin.com/in/mrundersan/"}>
                        <Icon iconId={"linkedin"} width={"21"} height={"21"} viewBox={"0 0 21 21"}/>
                    </SocialLink>
                </SocialItem>

            </SocialList>
            <Copyright>© 2023 Aliaksandr Yurhilevich, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: rgba(80, 208, 255, 0.84);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
    
`
const SocialItem = styled.li`
  list-style-type: none;
`
const SocialLink = styled.a`

`
const Name = styled.span`

`

const Copyright = styled.small`
`