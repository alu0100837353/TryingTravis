var static = require ('node-static')
var fileserver = new static.Server('./');
console.log("Visit http://localhost.8080/tests/index.html")
require('http').createServer(function(request,response){
    request.addListener('end', function(){
        fileserver.serve(request,response);
    }).resume();
}).listen(8080);