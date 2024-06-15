import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items = ['Home', 'About me', 'Portfolio', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 26px 0 0 0;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  right: 0;
  z-index: 9999;
`

