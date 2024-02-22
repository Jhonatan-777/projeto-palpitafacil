import { Section, TitleSection, ContainerConcurso, Table } from './SectionSorteios.style';

import { fetchData, fetchDataAnterior, fetchDataTerceiro, fetchDataQuarto } from '../../assets/data/loreriaAPI/SorteiosLoteriaAPI';
import { useState } from "react";
import { useEffect } from "react";

const SectionSorteios = () =>
{
  const [dataAtual, setDataAtual] = useState({ listaDezenasAtual: [], dataApuracaoAtual: '', numeroConcursoAtual: '' });
  const [dataAnterior, setDataAnterior] = useState({ listaDezenasAnterior: [], dataApuracaoAnterior: '', numeroConcursoAnterior: '' });
  const [dataTerceiro, setDataTerceiro] = useState({ listaDezenasTerceiro: [], dataApuracaoTerceiro: '', numeroConcursoTerceiro: '' });
  const [dataQuarto, setDataQuarto] = useState({ listaDezenasQuarto: [], dataApuracaoQuarto: '', numeroConcursoQuarto: '' });

  useEffect(() =>
  {
    const getData = async () =>
    {
      try
      {
        // Obtenha o número do concurso atual
        const { numeroConcursoAtual, listaDezenasAtual, dataApuracaoAtual } = await fetchData();

        // Atualize dataAtual com os dados do concurso atual
        setDataAtual({ numeroConcursoAtual, listaDezenasAtual, dataApuracaoAtual });

        // Chame fetchDataAnterior passando o número do concurso atual
        const resultAnterior = await fetchDataAnterior(numeroConcursoAtual);
        setDataAnterior(resultAnterior);

        // Chame fetchDataTerceiro passando o número do concurso anterior
        const resultTerceiro = await fetchDataTerceiro(numeroConcursoAtual);
        setDataTerceiro(resultTerceiro);

        // Chame fetchDataQuarto passando o número do concurso anterior
        const resultQuarto = await fetchDataQuarto(numeroConcursoAtual);
        setDataQuarto(resultQuarto);
      } catch (error)
      {
        console.error("Erro ao obter dados dos sorteios:", error);
      }
    };

    getData();
  }, []);

  const renderTabela = (listaDezenas) =>
  {
    return (
      <Table>
        <tbody>
          {listaDezenas.map((dezena, index) => (
            <tr key={index}>
              <td>{dezena}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <Section>
      <TitleSection>Sorteios Realizados</TitleSection>
      <div className="container-concursos">
        <ContainerConcurso>
          <h3>Concurso: {dataAtual.numeroConcursoAtual}</h3>
          <p>Data do sorteio: {dataAtual.dataApuracaoAtual}</p>
          {renderTabela(dataAtual.listaDezenasAtual)}
        </ContainerConcurso>
        <ContainerConcurso>
          <h3>Concurso: {dataAnterior.numeroConcursoAnterior}</h3>
          <p>Data do sorteio: {dataAnterior.dataApuracaoAnterior}</p>
          {renderTabela(dataAnterior.listaDezenasAnterior)}
        </ContainerConcurso>
        <ContainerConcurso>
          <h3>Concurso: {dataTerceiro.numeroConcursoTerceiro}</h3>
          <p>Data do sorteio: {dataTerceiro.dataApuracaoTerceiro}</p>
          {renderTabela(dataTerceiro.listaDezenasTerceiro)}
        </ContainerConcurso>
        <ContainerConcurso>
          <h3>Concurso: {dataQuarto.numeroConcursoQuarto}</h3>
          <p>Data do sorteio: {dataQuarto.dataApuracaoQuarto}</p>
          {renderTabela(dataQuarto.listaDezenasQuarto)}
        </ContainerConcurso>
      </div>
    </Section>
  );
};

export default SectionSorteios;