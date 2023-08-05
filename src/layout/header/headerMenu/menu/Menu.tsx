import React from 'react';
import {S} from '../HeaderMenu_Styles'

const items = [
    {
        title: "Home",
        id: "home"
    },
    {
        title: "Skills",
        id: "skills"
    },
    {
        title: "Works",
        id: "works"
    },
    {
        title: "Testimony",
        id: "testimony"
    },
    {
        title: "Contact",
        id: "contact"
    }
]
type MenuProps = {
    setMenuIsOpen?: (isOpen: boolean)=> void
}

export const Menu: React.FC<MenuProps> = ({setMenuIsOpen}) => {
    return (
        <ul>
            {items.map((item, index)=> {
                return <S.MenuItem key={index}>
                        <S.MenuLink
                            activeClass="active"
                            smooth={true}
                            to={item.id}
                            spy={true}
                            onClick= {()=>{setMenuIsOpen && setMenuIsOpen(false)}}
                        >
                            {item.title}
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                        </S.MenuLink>

                </S.MenuItem>
            })}
        </ul>
    );
};
