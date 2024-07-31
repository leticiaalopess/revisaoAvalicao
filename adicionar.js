function adicionarContato(contatos, nome, telefone, email, callback ){
    contatos.push({nome, telefone, email})
    callback()
}

module.exports = { adicionarContato }