export const fetchData = async () =>
{
  try
  {
    const endpointAtual = `https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/`;
    const responseAtual = await fetch(endpointAtual);

    if (!responseAtual.ok)
    {
      return {
        listaDezenasAtual: [],
        dataApuracaoAtual: null,
        numeroConcursoAtual: null,
      };
    }

    const dataAtual = await responseAtual.json();
    const { listaDezenas: listaDezenasAtual, dataApuracao: dataApuracaoAtual, numero: numeroConcursoAtual } = dataAtual;

    return {
      listaDezenasAtual,
      dataApuracaoAtual,
      numeroConcursoAtual,
    };
  } catch (error)
  {
    console.error("Erro ao buscar dados da API:", error);
    return {
      listaDezenasAtual: [],
      dataApuracaoAtual: null,
      numeroConcursoAtual: null,
    };
  }
};

// Modificação em fetchDataAnterior para retornar o número do concurso anterior
export const fetchDataAnterior = async (numeroConcurso) =>
{
  try
  {
    const concursoAnterior = numeroConcurso - 1;
    const endpointAnterior = `https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/${concursoAnterior}`;
    const responseAnterior = await fetch(endpointAnterior);

    if (!responseAnterior.ok)
      return {
        listaDezenasAnterior: [],
        dataApuracaoAnterior: null,
        numeroConcursoAnterior: null,
      };

    const dataAnterior = await responseAnterior.json();
    const { listaDezenas: listaDezenasAnterior, dataApuracao: dataApuracaoAnterior, numero: numeroConcursoAnterior } = dataAnterior;

    return {
      listaDezenasAnterior,
      dataApuracaoAnterior,
      numeroConcursoAnterior,
    };
  } catch (error)
  {
    console.error("Erro ao buscar dados da API:", error);
    return {
      listaDezenasAnterior: [],
      dataApuracaoAnterior: null,
      numeroConcursoAnterior: null,
    };
  }
}

export const fetchDataTerceiro = async (numeroConcurso) =>
{
  try
  {
    const concursoTerceiro = numeroConcurso - 2;
    const endpointTerceiro = `https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/${concursoTerceiro}`;
    const responseTerceiro = await fetch(endpointTerceiro);

    if (!responseTerceiro.ok)
      return {
        listaDezenasTerceiro: [],
        dataApuracaoTerceiro: null,
        numeroConcursoTerceiro: null,
      };

    const dataTerceiro = await responseTerceiro.json();
    const { listaDezenas: listaDezenasTerceiro, dataApuracao: dataApuracaoTerceiro, numero: numeroConcursoTerceiro } = dataTerceiro;

    return {
      listaDezenasTerceiro,
      dataApuracaoTerceiro,
      numeroConcursoTerceiro,
    };
  } catch (error)
  {
    {
      console.error("Erro ao buscar dados da API:", error);
      return {
        listaDezenasTerceiro: [],
        dataApuracaoTerceiro: null,
        numeroConcursoTerceiro: null,
      };
    }
  }
};

export const fetchDataQuarto = async (numeroConcurso) =>
{
  try
  {
    const concursoQuarto = numeroConcurso - 3;
    const endpointQuarto = `https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/${concursoQuarto}`;
    const responseQuarto = await fetch(endpointQuarto);

    if (!responseQuarto.ok)
      return {
        listaDezenasQuarto: [],
        dataApuracaoQuarto: null,
        numeroConcursoQuarto: null,
      };

    const dataQuarto = await responseQuarto.json();
    const { listaDezenas: listaDezenasQuarto, dataApuracao: dataApuracaoQuarto, numero: numeroConcursoQuarto } = dataQuarto;

    return {
      listaDezenasQuarto,
      dataApuracaoQuarto,
      numeroConcursoQuarto,
    };
  } catch (error)
  {
    {
      console.error("Erro ao buscar dados da API:", error);
      return {
        listaDezenasQuarto: [],
        dataApuracaoQuarto: null,
        numeroConcursoQuarto: null,
      };
    }
  }
};
