function atualizarContato(contatos, nome, telefone, email,index){
    contatos [index -1] = {nome, telefone, email}
}

module.exports = {atualizarContato}