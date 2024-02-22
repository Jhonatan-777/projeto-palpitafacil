import { containerStyles } from "../../styles/SharedStyles";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.titleColor};
`

export const LimitContainer = styled.div`
  ${containerStyles}
  padding: 15px;
  padding-top: 60px;
  padding-bottom: 40px;
  
  & .container-logo{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    
    & img {
      width: 200px;
    }
  }
  
  & .container-line-loto{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    
    & .line-detail-footer{
      width: 100%;
      height: 4px;
      margin-bottom: 10px;
      background-color: #32123b;
    }
  }
  
  & .container-copy{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    
    & .copy{
    font-family: ${({ theme }) => theme.family.roboto};
    font-size: ${({ theme }) => theme.sizes.xs};
    font-weight: ${({ theme }) => theme.weight.regular};
    letter-spacing: ${({ theme }) => theme.letterSpacing.s};
    color: #b8abbb;
    
    }
    
    & .copy-link{
      & .copy{
        margin-bottom: 14px;
      
        & a{
        color: #eee5ee;
        text-decoration: none;
        transition: all 0.2s;
        
        &:hover {
          color: #fffeff;
        }
      }
      }
      & .Icongeek{
        text-decoration: none;
        display: inline-block;
        text-align: center;
        font-family: ${({ theme }) => theme.family.roboto};
        font-size: ${({ theme }) => theme.sizes.xxxs};
        font-weight: ${({ theme }) => theme.weight.regular};
        letter-spacing: ${({ theme }) => theme.letterSpacing.s};
        color: #928296;
      }
    }
  }
  
  @media (max-width: 760px) {
    padding-top: 40px;
    padding-bottom: 30px;
  
  & .container-line-loto{
    margin-bottom: 20px;
  }
  
  & .copy{
    font-size: ${({ theme }) => theme.sizes.xxs};
    }
  }
`
