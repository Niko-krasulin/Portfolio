import styled from "styled-components";


type ElipsWrapperSkillType = {
    top?: string
    left?: string
    right?: string
    bottom?: string
    content?: string
}


export const ElipsWrapperSkill = styled.div<ElipsWrapperSkillType>`

  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  margin: 1em auto;
  background: linear-gradient(#414141 0%, #2D2D2D 100%);
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  
  & > svg {
    position: absolute;
    transform: translate(4px, -6px);
  }
  
`

type SvgWrapperType = {
    translateX?: number
    translateY?: number
    children?: any
    rotate?: number
}

export const SvgWrapper: React.FC<SvgWrapperType> = ({ translateX, translateY,  rotate = 0, children }) => {
    const style = {
        transform: `translate(${translateX}px, ${translateY}px), rotate(${rotate}deg)`,
        // можно добавить другие стили, если нужно
    };

    return (
        <div style={style}>
            {children}
        </div>
    );
};

