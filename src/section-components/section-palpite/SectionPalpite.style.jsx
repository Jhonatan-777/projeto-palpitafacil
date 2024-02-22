import styled from "styled-components";
import { titleStyles } from "../../assets/styles/SharedStyles";
import lapisImage from "../../assets/img/icons/icon-lapis.png";

export const Section = styled.section`
  width: 100%;
  margin-bottom: 120px;
  padding: 15px;
  
  & .container {
    display: flex;
    justify-content: space-between;
    
    
    & .line-detail-intern{
      width: 8px;
      background-color: #F6E8F6;
    }
  }
  
  @media (max-width: 1000px) {
    & .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    
    & .line-detail-intern{
      display: none;
    }
  }
  
  @media (max-width: 760px) {
    margin-bottom: 60px;
  }
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
export const ContainerPalpite = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  & p {
    font-family: ${({ theme }) => theme.family.roboto};
    font-size: ${({ theme }) => theme.sizes.xs};
    color: ${({ theme }) => theme.colors.textColor};
    font-weight: ${({ theme }) => theme.weight.regular};
    margin-bottom: 20px;
    max-width: 40ch;
    transition: all 0.3s;
    
    & span {
      font-size: ${({ theme }) => theme.sizes.xxs};
      color: ${({ theme }) => theme.colors.textColorLight};
      transition: all 0.3s;
    }
  }
  
  & p:first-of-type {
    margin-bottom: 40px;
    transition: all 0.3s;
  }
  
  & .lembrete{
    margin-bottom:40px;
    transition: all 0.3s;
  }
  
  & .info-selecionados {
      font-family: ${({ theme }) => theme.family.roboto};
      font-size: ${({ theme }) => theme.sizes.xs};
      color: ${({ theme }) => theme.colors.textColor};
      font-weight: ${({ theme }) => theme.weight.regular};
      margin-bottom: 10px;
      transition: all 0.3s;
    }
  
  @media (max-width: 760px) {
    & p {
    font-size: ${({ theme }) => theme.sizes.xxs};
    margin-bottom: 10px;
    max-width: 30ch;
    
    & span {
      font-size: ${({ theme }) => theme.sizes.xxxs};
    }
  }
  
  & p:first-of-type {
    margin-bottom: 20px;
  }
  & .info-selecionados {
      font-size: ${({ theme }) => theme.sizes.xxs};
      margin-bottom: 5px;
    }
  
  & .lembrete{
    margin-bottom: 20px;
  }
  }
`
export const Table = styled.div`
  width: 360px;
  min-height: 290px;
  background-color: ${({ theme }) => theme.colors.bgColorGrade};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: all 0.3s;
  
  & .tbody {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    transition: all 0.3s;
  }
  
  @media (max-width: 760px) {
    width: 284px;
    min-height: 229px;
    padding: 7px;
  
    & .tbody {
      gap: 5px;
      }
  }
`

export const Tr = styled.div`
  display: flex;
  gap: 10px;
  transition: all 0.3s;
  
  @media (max-width: 760px) {
    gap: 5px;
  }
`
export const BtnTd = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.family.mono};
  font-size: ${({ theme }) => theme.sizes.s};
  font-weight: ${({ theme }) => theme.weight.regular};
  transition: all 0.3s;
  
  @media (hover: hover) {
    /* when hover is supported */
    &:hover{
      background-color: #803d91;
      color: ${({ theme }) => theme.colors.white};
    }
  }
  
  &.selecionado {
    background-color: #87007E;
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  }
  
  @media (max-width: 760px) {
    width: 50px;
    height: 50px;
    font-size: ${({ theme }) => theme.sizes.xxs};
  }
`

export const ContainerPalpiteNumeros = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  transition: all 0.3s;
  
  & .selecionado {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.family.mono};
    font-size: ${({ theme }) => theme.sizes.s};
    font-weight: ${({ theme }) => theme.weight.regular};
    transition: all 0.3s;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
  
  @media (hover: hover) {
    /* when hover is supported */
    & .selecionado:hover{
    background-color: #803d91;
    color: ${({ theme }) => theme.colors.white};
    }
  }
  
  @media (max-width: 760px) {
    gap: 5px;
    
    & .selecionado {
    width: 50px;
    height: 50px;
    font-size: ${({ theme }) => theme.sizes.xs};
    }
  }
`

