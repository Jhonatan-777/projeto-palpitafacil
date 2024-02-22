import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { processarSorteios } from "../../assets/features/analise-numeros/AnaliseNumeros";

import { Section, TitleSection, Table, ContainerRepeti } from './SectionRepetir.style';

const SectionRepetir = () =>
{
  const [resultados, setResultados] = useState(null);

  useEffect(() =>
  {
    async function fetchResultados()
    {
      try
      {
        const dados = await processarSorteios();
        setResultados(dados);
      } catch (error)
      {
        console.error("Erro ao processar os sorteios:", error);
      }
    }

    fetchResultados();
  }, []); // O array vazio assegura que esta função é executada apenas uma vez após a montagem do componente

  const TabelaNumeros = ({ numeros }) => (
    <tbody>
      {Array.from({ length: 3 }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {numeros.slice(rowIndex * 5, rowIndex * 5 + 5).map((numero, cellIndex) => (
            <td key={cellIndex}>{numero || ""}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  TabelaNumeros.propTypes = {
    numeros: PropTypes.array.isRequired,
    titulo: PropTypes.string,
  };

  return (
    <Section>
      <TitleSection>Consulte os nºs mais sorteados</TitleSection>
      <div className="container-repeti">
        {resultados && (
          <>
            <ContainerRepeti>
              <h3>Sorteado 4 vezes</h3>
              <Table>
                <TabelaNumeros numeros={resultados.numerosRepetidoQuatroVez} />
              </Table>
            </ContainerRepeti>
            <ContainerRepeti>
              <h3>Sorteado 3 vezes</h3>
              <Table>
                <TabelaNumeros numeros={resultados.numerosRepetidoTresVez} />
              </Table>
            </ContainerRepeti>
            <ContainerRepeti>
              <h3>Sorteado 2 vezes</h3>
              <Table>
                <TabelaNumeros numeros={resultados.numerosRepetidoDuasVez} />
              </Table>
            </ContainerRepeti>
            <ContainerRepeti>
              <h3>Sorteado 1 vez</h3>
              <Table>
                <TabelaNumeros numeros={resultados.numerosRepetidoUmaVez} />
              </Table>
            </ContainerRepeti>
            <ContainerRepeti>
              <h3>Não sorteado</h3>
              <Table>
                <TabelaNumeros numeros={resultados.numbersNotDrawn} />
              </Table>
            </ContainerRepeti>
          </>
        )}
      </div>
    </Section>
  );
}

export default SectionRepetir;
