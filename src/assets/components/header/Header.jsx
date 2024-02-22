import { HeaderContainer, LimitContainer } from "./Header.style"
import logoPalpitafacil from "../../img/palpitafacil-logo.png";
import imagemAnotas from "../../img/icons/icon-anota-aposta.png";

const Header = () =>
{
  return (
    <HeaderContainer>
      <LimitContainer>
        <div className="desc">
          <a className="logo" href="#"><img src={logoPalpitafacil} alt="logo palpitafacil" /></a>
          <p>Confira os últimos sorteios, números que mais se repetiram e marque seu palpite</p>
        </div>
        <div className="container-image">
          <div className="image">
            <img src={imagemAnotas} alt="imagem aposta anotada" />
          </div>
        </div>
      </LimitContainer>
    </HeaderContainer>
  )
}

export default Header