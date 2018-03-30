var express =  require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); //habilita a api para recber informações json

app.use(bodyParser.urlencoded({ extended: true })); //habilita a api para recber informações de uma url
app.use(cors());


app.post('/api/login', function(req,res){
    var email = req.body.email;
    var senha = req.body.senha;

    // aqui vai a regra de validação.. busca do banco ou de onde estiver
    if(email!='nadianderle@gmail.com' || senha !='1234'){
        setTimeout(function(){
            res.send(401,{
                'erro':{
                    'http_code':401,
                    'code':'unauthorized',
                    'menssagem':'Login e/ou senha inválidos'
                }
            })
        },
         4000);
    } else{
        setTimeout(function(){
            res
                .header('Access-Control-Allow-Origin','*')//permite o acesso de qualquer ip
                .send(200,{
                    'data':{
                        'nome':'Fulano de Tal',
                        'email':'nadianderle@gmail.com',
                        'token': 'este_e_o_token' //simuolarestrategias para autenticação com token
                    }
                })
        },4000);
    }
});

app.listen(3000);
console.log('A API esta online')