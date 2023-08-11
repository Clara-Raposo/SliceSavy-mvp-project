--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists pizzerias;
DROP TABLE if exists favourites;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE pizzerias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude DECIMAL(17,15) NOT NULL,
    longitude DECIMAL(17,15) NOT NULL
);

CREATE TABLE favourites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pizzeria_id INT NOT NULL,
    FOREIGN KEY (pizzeria_id) REFERENCES pizzerias(id)
);

INSERT INTO pizzerias (name, address, latitude, longitude)
        VALUES ('Makekosa', 'C. de Floridablanca, 102, 08015 Barcelona', 41.379581672250100, 2.160129228627624);

INSERT INTO pizzerias (name, address, latitude, longitude)
        VALUES ('Pizzeria Napoletana A33', 'Carrer de Manso, 22, 08015 Barcelona', 41.376226325459584, 2.1601810678214783);


