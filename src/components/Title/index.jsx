import React from "react";
import { TitleComponentStyled } from "./styles";

export default function Title({ text, color, size, decoration, align }) {
    return (
        <TitleComponentStyled color={color} size={size} decoration={decoration} align={align}>
            {text}
        </TitleComponentStyled>
    );

}
