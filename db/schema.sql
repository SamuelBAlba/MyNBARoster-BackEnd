DROP DATABASE IF EXISTS roster_dev;

CREATE DATABASE roster_dev;

\c roster_dev;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    is_active BOOLEAN NOT NULL,
    shooting SMALLINT NOT NULL,
    passing SMALLINT NOT NULL,
    dribble SMALLINT NOT NULL,
    dunking SMALLINT NOT NULL,
    defense SMALLINT NOT NULL,
    rebound SMALLINT NOT NULL,
    steal SMALLINT NOT NULL,
    img VARCHAR
);

-- (name, position, is_active, shooting, passing, dribble, dunking, defense, rebound, steal, img)