import React from "react";
import { ButtonStyled } from "./styles";

export default function ButtonComponent({type, onClick, text, width, textColor, bgcolor, size, color }) {
    return (
        <ButtonStyled size={size} type={type} width={width} textColor={textColor} bgcolor={bgcolor} color={color} onClick={onClick}>
            {text}
        </ButtonStyled>
    );

}
