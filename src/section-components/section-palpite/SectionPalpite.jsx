import DataHora from "../../assets/components/data-hora/DataHora"
import TirarPrint from "../../assets/components/tirar-print/TirarPrint";
import { Section, TitleSection, ContainerPalpite, Table, Tr, BtnTd, Button, ContainerPalpiteSelecionado, ContainerPalpiteNumeros } from './SectionPalpite.style';

import { useState, useEffect } from 'react';

const SectionPalpite = () =>
{
  const [numerosSelecionados, setNumerosSelecionados] = useState([]);
  const limiteNumerosSelecionados = 20; // Defina o limite desejado

  useEffect(() =>
  {
    const numerosArmazenados = localStorage.getItem('numerosSelecionados');
    const numerosArmazenadosArray = numerosArmazenados ? JSON.parse(numerosArmazenados) : [];

    // Ajuste para respeitar o limite
    const numerosRestritos = numerosArmazenadosArray.slice(0, limiteNumerosSelecionados);

    // Atualizar o estado com os números ajustados
    setNumerosSelecionados(numerosRestritos);
  }, []);

  const calcularValorAposta = (quantidadeNumerosSelecionados) =>
  {
    if (quantidadeNumerosSelecionados <= 15)
    {
      return "R$ 3,00";
    } else if (quantidadeNumerosSelecionados <= 16)
    {
      return "R$ 48,00";
    } else if (quantidadeNumerosSelecionados <= 17)
    {
      return "R$ 408,00";
    } else if (quantidadeNumerosSelecionados <= 18)
    {
      return "R$ 2.448,00";
    } else if (quantidadeNumerosSelecionados <= 19)
    {
      return "R$ 11.628,00";
    } else if (quantidadeNumerosSelecionados <= 20)
    {
      return "R$ 46.512,00";
    } else
    {
      return "Valor não calculado";
    }
  };

  const handleNumeroClick = (numero) =>
  {
    const numeroEstaSelecionado = numerosSelecionados.includes(numero);
    const numerosArmazenados = localStorage.getItem('numerosSelecionados');
    const numerosArmazenadosArray = numerosArmazenados ? JSON.parse(numerosArmazenados) : [];

    // Ajuste para respeitar o limite
    const numerosRestritos = numeroEstaSelecionado
      ? numerosArmazenadosArray.filter((num) => num !== numero)
      : [...numerosArmazenadosArray.slice(0, limiteNumerosSelecionados - 1), numero];

    // Armazenar o novo valor no localStorage
    localStorage.setItem('numerosSelecionados', JSON.stringify(numerosRestritos));

    // Atualizar o estado com os números ajustados
    setNumerosSelecionados(numerosRestritos);
  };


  const numerosP = numerosSelecionados
    .sort((a, b) => a - b) // Ordena os números em ordem crescente
    .map((numero) => (
      <div
        key={numero}
        onClick={() => handleNumeroClick(numero)}
        className={numerosSelecionados.includes(numero) ? 'selecionado' : ''}
      >
        {numero}
      </div>
    ));

  const valorAposta = calcularValorAposta(numerosSelecionados.length);

  return (
    <Section>
      <TitleSection>Realizar Palpite</TitleSection>
      <div className="container">
        <ContainerPalpite>
          <p>Após realizar seu palpite lembre-se de anota-lo:</p>
          <Table>
            <div className="tbody">
              <Tr>
                <BtnTd onClick={() => handleNumeroClick(1, numerosSelecionados, setNumerosSelecionados)} id="num_1" className={numerosSelecionados.includes(1) ? 'selecionado' : ''}>01</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(2, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(2) ? 'selecionado' : ''} id="num_2">02</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(3, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(3) ? 'selecionado' : ''} id="num_3">03</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(4, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(4) ? 'selecionado' : ''} id="num_4">04</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(5, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(5) ? 'selecionado' : ''} id="num_5">05</BtnTd>
              </Tr>
              <Tr>
                <BtnTd onClick={() => handleNumeroClick(6, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(6) ? 'selecionado' : ''} id="num_6">06</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(7, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(7) ? 'selecionado' : ''} id="num_7">07</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(8, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(8) ? 'selecionado' : ''} id="num_8">08</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(9, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(9) ? 'selecionado' : ''} id="num_9">09</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(10, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(10) ? 'selecionado' : ''} id="num_10">10</BtnTd>
              </Tr>
              <Tr>
                <BtnTd onClick={() => handleNumeroClick(11, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(11) ? 'selecionado' : ''} id="num_11">11</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(12, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(12) ? 'selecionado' : ''} id="num_12">12</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(13, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(13) ? 'selecionado' : ''} id="num_13">13</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(14, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(14) ? 'selecionado' : ''} id="num_14">14</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(15, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(15) ? 'selecionado' : ''} id="num_15">15</BtnTd>
              </Tr>
              <Tr>
                <BtnTd onClick={() => handleNumeroClick(16, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(16) ? 'selecionado' : ''} id="num_16">16</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(17, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(17) ? 'selecionado' : ''} id="num_17">17</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(18, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(18) ? 'selecionado' : ''} id="num_18">18</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(19, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(19) ? 'selecionado' : ''} id="num_19">19</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(20, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(20) ? 'selecionado' : ''} id="num_20">20</BtnTd>
              </Tr>
              <Tr>
                <BtnTd onClick={() => handleNumeroClick(21, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(21) ? 'selecionado' : ''} id="num_21">21</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(22, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(22) ? 'selecionado' : ''} id="num_22">22</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(23, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(23) ? 'selecionado' : ''} id="num_23">23</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(24, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(24) ? 'selecionado' : ''} id="num_24">24</BtnTd>
                <BtnTd onClick={() => handleNumeroClick(25, numerosSelecionados, setNumerosSelecionados)} className={numerosSelecionados.includes(25) ? 'selecionado' : ''} id="num_25">25</BtnTd>
              </Tr>
            </div>
          </Table>
          <p className="info-selecionados">Números Selecionados: {numerosSelecionados.length}</p>
          <p className="lembrete"><span>- aposta minima 15 numeros
            <br />- aposta maxima 20 numeros</span></p>
          <p><span>Pra ajuda-lo em seu palpite consulte o resultado dos últimos sorteios*</span></p>
          <p><span>ou consulte os numeros que mais se repetiram**</span></p>
        </ContainerPalpite>

        <div className="line-detail-intern"></div>

        <ContainerPalpiteSelecionado className="card-palpite">
          <div className="container-title">
            <h3 className="title">Seu Palpite:</h3>
            <DataHora />
          </div>
          <Table>
            <ContainerPalpiteNumeros>
              {numerosP}
            </ContainerPalpiteNumeros>
          </Table>
          <div className="container-info">
            <p className="info-selecionados">Números Selecionados: {numerosSelecionados.length}</p>
            <p className="info-valor">Valor Aposta: {valorAposta}</p>
            <div className="container-btn">
              <TirarPrint />
              <Button href="https://www.loteriasonline.caixa.gov.br/silce-web/#/lotofacil" target="_blank" width="200px" color="#451B50" $background="transparent" $border="2px solid #451B50">ir apostar</Button>
            </div>
            <p className="info-alert"><span>Tirar Print ira baixar uma imagem de seu palpite.</span></p>
          </div>
        </ContainerPalpiteSelecionado>
      </div>
    </Section>
  )
}

export default SectionPalpite