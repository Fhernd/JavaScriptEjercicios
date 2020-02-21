// Ejercicio 500: Crear un servidor con Node.js para enviar contenido JSON a un cliente.

const http = require('http');

let servidor = http.createServer().listen(80);

servidor.on('request', function(req, res){
    res.writeHeader(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

    let usuarios = {"results":[{"gender":"female","name":{"title":"Miss","first":"Amber","last":"Spencer"},"location":{"street":{"number":3835,"name":"New Road"},"city":"Roscrea","state":"Roscommon","country":"Ireland","postcode":50279,"coordinates":{"latitude":"21.7414","longitude":"117.0285"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"amber.spencer@example.com","login":{"uuid":"1d1567cc-724b-4530-9e1f-1083d1ca6669","username":"yellowbutterfly128","password":"advance","salt":"krSupdt3","md5":"74a3a17ed9ee64300cd5254488c24ec2","sha1":"78db48ada266f2e0fb84e11b69e2c471f50387b0","sha256":"6d45232edcf0b4f5482cf14e6063147dc6bfb116b7abef6ec934043c197c74b2"},"dob":{"date":"1972-08-06T23:19:14.779Z","age":48},"registered":{"date":"2005-12-25T03:29:58.562Z","age":15},"phone":"011-764-4369","cell":"081-212-3012","id":{"name":"PPS","value":"4283351T"},"picture":{"large":"https://randomuser.me/api/portraits/women/83.jpg","medium":"https://randomuser.me/api/portraits/med/women/83.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/83.jpg"},"nat":"IE"},{"gender":"male","name":{"title":"Mr","first":"Mariano","last":"Muñoz"},"location":{"street":{"number":4690,"name":"Avenida de Salamanca"},"city":"Santander","state":"Galicia","country":"Spain","postcode":50571,"coordinates":{"latitude":"74.2421","longitude":"-87.5112"},"timezone":{"offset":"-12:00","description":"Eniwetok, Kwajalein"}},"email":"mariano.munoz@example.com","login":{"uuid":"23612374-c559-4160-ba07-2ca7489d5287","username":"crazyrabbit985","password":"spectre","salt":"qFK2tiGE","md5":"d8c1bbfa1c46cfdbfe165a991791f6d4","sha1":"6053b1c94eaab4c2300ef084be6c7f8515170c78","sha256":"b6ade1058d59808608cdf34c8fa7d2a223eb13d9958c506d1befec9c205e23af"},"dob":{"date":"1989-02-28T12:42:14.300Z","age":31},"registered":{"date":"2011-10-17T20:14:16.143Z","age":9},"phone":"939-620-922","cell":"681-038-063","id":{"name":"DNI","value":"72876711-P"},"picture":{"large":"https://randomuser.me/api/portraits/men/49.jpg","medium":"https://randomuser.me/api/portraits/med/men/49.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/49.jpg"},"nat":"ES"}],"info":{"seed":"87ee41b992d0b771","results":2,"page":1,"version":"1.3"}};

    res.end(JSON.stringify(usuarios));
});
