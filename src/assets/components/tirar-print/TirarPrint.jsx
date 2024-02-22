import html2canvas from 'html2canvas';
import { Button } from "../../../section-components/section-palpite/SectionPalpite.style"


const TirarPrint = () =>
{
  const criarImagem = () =>
  {
    const printElement = document.querySelector('.card-palpite');

    html2canvas(printElement).then(canvas =>
    {
      const imagem = canvas.toDataURL();

      // Criar um elemento de link temporário
      const link = document.createElement('a');
      link.href = imagem;
      link.download = 'seu_palpite.png'; // Nome do arquivo a ser baixado

      // Simular um clique no link para iniciar o download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <Button width="200px" color="white" $background="#451B50" $border="none"
      onClick={criarImagem}>Tirar print</Button>
  );
};

export default TirarPrint;