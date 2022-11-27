// Mapeamento dos itens :
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

// Função :
setInterval(() => {
    let novaHora = new Date() // Pegando as informações atuais
    
    // Criando variáveis para cara info do tempo :
    let horasAgora = novaHora.getHours() 
    let minutosAgora = novaHora.getMinutes()
    let segundosAgora = novaHora.getSeconds()

    // Adicionando um '0' ao lado do número que estiver menor que 10 :
    if (horasAgora < 10) horasAgora = '0' + horasAgora
    if (minutosAgora < 10) minutosAgora = '0' + minutosAgora
    if (segundosAgora < 10) segundosAgora = '0' + segundosAgora

    // Substituindo o mapeamento pelas variáveis criadas acima :
    horas.textContent = horasAgora
    minutos.textContent = minutosAgora
    segundos.textContent = segundosAgora
});