function saudacao() {
    const nome = "Aluno";
    const data = new Date().toLocaleString("pt-BR");
    console.log(`Olá, ${nome}!`);
    console.log("Este script está rodando dentro de um container Docker");
    console.log(`Horário da execução: ${data}`);
}

saudacao();