import { FooterContainer, LimitContainer } from "./Footer.style"

import logoPalpitafacilF from "../../img/palpitafacil-logo-footer.png";

const Footer = () =>
{
  return (
    <FooterContainer>
      <LimitContainer>
        <div className="container-logo">
          <img src={logoPalpitafacilF} alt="imagem logo palpitafacil" />
        </div>
        <div className="container-line-loto">
          <div className="line-detail-footer"></div>
        </div>
        <div className="container-copy">
          <p className="copy">© 2024 J. Todos os direitos reservados</p>
          <div className="copy-link">
            <p className="copy">Web-Site Desenvolvido por <a href="https://github.com/Jhonatan-777" target="_blank" rel="noreferrer">Jhonatan.</a></p>
            <a className="Icongeek" href="https://www.flaticon.com/br/autores/icongeek26" target="_blank" rel="noreferrer" title="autores ícones">ícones criados por Icongeek26 - Flaticon</a>
          </div>
        </div>
      </LimitContainer>

    </FooterContainer>
  )
}

export default Footer