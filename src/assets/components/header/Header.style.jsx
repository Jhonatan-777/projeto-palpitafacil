import { containerStyles } from "../../styles/SharedStyles";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background: linear-gradient(120deg, ${({ theme }) => theme.colors.bgColor}, #e8bff8);
  
  @media (max-width: 790px) {
    background: ${({ theme }) => theme.colors.bgColor};
  }
`

export const LimitContainer = styled.div`
  ${containerStyles}
  padding: 80px 15px;
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  
  & .desc{
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    & .logo{
      display: inline-block;
      width: 350px;
      transition: all 0.3s;
    
      & img{
        width: 100%;
      }
    }
    
    & p{
      max-width: 30ch;
      color: ${({ theme }) => theme.colors.textColor};
      font-family: ${({ theme }) => theme.family.roboto};
      font-size: ${({ theme }) => theme.sizes.s};
      font-weight: ${({ theme }) => theme.weight.regular};
      letter-spacing: ${({ theme }) => theme.letterSpacing.m};
    }
  }
  
  & .container-image{
    position: relative;
    width: 400px;
    top: -60px;
    right: 35px;
    
    & .image {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  
  @media (max-width: 790px) {
    padding: 40px 15px;
    justify-content: left;
    
    & .desc{
    
    & .logo{
      width: 270px;
    }
  }
    
    & .container-image{
    display: none;
  }
  }
`
