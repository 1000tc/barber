
const dataAtual = new Date();

const dataMaxima = new Date(dataAtual);

dataMaxima.setDate(dataMaxima.getDate() + 9);


const dataAtualFormatada = dataAtual.toISOString().split('T')[0];
const dataMaximaFormatada = dataMaxima.toISOString().split('T')[0];

// Define os valores dos atributos min e max
document.getElementById("data").setAttribute("min", dataAtualFormatada);
document.getElementById("data").setAttribute("max", dataMaximaFormatada);


function desabilitarFinaisDeSemana() {
  const inputDate = document.getElementById("data");
  inputDate.addEventListener("input", function() {
    const dataSelecionada = new Date(inputDate.value);
    const diaDaSemana = dataSelecionada.getDay();
    
    if (diaDaSemana === 5 || diaDaSemana === 6) {
      // A data selecionada é um sábado ou domingo
      alert("Sábados e domingos não estão disponíveis. Por favor, selecione outra data.");
      inputDate.value = ""; // Limpa o valor do campo
  }
});
}
desabilitarFinaisDeSemana();

// Função para criar as opções de horário
function criarOpcoesDeHorario() {
  const horarioSelect = document.getElementById("horario");
  const intervaloEmMinutos = 30;
  const horaInicial = 8;
  const horaFinal = 19;

  for (let hora = horaInicial; hora <= horaFinal; hora++) {
      for (let minuto = 0; minuto < 60; minuto += intervaloEmMinutos) {
          const horaFormatada = String(hora).padStart(2, '0');
          const minutoFormatado = String(minuto).padStart(2, '0');
          const horario = `${horaFormatada}:${minutoFormatado}`;
          const option = document.createElement("option");
          option.value = horario;
          option.text = horario;
          horarioSelect.appendChild(option);
      }
  }
}

// Chama a função para criar as opções de horário
criarOpcoesDeHorario();