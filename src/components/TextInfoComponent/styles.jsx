import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../utils/colors";

export const ContainerTextComponent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid wheat;
`;

export const TextInfoComponentStyled = styled.p`
    color: ${props => props.colorInfo || colors.primary};
    font-size: ${props => props.size || '1rem'};
    text-align: ${props => props.align || 'center'};;
    text-decoration: ${props => props.decoration || 'none'};
    @media screen and (max-width: 768px) {
        font-size: ${props => props.size || '0.8rem'};
    }
`;
