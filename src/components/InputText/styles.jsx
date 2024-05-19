import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";

export const InputContainer = styled.div`
  width: 100%;
`;

export const InputField = styled.input`
    width:  ${props => props.width || "100%"};
    height: ${props => props.height || "2rem"};
    padding: 0.75rem;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid  ${colors.bgcolorsecundary};
    outline: none;
    color: ${colors.secundary};
    ::placeholder {
    color: ${colors.bgcolorsecundary};
    }
    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const Label = styled.label`
  position: relative;
  top: 0.5rem;
  left: 0.75rem;
  font-size: 0.8rem;
  color: ${colors.bgcolorsecundary};
  background-color: white;
`;