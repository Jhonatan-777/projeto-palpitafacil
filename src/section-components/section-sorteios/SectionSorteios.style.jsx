import styled from "styled-components";
import { titleStyles, tableStyles } from "../../assets/styles/SharedStyles";
import lapisImage from "../../assets/img/icons/icon-lapis.png";

export const Section = styled.section`
  width: 100%;
  margin-bottom: 120px;
  padding: 15px;
  
  & .container-concursos{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    overflow-x: auto;
    
    &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    }
    
    &::-webkit-scrollbar-track {
    background: #fbe9ff;
    border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
    background: #d0aada;
    border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
    background: #84648d;
    }
  }
  
  @media (max-width: 760px) {
    margin-bottom: 60px;
  }
`
export const TitleSection = styled.h2`
  ${titleStyles}
  color: ${({ theme }) => theme.colors.titleColor};
  text-transform: capitalize;
  margin-bottom: 40px;
  transition: all 0.3s;
  position: relative;
  
  &::before{
    z-index: 100;
    position: absolute;
    content: "";
    display: block;
    background: url(${lapisImage});
    background-position: center;
    background-size: contain;
    width: 60px;
    height: 60px;
    top: -15px;
    right: 0;
  }
  
  @media (max-width: 760px) {
      margin-bottom: 20px;
  }
`
export const ContainerConcurso = styled.div`
  margin-bottom: 20px;

  & h3 {
    font-family: ${({ theme }) => theme.family.roboto};
    font-size: ${({ theme }) => theme.sizes.l};
    color: ${({ theme }) => theme.colors.textColor};
    letter-spacing: ${({ theme }) => theme.letterSpacing.m};
    font-weight: ${({ theme }) => theme.weight.medium};
    margin-bottom: 5px;
    transition: all 0.3s;
  }
  
  & p {
    font-family: ${({ theme }) => theme.family.roboto};
    font-size: ${({ theme }) => theme.sizes.s};
    color: ${({ theme }) => theme.colors.textColor};
    letter-spacing: ${({ theme }) => theme.letterSpacing.m};
    font-weight: ${({ theme }) => theme.weight.medium};
    margin-bottom: 20px;
    transition: all 0.3s;
  }
  
  @media (max-width: 760px) {
    & h3 {
      font-size: ${({ theme }) => theme.sizes.m};
    }
    & p {
      font-size: ${({ theme }) => theme.sizes.xs};
      margin-bottom: 15px;
    }
  }
  
`
export const Table = styled.table`
  ${tableStyles}
`
