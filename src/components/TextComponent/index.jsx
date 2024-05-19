import React from "react";
import { TextComponentStyled } from "./styles";

export default function TextComponent({ text, color, size, decoration, align }) {
    return (
        <TextComponentStyled color={color} size={size} decoration={decoration} align={align}>
            {text}
        </TextComponentStyled>
    );

}
