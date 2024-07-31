function cancelarContato(contatos, indice){
    contatos.splice(indice - 1, 1)
    console.log('Sessão cancelada com sucesso!')
}

module.exports = {cancelarContato}