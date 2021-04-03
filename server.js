'use strict';

const express = require ('express');
const server = express ();
const Port = process.env.Port|| 3000 ;
server.get ('/test',(request,response)=>{
    response.send ('Hello World')
})

server.get ('/data',(request,response)=>{
        let family = [
            {
                nName : 'tamara'
            },
            {
                nName : 'Zaid'
            },
            {
                nName : 'Saif'
            }
        ]
    response.json (family);
})
server.use(express.static ('./public'));

server.listen (Port , () => {
    console.log (`listening on Port ${Port}`);
})
