import React from "react";
import { ContainerTextComponent, TextInfoComponentStyled } from "./styles";
import TextComponent from "../TextComponent";

export default function TextInfoComponent({ text, info, color, colorInfo, size, decoration, align }) {
    return (
        <ContainerTextComponent>
            <TextComponent text={info} color={color} />
            <TextInfoComponentStyled colorInfo={colorInfo} size={size} decoration={decoration} align={align}>
                {text}
            </TextInfoComponentStyled>
        </ContainerTextComponent>

    );

}
