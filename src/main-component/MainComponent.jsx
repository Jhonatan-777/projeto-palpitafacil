import { MainContainer, LimitContainer } from "./MainComponent.style"

import SectionSorteios from "../section-components/section-sorteios/SectionSorteios"
import SectionPalpite from "../section-components/section-palpite/SectionPalpite"
import SectionRepetir from "../section-components/section-repetir/SectionRepetir"

const MainComponent = () =>
{
  return (
    <MainContainer>
      <LimitContainer>
        <SectionSorteios />
        <SectionRepetir />
        <SectionPalpite />
      </LimitContainer>
    </MainContainer>
  )
}

export default MainComponent