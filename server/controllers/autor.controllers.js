const Autor = require ("../models/autor.model");

module.exports.get_all = (req, res) => {
    Autor.find().sort({nombre: 1})
    .then (autores => res.json(autores))
    .catch(err => {
        res.status(400).json(err);
    })
}

module.exports.create_autor = (req, res) => {
    //req.params.id = 123456
    Autor.create(req.body)
    .then (autor => res.json(autor))
    .catch (err => {
        res.status(400).json(err);
    })
}

module.exports.get_autor = (req, res) => {
    //req.params.id = 123456
    Autor.findOne({_id: req.params.id})
    .then (autor => res.json(autor))
    .catch (err => {
        res.status(400).json(err);
    })
}

module.exports.update_autor = (req, res) => {
    Autor.findByIdAndUpdate ({_id: req.params.id}, res.body, {new: true, runValidators: true})
    .then (autor => res.json(autor))
    .catch(err => {res.status(400).json(err);
    });
}

module.exports.delete_autor = (req, res) => {
    Autor.deleteOne ({_id: req.params.id})
    .then (result => res.json(result))
    .catch(err => {
        res.status(400).json(err);
    });
}
