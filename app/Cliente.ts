import mongoose = require("mongoose");

const uri: string = "mongodb+srv://admin:admin@cluster0-flsyv.azure.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri,{ useNewUrlParser:true, useUnifiedTopology: true }, (err: any) => {
    if(err){
        console.log(err.message);
    }else{
        console.log("Conexion exitosa");
    }
});

interface ICliente extends mongoose.Document {
    nombre: string;
    edad: number;
    carrera: string;
}


const ClienteSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    edad: {type: Number, required: true},
    carrera: {type: String, required: true}
});

const Cliente = mongoose.model<ICliente>("Cliente", ClienteSchema);

export {Cliente}

export const getall = function(): void{
    Cliente.find((err: any, clientes: any)=>{
        console.log(clientes)
    })
}