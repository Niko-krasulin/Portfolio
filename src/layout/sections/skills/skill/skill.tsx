import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";


type SkillPropsType = {
    iconId: string
    title: string
    viewBox?: string
    height?: string
    width?: string
}




export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <IconWrapper>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            </IconWrapper>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    )
};


export const IconWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 110px;
    transform: translate(0, 0);
  }
  
`


const StyledSkill = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.primaryBg};
  margin: 40px;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.47);
`

const SkillTitle = styled.span`
  align-items: center;
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 20px
`

