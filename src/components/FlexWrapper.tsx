import React from 'react';
import styled from "styled-components";


type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    width?: string
    position?: string
    gap?: string
    margin?: string
}


export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  width: ${props => props.width || '100'};
  position: ${props => props.position || 'static'};
  gap: ${props => props.gap};
  margin: ${props => props.margin};
`


