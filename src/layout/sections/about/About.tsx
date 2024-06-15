import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import photo_about_1 from '../../../assets/img/image_about_1.webp'
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import photo_about_2 from '../../../assets/img/photo3.webp'
import photo_about_3 from '../../../assets/img/photo2.webp'
import {SectionTitle} from "../../../components/ScetionTitle";
import maskAbout from '../../../assets/img/mask3.png'
import maskAbout2 from '../../../assets/img/mask4.png'

type StyledContainerPhotoPropsType = {
    width?: string
    height?: string
    position?: string
    top?: string
    left?: string
    right?: string
    bottom?: string
    zIndex?: number
    shadow?: string
    margin?: string
}


export const About = () => {
    return (
        <StyledAboutMe>
            <Container padding={'0, 0'}>
                <FlexWrapper margin={'114px 0'} position={'relative'}>
                    <SectionTitle position={'absolute'} zIndex={3} left={'539px'} top={'-36px'}>ABOUT ME</SectionTitle>
                    <StyledContainerPhoto width='330px' height='378px' position={'absolute'} top={'-47px'}
                                          left={'183px'} zIndex={4} shadow={'0 4px 4px 0 rgba(0, 0, 0, 0.25)'}>
                        <FlexWrapper justify={'center'} align={'center'}>
                            <PsevdoSmileElement>
                            <StyledImg1 src={photo_about_1}/>
                            </PsevdoSmileElement>
                        </FlexWrapper>
                    </StyledContainerPhoto>
                    <StyledContainerPhoto width='307px' height='339px' position={'absolute'} top={'525px'}
                                          left={'200px'} zIndex={2} shadow={'0 4px 4px 0 rgba(0, 0, 0, 0.25)'}>
                        <FlexWrapper justify={'center'} align={'center'}>
                            <StyledImg2 src={photo_about_2}/>
                        </FlexWrapper>
                    </StyledContainerPhoto>
                    <StyledContainerPhoto width='496px' height='822px' position={'relative'}
                                          margin={'0 0 0 480px'}>
                        <FlexWrapper>
                            <ElipsAboutWrapper>
                                <PsevdoElipsWrapper>
                                    <AboutText>Hello again everyone! So, you already know that my name is Gleb. A little
                                        about
                                        myself:
                                        student, 18 y.o., athlete-football player, I love creativity since childhood, I
                                        live in
                                        Donetsk,
                                        Ukraine. Why programming? Everything is elementary - I like it, the profession
                                        of the
                                        future,
                                        thanks
                                        to which I can provide myself and fulfill my dream - travel, at the moment I
                                        specialize in
                                        web
                                        design, front-end and back-end development, turnkey websites. Why should you
                                        choose me? I
                                        approach
                                        each order with great responsibility and love, as I want to make a name for
                                        myself, exclude
                                        plagiarism and negligence, fully study the project, the client and its target
                                        audience, work
                                        for
                                        quality, trying to make an order as quickly and uniquely as possible, taking
                                        into account
                                        all
                                        the
                                        edits and wishes.
                                        By trusting me, you will get the maximum return for your project, save your
                                        nerves and time.
                                        If you are interested in me , you want to know something more or use my
                                        services, then I
                                        will
                                        provide all my contacts below.
                                    </AboutText>
                                </PsevdoElipsWrapper>
                            </ElipsAboutWrapper>
                        </FlexWrapper>
                    </StyledContainerPhoto>
                    <StyledContainerPhoto width='310px' height='485px' position={'absolute'} top={'188px'}
                                          left={'928px'} zIndex={3} shadow={'none'}>
                        <StyledImg3 src={photo_about_3}/>
                    </StyledContainerPhoto>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledImg1 = styled.img`
  max-width: 272px;
  max-height: 320px;
  border: 4px solid ${theme.colors.border};
  margin-top: 8%;


`
const StyledImg2 = styled.img`
  max-width: 250px;
  max-height: 281px;
  border: 4px solid ${theme.colors.border};
  margin-top: 8%;
`

const StyledImg3 = styled.img`
  max-width: 287px;
  max-height: 427px;
  border: 4px solid ${theme.colors.border};
  margin-top: 8%;
`

const StyledContainerPhoto = styled.div<StyledContainerPhotoPropsType>`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '100px'};
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  z-index: ${props => props.zIndex};
  box-shadow: ${props => props.shadow};
  margin: ${props => props.margin};

  background-color: ${theme.colors.secondaryBg};
  border-radius: 14px;


`

const PsevdoSmileElement = styled.div`
  position: relative;

  ::before {
    position: absolute;
    content: '';
    background-image: url(${maskAbout});   
    top: -31px;
    left: -52px;
    display: inline-block;
    width: 309px;
    height: 309px;
  }
  ::after {
      position: absolute;
      content: '';
      background-image: url(${maskAbout2});
      top: 675px;
      left: 67px;
      display: inline-block;
      width: 93px;
      height: 93px;
  }
`

const PsevdoElipsWrapper = styled.div`
  ::before {
    position: absolute;
    content: '';
    right: 0;
    top: 417px;
    left: 210px;
    display: inline-block;
    width: 486px;
    height: 486px;
    border: 55px solid ${theme.colors.accent};
    border-radius: 50%;
    box-shadow: 0 4px 70px 0 rgba(255, 255, 255, 0.25);
  }
`

const AboutText = styled.p`
  position: relative;
  padding: 63px;
  width: 496px;
  border-radius: 14px;
  font-weight: 300;
  height: 822px;
  letter-spacing: 0.6px;
  font-size: 20px;
  z-index: 9;
  background-color: ${theme.colors.secondaryBg};



`

const StyledAboutMe = styled.section`
  overflow: hidden;

`
const ElipsAboutWrapper = styled.div`
  z-index: 1;
  position: relative;

  ::after {
    position: absolute;
    content: '';
    right: 146px;
    bottom: 25px;
    display: inline-block;
    width: 792px;
    height: 792px;
    border: 89px solid ${theme.colors.font};
    border-radius: 50%;
    box-shadow: 0 4px 70px 0 rgba(255, 255, 255, 0.25);
  }

  ::before {
    position: absolute;
    content: '';
    right: 0;
    top: -21px;
    left: 342px;
    display: inline-block;
    width: 356px;
    height: 356px;
    border: 34px solid ${theme.colors.additional};
    border-radius: 50%;
    box-shadow: 0 4px 70px 0 rgba(255, 255, 255, 0.25);
  }


`