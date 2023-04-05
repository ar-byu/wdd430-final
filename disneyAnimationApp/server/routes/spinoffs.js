var express = require('express');
var router = express.Router();
const Spinoff = require('../models/spinoff');

router.get('/', (req, res, next) => {
    Spinoff
        .find({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.status(500).json({
                message: "An error occurred while fetching spinoffs: ",
                error: error
            });
        });
});

router.post('/', (req, res, next) => {
    const spinoff = new Spinoff({
        id: req.body.id,
        title: req.body.title,
        related: req.body.related,
        type: req.body.type
    });
    spinoff
        .save()
        .then(createdSpinoff => {
            res.status(201).json({
                message: "Spinoff added successfully",
                spinoff: createdSpinoff
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "An error occurred while adding the spinoff: ",
                error: error
            });
        });
});

router.put('/:id', (req, res, next) => {
    Spinoff
        .findOne({id: req.params.id})
        .then(spinoff => {
            spinoff.title = req.body.title,
            spinoff.related = req.body.related,
            spinoff.type = req.body.type

            Spinoff
                .updateOne({id: req.params.id}, spinoff)
                .then(result => {
                    res.status(204).json({
                        message: "Spinoff updated successfully"
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        message: "An error occurred while updating the spinoff: ",
                        error: error
                    });
                });
        })
        .catch(error => {
            res.status(500).json({
                message: "Spinoff not found"
            });
        });
});

router.delete('/:id', (req, res, next) => {
    Spinoff
        .findOne({id: req.params.id})
        .then(spinoff => {
            Spinoff
                .deleteOne({id: req.params.id})
                .then(result => {
                    res.status(204).json({
                        message: "Spinoff successfully deleted"
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        message: "An error occurred while deleting the spinoff: ",
                        error: error
                    });
                });
        })
        .catch(error => {
            res.status(500).json({
                message: "Spinoff not found"
            });
        });
});

module.exports = router; 
