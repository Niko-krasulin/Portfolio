import styled from "styled-components";

type ContainerStyledType = {
    padding?: string
}


export const Container = styled.div<ContainerStyledType>`
  max-width: 1200px;
  width: 100%;
  min-height: 100%;
  padding: ${props => props.padding || '0 15px'};
  margin: 0 auto;
  overflow: visible;
  //border: 1px solid red;
`