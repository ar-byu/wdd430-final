var express = require('express');
var router = express.Router();
const IdGenerator = require('./idGenerator');
const Character = require('../models/character');
const idGenerator = require('./idGenerator');

router.get('/', (req, res, next) => {
    Character
        .find()
        .then((error, data) => {
            console.log(data);
            if (error) {
                return res.status(500).json({
                    message: 'An error occured while fetching the character:',
                    error: error
                });
            } else {
                res.status(200).json(data);
            };
        });
});

router.post('/', (req, res, next) => {
    const maxCharacterId = idGenerator.nextId('characters');
    const character = new Character({
        id: maxCharacterId,
        name: req.body.name,
        role: req.body.role,
        movie: req.body.movie,
        image: req.body.image,
        description: req.body.description,
        trivia: req.body.trivia
    });
    character
        .save()
        .then(createdCharacter => {
            res.status(201).json({
                message: "Character added successfully",
                character: createdCharacter
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "An error occured while adding the character: ",
                error: error
            });
        });
});

router.put('/:id', (req, res, next) => {
    Character
        .findOne({id: req.params.id})
        .then(character => {
            character.name = req.body.name,
            character.role = req.body.role,
            character.movie = req.body.movie,
            character.image = req.body.image,
            character.description = req.body.description,
            character.trivia = req.body.trivia

            Character
                .updateOne({id: req.params.id}, character)
                .then(result => {
                    res.status(204).json({
                        message: "Character updated successfully."
                    })
                })
                .catch(error => {
                    res.status(500).json({
                        message: "An error occured while updating the character: ",
                        error: error
                    });
                });
        })
        .catch(error => {
            res.status(500).json({
                message: "Character not found",
                error: {character: 'Character not found'}
            });
        });
});

router.delete('/:id', (req, res, next) => {
    Character
        .findOne({id: req.params.id})
        .then(character => {
            Character
                .deleteOne({id: req.params.id})
                .then(result => {
                    res.status(204).json({
                        message: "Character successfully deleted"
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        message: "An error occured while deleting the character: ",
                        error: error
                    });
                });
        })
        .catch(error => {
            res.status(500).json({
                message: "Character not found",
                error: {character: "Character not found"}
            });
        });
});

module.exports = router;