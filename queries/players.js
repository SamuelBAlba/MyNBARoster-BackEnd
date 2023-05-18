const db = require('../db/dbConfig');

const getAllPlayers = async () => {
    try {
        const allPlayers = await db.any("SELECT * FROM players");
        
        return allPlayers;

    } catch (error) {
        return error;
    }
};

const getAPlayer = async (id) => {
    try {
        const onePlayer = await db.one("SELECT * FROM players WHERE id=$1", id);
        
        return onePlayer;

    } catch (error) {
        return error;
    }
};

const createPlayer = async (playerToAdd) => {
    try {
        const newPlayer = await db.one("INSERT INTO players (name, position, is_active, shooting, passing, dribble, dunking, defense, rebound, steal, img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, ,$11) RETURNING *", [playerToAdd.name, playerToAdd.position, playerToAdd.is_active, playerToAdd.shooting, playerToAdd.passing, playerToAdd.dribble, playerToAdd.dunking, playerToAdd.defense, playerToAdd.rebound, playerToAdd.steal, playerToAdd.img]);

        return newPlayer;

    } catch (error) {
        return error;
    }
};

const deletePlayer = async (id) => {
    try {
        const deletedPlayer = await db.one('DELETE FROM players WHERE id=$1 RETURNING *', id)

        return deletedPlayer;

    } catch (error) {
        return error;
    };
};

const updatePlayer = async (id, player) => {
    try {
        const updatedPlayer = await db.one('UPDATE players SET name=$1, position=$2, is_active=$3, shooting=$4, passing=$5, dribble=$6, dunking=$7, defense=$8, rebound=$9, steal=$10, img=$11 WHERE id=$12 RETURNING *', [player.name, player.position, player.is_active, player.shooting, player.passing, player.dribble, player.dunking, player.defense, player.rebound, player.steal, player.img, id])

        return updatedPlayer
        
    } catch (error) {
        return error; 
    }
};

module.exports = {
    getAllPlayers,
    getAPlayer,
    createPlayer,
    deletePlayer,
    updatePlayer
};

