import React from 'react';
import svgSprite from '../../assets/img/svg-sprite.svg'


type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string
    style?: string
    transform?: string
}


export const Icon = (props: IconPropsType) => {
    return (
        <svg  width={props.width} height={props.height} viewBox={props.viewBox || "0 0 200 200"} transform={props.transform}>
            <use xlinkHref={`${svgSprite}#${props.iconId}`} />
        </svg>

    );
};



