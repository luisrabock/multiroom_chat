/*importar instancia das depencias de servidor e rotas */

const express = require('express')

const consign = require('consign')

const bodyParser = require('body-parser')

const expressValidator = require('express-validator')

/*invocar o express em uma instancia para ser usado no programa*/

var app = express()

/*setar engine a ser usada e caminho da engina*/

app.set('view engine', 'ejs')
app.set('views', './app/views')


/*configurar middleware static*/

app.use(express.static('./app/public'))


/*configurar middleware do body-parser*/

app.use(bodyParser.urlencoded({extended: true}))

/*configurar o middleware express-validator*/

app.use(expressValidator())

/*configurar consign para gerenciar as rotas com auto-load*/

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)



module.exports = app;

