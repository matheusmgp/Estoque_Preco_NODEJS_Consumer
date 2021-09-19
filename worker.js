console.log("worker started");
const queue = require("./queue");
queue.consume("PRECO", message => {
    //process the message
    console.log("processing " + message.content.toString());
})