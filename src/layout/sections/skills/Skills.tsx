import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/skill";
import {SectionTitle} from "../../../components/ScetionTitle";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <SectionTitle>SKILLS</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'center'}>
                    <Skill iconId={'html'} title={'HTML 5'} viewBox={'0 0 113 127'}/>
                    <Skill iconId={'css'} title={'CSS'} viewBox={'0 0 113 127'}/>
                    <Skill iconId={'react'} title={'REACT'}  viewBox={'0 0 113 110'}/>
                    <Skill iconId={'js'} title={'JAVA SCRIPT'}  viewBox={'0 0 113 110'}/>
                    <Skill iconId={'git'} title={'GIT'}  width={'60'} height={'92'} viewBox={'0 0 60 92'}/>
                    <Skill iconId={'styled'} title={'STYLED COMPONENT'}  viewBox={'0 0 113 110'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
`