// script.js
function calcularDiasRestantes() {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    
    // Define a data do próximo dia 3 de dezembro
    let dataAlvo = new Date(anoAtual, 11, 3); // Dezembro é o mês 11 (zero-based)

    // Se já passou o dia 3 de dezembro deste ano, define para o próximo ano
    if (hoje > dataAlvo) {
        dataAlvo.setFullYear(anoAtual + 1);
    }

    // Calcula a diferença em milissegundos
    const diferenca = dataAlvo - hoje;

    // Converte a diferença para dias
    const diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    // Exibe os dias restantes no elemento HTML
    document.getElementById('dias').innerText = diasRestantes;

}

// Função para alternar entre modos claro e escuro
function toggleMode() {
   const body = document.body;
   const container = document.querySelector('.container');
   const button = document.getElementById('toggleMode');

   body.classList.toggle('light-mode');
   body.classList.toggle('dark-mode');
   container.classList.toggle('light-mode');
   container.classList.toggle('dark-mode');

   // Alterar texto do botão
   if (body.classList.contains('light-mode')) {
       button.innerText = 'Mudar para Modo Escuro';
   } else {
       button.innerText = 'Mudar para Modo Claro';
   }
}

// Atualiza o contador ao carregar a página
window.onload = calcularDiasRestantes;

// Atualiza o contador a cada dia (opcional)
setInterval(calcularDiasRestantes, 86400000); // Atualiza a cada 24 horas

// Adiciona evento ao botão para alternar modos
document.getElementById('toggleMode').onclick = toggleMode;

// Inicializa no modo escuro por padrão
document.body.classList.add('dark-mode');
