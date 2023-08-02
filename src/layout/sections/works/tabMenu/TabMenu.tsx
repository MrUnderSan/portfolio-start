import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index)=> {
                    return <ListItem key={index}><Link href="">{item}</Link></ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};


const StyledTabMenu = styled.nav`
  margin-bottom: 40px;
    ul {
      display: flex;
      justify-content: center;

      li + li {
        margin-left: 20px;
      }
    }      
`

const ListItem = styled.li`

`