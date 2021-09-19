const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const rabbitMQSeervice = require("./rabbitMQService");
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
const router = express.Router();
 
router.post('/preco', (req, res) => {
   
    //rabbitMQSeervice.sendToQueue("TESTE_FILA", 'TESTE_EXCHANGE','topic' ,req.body,'TESTE_KEY');
    rabbitMQSeervice.publish('TESTE_EXCHANGE',req.body,'TESTE_KEY');
    res.json({message: 'Your request will be processed!'});
});
 
app.use('/', router);
 
app.listen(3000);