export const Button = styled.a`
  cursor: pointer;
  width: ${(props) => props.width};
  height: 60px;
  background-color: ${(props) => props.$background};
  border: ${(props) => props.$border};
  font-family: ${({ theme }) => theme.family.roboto};
  font-size: ${({ theme }) => theme.sizes.xs};
  color: ${(props) => props.color};
  font-weight: ${({ theme }) => theme.weight.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacing.m};
  text-transform: uppercase;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  
  /* Media query para dispositivos que suportam hover */
  @media (hover: hover) {
    /* when hover is supported */
    &:hover{
    background-color: #803d91;
    color: ${({ theme }) => theme.colors.white};
    }
  }
  
  @media (max-width: 760px) {
    width: ${(props) => props.width};
    height: 50px;
    font-size: ${({ theme }) => theme.sizes.xxs};
  }
`

export const ContainerPalpiteSelecionado = styled.div`
  width: 500px;
  padding: 40px;
  background: ${({ theme }) => theme.colors.bgColor};
  transition: all 0.3s;
  
  & .container-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    transition: all 0.3s;
    
    & .title {
      font-family: ${({ theme }) => theme.family.roboto};
      font-size: ${({ theme }) => theme.sizes.l};
      color: ${({ theme }) => theme.colors.textColor};
      letter-spacing: ${({ theme }) => theme.letterSpacing.m};
      font-weight: ${({ theme }) => theme.weight.medium};
      transition: all 0.3s;
    }
    
    .container-data {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: flex-end;
      transition: all 0.3s;
      
      & p {
        font-family: ${({ theme }) => theme.family.roboto};
        font-size: ${({ theme }) => theme.sizes.xs};
        color: ${({ theme }) => theme.colors.textColorLight};
        font-weight: ${({ theme }) => theme.weight.regular};
        transition: all 0.3s;
      }
    }
  }
  
  .container-info {
    & .info-selecionados {
      font-family: ${({ theme }) => theme.family.roboto};
      font-size: ${({ theme }) => theme.sizes.xs};
      color: ${({ theme }) => theme.colors.textColor};
      font-weight: ${({ theme }) => theme.weight.medium};
      margin-bottom: 10px;
      transition: all 0.3s;
    }
    & .info-valor {
      font-family: ${({ theme }) => theme.family.roboto};
      font-size: ${({ theme }) => theme.sizes.m};
      color: ${({ theme }) => theme.colors.textColor};
      font-weight: ${({ theme }) => theme.weight.medium};
      letter-spacing: ${({ theme }) => theme.letterSpacing.s};
      margin-bottom: 30px;
      transition: all 0.3s;
    }
    
    & .container-btn {
      display: flex;
      justify-content: space-between;
      transition: all 0.3s;
    }
    
    & .info-alert {
      font-family: ${({ theme }) => theme.family.roboto};
      font-size: ${({ theme }) => theme.sizes.xxs};
      color: #89728d;
      font-weight: ${({ theme }) => theme.weight.medium};
      margin: 10px 0;
      transition: all 0.3s;
    }
  }
  
  @media (max-width: 760px) {
    width: 380px;
    padding: 30px;
  
  & .container-title {
    margin-bottom: 15px;
    
    & .title {
      font-size: ${({ theme }) => theme.sizes.m};
    }
    
    .container-data {
      gap: 5px;
      
      & p {
        font-size: ${({ theme }) => theme.sizes.xxs};
      }
    }
  }
  
  .container-info {
    & .info-selecionados {
      font-size: ${({ theme }) => theme.sizes.xxs};
      margin-bottom: 5px;
    }
    & .info-valor {
      font-size: ${({ theme }) => theme.sizes.s};
      margin-bottom: 15px;
    }
    
    & .container-btn {
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
    }
    
    & .info-alert {
      font-size: ${({ theme }) => theme.sizes.xxxs};
    }
  }
  }
  
  @media (max-width: 400px) {
    width: 100%;
    padding: 20px;
  }
`


