var mongoose = require('mongoose');

var Comercio = require('../../models/comercio.js')

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






    // describe('Comprobar si hay comercios con X nombre', () => {
    //     it('comienza vacía', (done) => {
    //         Comercio.buscarNombre('lolita',function(err, cb){
    //             expect(cb.length).toBe(5);
    //             done()
    //         })
    //     })
    // })

    /*describe('Comprobar save', () => {
        it('loading', (done) => {
            const comerciosave = Comercio.Constructor('Comercio 2','Tangamadapio')
            Comercio.create(comerciosave,function(err, cb){
                expect(err).toBe(null);
                done()
            })
        })
    });*/

    describe('Comprobar update', () => {
         it('loading', (done) => {
             const comerciosave = {nombre: 'Comercio 7 actualizado', direccion: 'Tangamandapio actualizado', _id: '6142ac2c2d9355b8d0c92fda'}
             Comercio.update(comerciosave, '6142ac2c2d9355b8d0c92fda',function(err, cb){
                 expect(err).toBe(null);
                 done()
             })
        })
     })

     /*describe('Comprobar eliminar', () => {
        it('loading', (done) => {
            Comercio.eliminar('61425175bef8cf76c1d2d307',function(err, cb){
                 expect(err).toBe(null);
                 done()
             })
        })
     })*/
})