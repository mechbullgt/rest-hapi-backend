`use strict`
const hapi = require('hapi');

// Creating a server with host and port
const server =hapi.server({
    host:'localhost',
    port:9999
});

// Add the route
server.route({
    method:'GET',
    path:'/hello',
    handler:function(request,h) {
        console.log('Request:',request);
        return'hello world';
    }
});

// Start the server
const start =  async function() {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();