import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href=''>{item}</Link>
                    </ListItem>
                })
                }
            </ul>
        </StyledMenu>

    );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 3rem;
  }
`

const ListItem = styled.li`
  color: ${theme.colors.font};

`
const Link = styled.a`
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: ${theme.colors.accent};
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  :hover {
    color: ${theme.colors.accent};
    transition: color 0.5s;
  }
  
  :hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`
