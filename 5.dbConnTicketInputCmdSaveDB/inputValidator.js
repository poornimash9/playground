var inputValidator=require('node-input-validator');

var name="carmel";

let validator=new inputValidator({name:''},{name:'required|minlength:5'});

validator.check().then(function(err){
    if (err) throw err;
    console.log(validator.errors);

    console.log("matched");
})