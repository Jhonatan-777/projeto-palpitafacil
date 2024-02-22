import { useState, useEffect } from 'react';

function DataHora()
{
  const [horarioAtual, setHorarioAtual] = useState(getHorarioAtual());
  const [dataAtual, setDataAtual] = useState(getDataAtual());

  function getHorarioAtual()
  {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
  }

  function getDataAtual()
  {
    const agora = new Date();
    const dia = agora.getDate().toString().padStart(2, '0');
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); // Meses começam do zero
    const ano = agora.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  useEffect(() =>
  {
    const intervalId = setInterval(() =>
    {
      setHorarioAtual(getHorarioAtual());
      setDataAtual(getDataAtual());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='container-data'>
      <p id="data">{dataAtual}</p>
      <p id='relogio'>{horarioAtual}</p>
    </div>
  );
}

export default DataHora;