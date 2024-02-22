// styles
import { css } from 'styled-components';

export const containerStyles = css`
  max-width: 1160px;
  margin: 0 auto;
`;

export const titleStyles = css`
  font-family: ${({ theme }) => theme.family.vazi};
  font-size: ${({ theme }) => theme.sizes.xl};
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.l};
  /* border-bottom: 2px dotted #422b472f; */
  border-top: 2px dashed #af90b62e;
  padding-top: 10px;
  
  @media (max-width: 760px) {
    font-size: ${({ theme }) => theme.sizes.l};
    letter-spacing: ${({ theme }) => theme.letterSpacing.l};
  }
`;

export const tableStyles = css`
  width: 364px;
  min-height: 223px;
  background-color: ${({ theme }) => theme.colors.bgColorGrade};
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s;
  
  & tbody {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    transition: all 0.3s;
    
    & tr {
      display: flex;
      gap: 10px;
      transition: all 0.3s;
      
      & td{
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
      }
    }
  }
  
  @media (max-width: 760px) {
    width: 284px;
    min-height: 174px;
    padding: 5px;
  
  & tbody {
    gap: 5px;
    
    & tr {
      gap: 5px;
      
      & td{
        width: 50px;
        height: 50px;
        font-size: ${({ theme }) => theme.sizes.xxs};
      }
    }
  }
  }
`