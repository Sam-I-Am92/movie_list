/*
** mysql -u root < schema.sql
*/

DROP DATABASE IF EXISTS movie_list;

CREATE DATABASE movie_list;

USE movie_list;

CREATE TABLE movies (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(250)
);

INSERT INTO movies (title) VALUES ("Mean Girls"), ("Hackers"),("The Grey"),("Sunshine"),("Ex Machina")