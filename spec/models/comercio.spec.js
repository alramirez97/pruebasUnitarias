var mongoose = require('mongoose');

const Comercio = require('../../models/comercio.js');
const ObtenerListado = async () => {
        const list = await Comercio.todos()
        return list.length;
}

describe('Test modelo Comercio',function(){

    beforeEach(function(done){
        var mongoDB = 'mongodb://localhost/emprendeapp';
        mongoose.connect(mongoDB, {useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection_error'));
        db.once('open', function() {
            console.log('Conectado!!');
            done();
        });
    });

     /*describe('Comprobar si coleccion inicia vacía', () => {
         it('comienza vacía', (done) => {
             Comercio.todos(function(err, cb){
                 expect(cb.length).toBe(5);
                 done()
             })
         })
     })*/

     //// ------------ Buscando por Id ---------------------///
     /* Para poder probar el Get primero haya que pasarle
       un Id valido de la base de datos */
     /*describe('Comprobar si hay comercios con Id', () => {
         it('comienza vacía', (done) => {
             Comercio.buscarId('61397444f58c5e5768c27008',function(err, cb){
                 expect(cb.length).toBe(1);
                 console.log("en la base de datos se encuentra " + cb.length+ " de 1 dato esperado" )
                done()
             })
         })
     })*/

     /// --------------------- POST -------------------------- ////////////////
     describe('Comprobar POST', () =>{
        it('POST prueba', async (done) => {
            const ObtenerLis = await ObtenerListado();
            const comercio = Comercio.Constructor('Comercio prueba 1', 'Chalatenango')
            Comercio.create( comercio, async (err, comercio) => {
                const Obtenernew = await ObtenerListado();
                expect(err).withContext('error en la consulta').toBeNull();
                expect(Obtenernew).toBe(ObtenerLis + 1);
                done()
            })
        })
     });
     
     /// ---------------------Otra prueba de POST --------------/////
    /*describe('Comprobar save', () => {
        it('loading', (done) => {
            const comerciosave = Comercio.Constructor('Comercio 2','Tangamadapio')
            Comercio.create(comerciosave,function(err, cb){
                expect(err).toBeNull();
                done()
            })
        })
    });*/

    /// --------------------- PUT ----------------------------- ////////////
    /* Para poder probar el update primero haya que pasarle
       un Id valido de la base de datos */
    /*describe('Comprobar update', () => {
         it('loading', (done) => {
             const comerciosave = {nombre: 'Comercio 7 actualizado', direccion: 'Tangamandapio actualizado', _id: '6142ac2c2d9355b8d0c92fda'}
             Comercio.update(comerciosave, '6142ac2c2d9355b8d0c92fda',function(err, cb){
                 expect(err).toBe(null);
                 done()
             })
        })
     })*/

     // --------------------- DELETE --------------------------//////
     /* Para poder probar el Delete primero haya que pasarle
       un Id que se encuentre en la base de datos */
     /*describe('Comprobar eliminar', () => {
        it('loading', (done) => {
            Comercio.eliminar('61425175bef8cf76c1d2d307',function(err, cb){
                 expect(err).toBe(null);
                 done()
             })
        })
     })*/
})