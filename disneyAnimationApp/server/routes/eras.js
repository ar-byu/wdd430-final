var express = require('express');
var router = express.Router();
const Era = require('../models/era')

router.get('/', (req, res, next) => {
    Era
        .find({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.status(500).json({
                message: "An error occurred while fetching eras",
                error: error
            });
        });
});

router.put('/:id', (req, res, next) => {
    Era
        .findOne({id: req.params.id})
        .then(era => {
            era.name = req.params.name,
            era.start_year = req.params.start_year,
            era.end_year = req.params.end_year,
            era.description = req.params.description,
            era.moviesInEra = req.params.moviesInEra

            Era
                .updateOne({id: req.params.id}, era)
                .then(result => {
                    res.status(204).json({
                        message: "Era updated successfully"
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        message: "An error occurred while updating the era"
                    });
                });
        })
        .catch(error => {
            res.status(500).json({
                message: "Era not found"
            });
        });
});

module.exports = router; 
