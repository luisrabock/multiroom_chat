/*require da conexao do servidor*/
const app = require('./config/server')


/*parametrizar posta*/

const server = app.listen(3001, () => {
    console.log('Servidor subiu')
})

const io = require('socket.io').listen(server)

/*criar conexao socket io */

io.on('connection',(socket) => {
    console.log('Usuario conectou')

    socket.on('disconnect', () => {
        console.log('Usuario desconectou')
    })

})