const { response } = require("express");
var express = require("express");

var kk = express();
kk.listen(2001);
console.log("******** Server stated ***********")

this.obj = [{
    "id": "1",
    "name": "Sunil Chennam",    
},
{
    "id": "2",
    "name": "Mani"
}];

kk.get("/vendors", (request, response)=>{
    response.json(this.obj);
});

kk.get("/vendors/:id", (request, response)=>{
   var found = this.obj.find((element)=> {
        return element.id == request.params.id;
    });

    found !== undefined ? response.json(found) : response.send("Record not found");
});



