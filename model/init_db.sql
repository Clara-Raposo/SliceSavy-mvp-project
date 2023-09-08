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
    longitude DECIMAL(17,15) NOT NULL,
    photo_url VARCHAR(255) NOT NULL
);

CREATE TABLE favourites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pizzeria_id INT NOT NULL, 
    photo_url VARCHAR(255) NOT NULL, 
    FOREIGN KEY (pizzeria_id) REFERENCES pizzerias(id)
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pizzeria_id INT NOT NULL, 
    review VARCHAR(5000) NOT NULL, 
    day DATE,
    FOREIGN KEY (pizzeria_id) REFERENCES pizzerias(id)
);

INSERT INTO pizzerias (name, address, latitude, longitude, photo_url)
        VALUES ('Makekosa', 'C. de Floridablanca, 102, 08015 Barcelona', 41.379581672250100, 2.160129228627624, 'https://i.pinimg.com/236x/5f/ff/09/5fff09ae584723513d1847cb8647e401.jpg?nii=t');

INSERT INTO pizzerias (name, address, latitude, longitude, photo_url)
        VALUES ('Pizzeria Napoletana A33', 'Carrer de Manso, 22, 08015 Barcelona', 41.376226325459584, 2.1601810678214783, 'https://quecarta.com/uploads/2020/05/24/123456007753.256x256.jpg');

INSERT INTO pizzerias (name, address, latitude, longitude, photo_url)
        VALUES ('BELLILLO Pizzeria Napoletana', 'C. Enric Granados, 15, 08007 Barcelona', 41.38791246208748, 2.161936696756421, 'https://fastly.4sqi.net/img/general/width960/87388367_iMUZaGLQOmRGlaa4aSG4n6Lot1KxzlyBu_llNQ8209s.jpg');

INSERT INTO pizzerias (name, address, latitude, longitude, photo_url)
        VALUES ('Grosso Napoletano Senza Glutine', 'C. de València, 234, 08007 Barcelona', 41.3902356662938, 2.160351510181073, 'https://sintrazasweb.com/cdn/shop/products/GrossoNapoletano_logo.jpg?v=1683486525');

INSERT INTO pizzerias (name, address, latitude, longitude, photo_url)
    VALUES ('Grosso Napoletano', 'C. de Casanova, 209, 08021 Barcelona', 41.39395298482278, 2.147245576680043, 'https://www.grossonapoletano.com/wp-content/themes/grossonapoletano/img/loader-black-new.png');

INSERT INTO pizzerias (name, address, latitude, longitude, photo_url)
        VALUES ('Restaurant Spaccanapoli', 'C. del Rec Comtal, 6, 08003 Barcelona', 41.38933072764119, 2.1798814300530864, 'https://uploads-ssl.webflow.com/5fb120175c479e0bf1859a1d/5fc6be72c62b7f1aa4b31157_icon-03.png');
        
INSERT INTO pizzerias (name, address, latitude, longitude, photo_url)
        VALUES ('Pizza Circus', 'C. Nou de la Rambla, 40, 08001 Barcelona', 41.37790630315962, 2.1729130699339585, 'https://live.staticflickr.com/2943/15163524487_44e3134eae_b.jpg');
        

INSERT INTO pizzerias (name, address, latitude, longitude,photo_url)
        VALUES ('Sartoria Panatieri', 'C. de Provença, 330, 08037 Barcelona', 41.39717309096841, 2.164905730053087, 'https://www.mateoandco.es/wp-content/uploads/2020/06/SARTORIA_POST.jpg');


