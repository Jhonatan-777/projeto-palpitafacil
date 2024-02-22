import { containerStyles } from "../assets/styles/SharedStyles";
import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  padding-top: 120px;
  
  @media (max-width: 790px) {
    padding-top: 60px;
  }
`
export const LimitContainer = styled.div`
  ${containerStyles}
`