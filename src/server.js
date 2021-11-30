const app = require('express')();
const appWs = require('express-ws')(app);

const SERVER_PORT = 1337;

app.ws('/echo', (ws, req)  => {
    ws.on('message', msg => {
        console.log('Received: ', msg);
        ws.send(msg);
    });
});

app.listen(SERVER_PORT, () => {
    console.log(`App listening on port ${SERVER_PORT}!`);
  });