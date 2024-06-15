import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {ButtonSlider} from "../sections/works/Works";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                    <Copyright>© 2024 {'{ninjA}'}</Copyright>
                     <ButtonSlider rotate={'90deg'} position={'absolute'} top={'0'} right={'380px'}/>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  position: relative;
  align-items: center;
  padding: 20px;
  min-height: 5vh;
  font-weight: 300;
  font-size: 18px;
  background-color: ${theme.colors.secondaryBg};
`

const Copyright = styled.small`
    display: block;
    text-align: center;
`