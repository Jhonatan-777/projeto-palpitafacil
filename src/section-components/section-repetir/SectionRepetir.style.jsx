import styled from "styled-components";
import { tableStyles } from "../../assets/styles/SharedStyles";

export const Section = styled.section`
  width: 100%;
  margin-bottom: 120px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  
  & .container-repeti{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    overflow-x: auto;
    
    &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    }
    
    &::-webkit-scrollbar-track {
    background: #fffbfe;
    border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
    background: #c5b2ca;
    border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
    background: #88718f;
    }
  }
  
  @media (max-width: 760px) {
    margin-bottom: 60px;
  }
`
export const TitleSection = styled.h2`
  font-family: ${({ theme }) => theme.family.roboto};
  font-size: ${({ theme }) => theme.sizes.l};
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.s};
  color: ${({ theme }) => theme.colors.titleColor};
  text-transform: capitalize;
  margin-bottom: 40px;
  
  @media (max-width: 760px) {
    font-size: ${({ theme }) => theme.sizes.m};
    margin-bottom: 20px;
  }
`
export const ContainerRepeti = styled.div`
  margin-bottom: 20px;
  & h3 {
    font-family: ${({ theme }) => theme.family.roboto};
    font-size: ${({ theme }) => theme.sizes.m};
    color: ${({ theme }) => theme.colors.textColor};
    font-weight: ${({ theme }) => theme.weight.medium};
    margin-bottom: 20px;
  }
  
  @media (max-width: 760px) {
    
    & h3 {
      font-size: ${({ theme }) => theme.sizes.s};
      margin-bottom: 10px;
    }
  }
`
export const Table = styled.table`
  ${tableStyles}
`
