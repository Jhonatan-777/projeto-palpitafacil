import { fetchData, fetchDataAnterior, fetchDataTerceiro, fetchDataQuarto } from "../../data/loreriaAPI/SorteiosLoteriaAPI"

// Chama a função fetchData para obter os dados
const {
  numeroConcursoAtual,
  listaDezenasAtual = [],
} = await fetchData();
const {
  listaDezenasAnterior = []
} = await fetchDataAnterior(numeroConcursoAtual);

const {
  listaDezenasTerceiro = []
} = await fetchDataTerceiro(numeroConcursoAtual);
const {
  listaDezenasQuarto = []
} = await fetchDataQuarto(numeroConcursoAtual);

const allElements = listaDezenasAtual.concat(listaDezenasAnterior, listaDezenasTerceiro, listaDezenasQuarto);

// Utilizando um Map para armazenar o número de repetições de cada elemento
const repetitionCounts = new Map();
for (const element of allElements)
{
  const count = repetitionCounts.get(element) || 0;
  repetitionCounts.set(element, count + 1);
}

// Criando um objeto aninhando os elementos repetidos com base na frequência de repetição
const repeatedElements = {
  // Elementos repetidos pelo menos uma vez
  '1': [],
  // Elementos repetidos pelo menos duas vezes
  '2': [],
  // Elementos repetidos pelo menos três vezes
  '3': [],
  // Elementos repetidos pelo menos quatro vezes
  '4': [],
};

// Percorrendo o Map e adicionando os elementos repetidos aos respectivos arrays
for (const [element, count] of repetitionCounts.entries())
{
  if (count == 1) repeatedElements['1'].push(element);
  if (count == 2) repeatedElements['2'].push(element);
  if (count == 3) repeatedElements['3'].push(element);
  if (count == 4) repeatedElements['4'].push(element);
}

// Ordenando os elementos do array repetidos uma vez
export const numerosRepetidoUmaVez = repeatedElements['1'].sort((a, b) => a - b);
export const numerosRepetidoDuasVez = repeatedElements['2'].sort((a, b) => a - b);
export const numerosRepetidoTresVez = repeatedElements['3'].sort((a, b) => a - b);
export const numerosRepetidoQuatroVez = repeatedElements['4'].sort((a, b) => a - b);


// Verificar quais numeros não foram sorteados
const allNumbers = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];

// Encontrar os números que não estão presentes na lista de números sorteados.
export const numbersNotDrawn = allNumbers.filter(number => !allElements.includes(number));

