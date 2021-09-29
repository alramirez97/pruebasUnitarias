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
    return this.findById({_id: _id},cb);
}

ComercioSchema.statics.create = function(entidad,cb) {
    return entidad.save(cb)
}

ComercioSchema.statics.eliminar = function(id,cb) {
    return this.findByIdAndDelete({_id: id},cb);
}

ComercioSchema.statics.update = function(comercio, id, cb) {
    return this.findByIdAndUpdate({_id: id } , { '$set': comercio},cb);
}

module.exports= mongoose.model('Comercio',ComercioSchema)