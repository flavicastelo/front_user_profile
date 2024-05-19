import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../utils/colors";

export const TextComponentStyled = styled.p`
    color: ${props => props.color || colors.text_primary};
    font-size: ${props => props.size || '1rem'};
    text-align: ${props => props.align || 'center'};;
    text-decoration: ${props => props.decoration || 'none'};
    margin-bottom: 0.2rem;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;
