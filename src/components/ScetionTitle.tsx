import React from 'react';
import styled from "styled-components";


type SectionTitlePropsType = {
    position?: string
    zIndex?: number
    left?: string
    right?: string
    top?: string
    bottom?: string
    padding?: string
}



export const SectionTitle = styled.h2<SectionTitlePropsType>`
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 48px;
  position: ${props => props.position};
  z-index: ${props => props.zIndex};
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  padding: ${props => props.padding};
`

