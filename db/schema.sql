DROP DATABASE IF EXISTS village_db;

CREATE DATABASE village_db;

USE village_db;

------------------------------------

CREATE TABLE users (
    user_id int NOT NULL AUTO_INCREMENT,
    email VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
)

CREATE TABLE post (
    id int NOT NULL AUTO_INCREMENT,
    body VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
    FOREIGN KEY(user_id)
)

CREATE TABLE messages (
    id int NOT NULL AUTO_INCREMENT,
    body VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
    FOREIGN KEY(user_id)
)