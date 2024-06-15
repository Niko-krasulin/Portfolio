import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/ScetionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Work} from "./work/Work";
import socialImg from '../../../assets/img/Portfolio.png'
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import akar from '../../../assets/img/akar-icons_arrow-left.svg'
import {SvgWrapper} from "../../../components/menu/classStyled/ClassStyled";


export const Works = () => {
    return (
        <StyledWork>
            <SectionTitle padding={'100px 0 50px 0'}>Portfolio</SectionTitle>
            <Container>
                <FlexWrapper justify={'center'}>
                        <ButtonSlider margin={'243px 40px 0 0'}/>
                    <Work title={'Landing Ice-cream'} src={socialImg}
                          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.'}/>
                        <ButtonSlider margin={'243px 0 0 40px'} rotate={'180deg'}/>
                </FlexWrapper>
            </Container>
        </StyledWork>
    );
};

const StyledWork = styled.section`
  padding-bottom: 150px;
`

type ButtonSliderPropsType = {
    margin?: string
    rotate?: string
    position?: string
    top?: string
    left?: string
    right?: string
    bottom?: string
}


export const ButtonSlider = styled.button<ButtonSliderPropsType>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${theme.colors.additional};
  background-image: url(${akar});
  background-repeat: no-repeat;
  background-position: center;

  margin: ${props => props.margin};
  rotate: ${props => props.rotate};
  position: ${props => props.position};


  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
`
