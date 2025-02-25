function sendWpp(event){
    event.preventDefault()
    const nome = document.getElementById("nome").value
    const mensagem = document.getElementById("mensagem").value
    const telefone = "351931986765"
    
    const texto = `Olá, meu nome é ${nome}. ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)
    
    const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`
    window.open(url, '_blank')
}

