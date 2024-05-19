import styled from "styled-components";
import { colors } from "../../utils/colors";
import { IoIosArrowBack } from "react-icons/io";

export const ContainerPageEdit = styled.body`
  background-color: ${colors.primary};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.section`
  display: flex;
  width: 50vw;
  height: 90vh;
  background-color: ${colors.bgcolor};
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  box-shadow: 2px 2px 10px ${colors.transparent_dark};
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    width: 80vw;
  }
`;
export const FormEdit = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    > *:nth-child(7) {
    margin-top: 1rem; 
  }
    @media screen and (max-width: 768px) {
        align-items: center;
    }
`;
export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
export const IconBack = styled(IoIosArrowBack)`
    color: ${props => props.color || colors.primary};
    font-size: ${props => props.size || '18px'};
    transition: color 0.3s ease;
    &:hover {
        color: ${props => props.hoverColor || colors.bgcolorsecundary};
    }
    @media screen and (max-width: 768px) {
      width: 1.5rem;
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

export const ContainerAux = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: transparent;
`;