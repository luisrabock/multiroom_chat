/*require da conexao do servidor*/
const app = require('./config/server')


/*parametrizar porta*/

const server = app.listen(3001, () => {
    console.log('Servidor subiu')
})

const io = require('socket.io').listen(server)

app.set('io', io)

/*criar conexao socket io */

io.on('connection',(socket) => {
    console.log('Usuario conectou')

    socket.on('disconnect', () => {
        console.log('Usuario desconectou')
    })

    socket.on('msgParaServidor', (data) => {

        /*dialogo*/
        socket.emit('msgParaCliente',
        {apelido: data.apelido, mensagem: data.mensagem}

        )

        socket.broadcast.emit('msgParaCliente',
        {apelido: data.apelido, mensagem: data.mensagem}

        )
        /*participantes*/
        if(parseInt(data.apelido_atualizado_clientes) == 0) {
        socket.emit('participantesParaClientes',
        {apelido: data.apelido}

        )

        socket.broadcast.emit('participantesParaClientes',
        {apelido: data.apelido}

        )
    }

    })




})
