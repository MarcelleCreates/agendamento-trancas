// Script para envio do agendamento
document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const data = document.getElementById('data').value;

    if (nome && email && telefone && data) {
        alert(`Agendamento confirmado!\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nData: ${data}`);
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});