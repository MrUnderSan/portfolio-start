import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {S} from "./Footer_Styles"

const socialData = [
    {
        iconId: "instagram",
        href: "https://www.instagram.com/mrundersan/",
        width: "21",
        height: "21",
        viewBox: "0 0 21 21"
    },
    {
        iconId: "telegram",
        href: "https://t.me/MrUnderSan",
        width: "21",
        height: "21",
        viewBox: "0 0 21 21"
    },
    {
        iconId: "linkedin",
        href: "https://www.linkedin.com/in/mrundersan/",
        width: "21",
        height: "21",
        viewBox: "0 0 21 21"
    },
    {
        iconId: "github",
        href: "https://github.com/MrUnderSan",
        width: "21",
        height: "21",
        viewBox: "0 0 24 24"
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <S.Name>Aliaksandr</S.Name>
            <S.SocialList>

                {socialData.map((s, index) => {
                    return (
                        <S.SocialItem key={index}>
                            <S.SocialLink target={"_blank"} href={s.href}>
                                <Icon iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    )
                })}

            </S.SocialList>
            <S.Copyright>© 2023 Aliaksandr Yurhilevich, All Rights Reserved.</S.Copyright>
        </S.Footer>
    );
};