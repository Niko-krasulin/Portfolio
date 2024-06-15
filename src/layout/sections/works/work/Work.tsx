import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {SvgWrapper} from "../../../../components/menu/classStyled/ClassStyled";

type WorkPropsType = {
    title: string
    text: string
    src: string
}


export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=''/>
            <FlexWrapper direction={'column'} align={'center'}>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <FlexWrapper gap={'7px'}>
                <Link href={'#'}>More</Link>
                <SvgWrapper>
                    <Link href={'#'}>
                    <Icon iconId={'arrow'} viewBox={'0 0 17 8'} width={'13px'} height={'8px'}/>
                    </Link>
                </SvgWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  display: flex;
  width: 970px;
  border-radius: 29px;
  gap: 81px;
  background-color: ${theme.colors.primaryBg};

`

const Image = styled.img`
  width: 493px;
  padding: 50px 0 50px 50px;

`
const Title = styled.h3`
  padding-top: 44px;
  font-weight: 300;
  font-size: 24px;
`
const Link = styled.a`
  
 
  color: ${theme.colors.additional};
`

const Text = styled.p`
  margin-bottom: 25px;
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  padding-top: 25px;
  max-width: 296px;
`