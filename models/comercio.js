var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ComercioSchema = new Schema({
    nombre:String,
    direccion:String
})

ComercioSchema.statics.Constructor=function(nombre,direccion){
    return new this({
        nombre:nombre,
        direccion:direccion
    })
}

ComercioSchema.statics.todos = function(cb){
    return this.find({},cb);
}

ComercioSchema.statics.buscarId = function(_id,cb){
    return this.find({_id: _id},cb);
}

ComercioSchema.statics.create = function(entidad,cb) {
    return entidad.save(cb)
    /*.then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"Hubo un error al ingresar el nuevo comercio",
            
        } 
        ));*/

        /*const nuevocomercio = new comercio(req.body)
    console.log(nuevocomercio)
    await nuevocomercio.save()
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"Hubo un error al ingresar el nuevo comercio",
            
        } 
        ));*/

}

ComercioSchema.statics.eliminar = function(id,cb) {
    return this.findOneAndDelete({_id: id},cb);
}

ComercioSchema.statics.update = function(comercio, id, cb) {
    return this.findOneAndUpdate({_id: id } , { '$set': comercio},cb);
}

module.exports= mongoose.model('Comercio',ComercioSchema)