import PropTypes from 'prop-types';
import { numbersNotDrawn, numerosRepetidoUmaVez, numerosRepetidoDuasVez, numerosRepetidoTresVez, numerosRepetidoQuatroVez } from "../../assets/features/analise-numeros/AnaliseNumeros";

import { Section, TitleSection, Table, ContainerRepeti } from './SectionRepetir.style';

const SectionRepetir = () =>
{
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
        <ContainerRepeti>
          <h3>Sorteado 4 vezes</h3>

          <Table>
            <TabelaNumeros numeros={numerosRepetidoQuatroVez} />
          </Table>
        </ContainerRepeti>

        <ContainerRepeti>
          <h3>Sorteado 3 vezes</h3>

          <Table>
            <TabelaNumeros numeros={numerosRepetidoTresVez} titulo="Repetiu tres vezes" />
          </Table>
        </ContainerRepeti>

        <ContainerRepeti>
          <h3>Sorteado 2 vezes</h3>

          <Table>
            <TabelaNumeros numeros={numerosRepetidoDuasVez} />
          </Table>
        </ContainerRepeti>

        <ContainerRepeti>
          <h3>Sorteado 1 vez</h3>

          <Table>
            <TabelaNumeros numeros={numerosRepetidoUmaVez} />
          </Table>
        </ContainerRepeti>

        <ContainerRepeti>
          <h3>Não sorteado</h3>

          <Table>
            <TabelaNumeros numeros={numbersNotDrawn} />
          </Table>
        </ContainerRepeti>
      </div>
    </Section>
  )
}

export default SectionRepetir
