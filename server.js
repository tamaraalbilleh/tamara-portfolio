'use strict';

const express = require ('express');
const server = express ();
const PORT = process.env.PORT|| 3000 ;
server.get ('/test',(request,response)=>{
    response.send ('Hello World')
})

server.use(express.static ('./public'));

server.listen (PORT , () => {
    console.log (`listening on PORT ${PORT}`);
})
