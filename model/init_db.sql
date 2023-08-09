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
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);

CREATE TABLE favourites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pizzeria_id INT NOT NULL,
    FOREIGN KEY (pizzeria_id) REFERENCES pizzerias(id)
);

INSERT INTO pizzerias (name, address, latitude, longitude)
        VALUES ('Makekosa', 'C. de Floridablanca, 102, 08015 Barcelona', 41.379709576724245, 2.160408546182025);
