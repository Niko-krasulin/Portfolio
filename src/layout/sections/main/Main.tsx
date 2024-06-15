import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from '../../../assets/img/photo1.webp'
import {Container} from "../../../components/Container";
import {ElipsWrapperSkill, SvgWrapper} from "../../../components/menu/classStyled/ClassStyled";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";
import mask_main from '../../../assets/img/mask2.png'


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify='space-between' position={'relative'}>
                    <ElipsWrapperSkill top='50px' left='120px' bottom='0px' right='0'>
                        <SvgWrapper translateX={3} translateY={-3}>
                            <Icon iconId={'main_html'} viewBox={'0 0 56 40'} width={'56px'} height={'46px'}/>
                        </SvgWrapper>
                    </ElipsWrapperSkill>
                    <ElipsWrapperSkill top='220px' left='0' bottom='35px' right='0px'>
                        <SvgWrapper>
                            <Icon iconId={'main-ts'} viewBox={'0 0 56 40'} width={'56px'} height={'46px'}/>
                        </SvgWrapper>
                    </ElipsWrapperSkill>
                    <ElipsWrapperSkill top='400px' left='110px' bottom='35px' right='0px'>
                        <SvgWrapper>
                            <Icon iconId={'main-js'} viewBox={'0 0 60 50'} width={'55px'} height={'70px'}/>
                        </SvgWrapper>
                    </ElipsWrapperSkill>
                    <ElipsWrapperSkill top='0' left='990px' bottom='35px' right='0'>
                        <SvgWrapper translateX={3} translateY={2}>
                            <Icon iconId={'react'} viewBox={'0 0 116 100'} width={'56px'} height={'46px'}/>
                        </SvgWrapper>
                    </ElipsWrapperSkill>
                    <FlexWrapper direction='column'>
                        <Hello>HELLO</Hello>
                        <Name>I’m Gleb
                            Kostrubov</Name>
                        <AboutMain>I've been doing web design, front-end and back-end development for a year now. Do you
                            need a
                            website design, site layout, or maybe a turnkey website? Then contact me</AboutMain>
                        <MainButton>Contact me</MainButton>
                    </FlexWrapper>
                    <FlexWrapper>
                        <ElipsContainer>
                            <Photo src={photo} alt="it's me"/>
                        </ElipsContainer>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 141px;
  overflow-x: clip;
`

const Hello = styled.span`
  font-weight: 600;
  font-size: 48px;
  margin-top: 30px;
  display: inline-block;
`

const Name = styled.h2`
  font-weight: 700;
  font-size: 72px;

`

const AboutMain = styled.h1`
  font-weight: 300;
  font-size: 18px;
  max-width: 430px;
  margin: 27px 0;
`

export const MainButton = styled.a`
  width: 200px;
  height: 47px;
  box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
  background: linear-gradient(315deg, #e2a300 0%, #e29500 100%);
  border-radius: 6px;
  color: ${theme.colors.primaryBg};
  text-transform: uppercase;
  text-align: center;
  align-content: center;
  font-weight: 700;

`

const Photo = styled.img`
  position: absolute;
  width: 456px;
  height: 591px;
  left: 100px;
  bottom: 0;
`
const ElipsContainer = styled.div`
  position: relative;
  width: 575px;
  height: 575px;

  ::before {
    content: '';
    display: inline-block;
    width: 575px;
    height: 575px;
    border: 67px solid ${theme.colors.accent};
    border-radius: 50%;
    //background-color: ;
    box-shadow: 0 0 152px 0 rgba(0, 196, 240, 0.42);
    //background-color: rgba(0, 196, 240, 1);
  }

  ::after {
    content: '';
    display: inline-block;
    width: 357px;
    height: 286px;
    background-image: url(${mask_main});
    position: absolute;
    left: 80px;
    bottom: 367px;
    transform: rotate(-6.57deg);
  }
`

