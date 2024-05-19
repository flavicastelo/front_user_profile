import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const ContainerSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 25dvw;
  height:calc(10dvh + 40dvh) ;
  @media screen and (max-width: 768px) {
    width: 80dvw;
  }
`;

export const ContainerText = styled.article`
  margin: 2rem 0; 
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
   margin: 1rem 0;
  }
`;

export const ContainerLayout = styled.div`
    display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 60dvh;
  border-top: none;
  border-radius: 5%;
  position: absolute;
  top: 0;
  background-color: ${colors.bgcolorsecundary};
  @media screen and (max-width: 768px) {
   justify-content: center;
   padding-top: 4rem;
   height: 40dvh;
  }
 
`;

export const Photo = styled.img`
  position: absolute;
  top: -12.5dvh;
  width: 25dvh;
  height: 25dvh;
  border-radius: 50%;
  object-fit: cover;
  border: 1rem solid ${colors.bgcolorsecundary}; 
  box-sizing: border-box;
  z-index: 2;
`;