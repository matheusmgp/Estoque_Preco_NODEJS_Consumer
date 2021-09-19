
const queue = require("./rabbitMQService");
queue.consume("TESTE_FILA", message => {
    //process the message
    console.log("processing " + message.content.toString());
})