module.exports = function () {
    var controller = {};

    controller.listaUsuarios = function (req, res) {
        res.json();
    };

    controller.obtemContato = function (req, res) {
        var idContato = req.params.id;
        var contato = contatos.filter(function (contato) {
            return contato._id === idContato;
        })[0];
        //testa contato
        contato ?
            //contato valido
            res.json(contato) :
            //contato n é valido
            res.status(404).send('Contato não encontrado');
    };

    controller.removeContato = function (req, res) {
        var idContato = req.params.id;
        contatos = contatos.filter(function(contato) {
            return contato._id !== idContato;
        });
        res.status(204).end();
        console.log("API: removendo contato: " + idContato);
    };
    return controller;
};