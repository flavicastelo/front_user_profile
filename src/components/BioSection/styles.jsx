import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { FiEdit } from "react-icons/fi";
import { FaSave, FaTimes } from 'react-icons/fa';

export const ContainerBio = styled.section`
  display: flex;
  width: 50%;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 80dvw;
    justify-content: end;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  margin: 1rem auto;
`;
export const TextareaField = styled.textarea`
  width:  ${props => props.width || "100%"};
  height: ${props => props.height || "8rem"};
  padding: 0.75rem;
  background-color: transparent;
  border: none;
  outline: none;
  resize: none;
  text-align: center;
  color: ${colors.secundary};
  ::placeholder {
    color: ${colors.bgcolorsecundary};
  }
  @media screen and (max-width: 768px) {
    height: ${props => props.height || "4rem"};
    height: 12rem;
  }
`;

export const ContainerButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
    color: ${props => props.color || colors.text_primary};
  &:hover {
    color: ${props => props.hoverColor || colors.text_primary};
  }

`;

export const IconEdit = styled(FiEdit)`
  margin-right: 4px; 
  color: ${props => props.color || colors.secundary};
  font-size: ${props => props.size || '18px'};
  transition: color 0.3s ease;
  &:hover {
    color: ${props => props.hoverColor || colors.primary};
  }
`;

export const IconSave = styled(FaSave)`
    margin-right: 4px; 
    color: ${props => props.color || colors.secundary};
    font-size: ${props => props.size || '18px'};
    transition: color 0.3s ease;
    &:hover {
        color: ${props => props.hoverColor || colors.primary};
    }
`;

export const IconCancel = styled(FaTimes)`
    color: ${props => props.color || colors.secundary};
    font-size: ${props => props.size || '18px'};
    transition: color 0.3s ease;
    &:hover {
        color: ${props => props.hoverColor || colors.primary};
    }
`;
