DROP DATABASE IF EXISTS roster_dev;

CREATE DATABASE roster_dev;

/c roster_dev;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    is_active BOOLEAN NOT NULL
    shooting TINYINT NOT NULL,
    passing TINYINT NOT NULL,
    dribble TINYINT NOT NULL,
    dunking TINYINT NOT NULL,
    defense TINYINT NOT NULL,
    rebound TINYINT NOT NULL,
    steal TINYINT NOT NULL,
    img VARCHAR
);