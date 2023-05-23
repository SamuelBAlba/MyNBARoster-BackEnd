const express = require("express");
const players = express.Router();
const { getAllPlayers, getAPlayer, createPlayer, deletePlayer, updatePlayer } = require('../queries/players.js');

//index route
players.get("/", async (req, res) => {
    const allPlayers = await getAllPlayers()
    if (allPlayers) {
        return res.status(202).json(allPlayers);
    } else {
        res.status(500).json({ error: "Server Error" });
    }
});

//show one
players.get('/:id', async (req, res) => {
    const { id } = req.params;
    const player = await getAPlayer(id)
    if (player) {
        return res.status(202).json(player);
    } else {
        res.status(500).json({ error: "Server Error" });
    }
});

//create player
players.post("/", async (req, res) => {
    const newPlayer = req.body;
    try {
        const addedPlayer = await createPlayer(newPlayer)
        res.status(200).json(addedPlayer)
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

//delete player
players.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPlayer = await deletePlayer(id)
        res.status(200).json(deletedPlayer)
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

//update player
players.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const updatedPlayer = await updatePlayer(id, body)
        res.status(200).json(updatedPlayer)
    } catch (error) {
        res.status(400).json({ error: error }); 
    }
});

module.exports = players;
