# SliceSavy - An MVP by Elena

## Introduction

**Welcome to my project!**

Indulge in the ultimate Italian pizza experience in Barcelona with our brand-new app! 🍕🇮🇹 Discover a world of delectable flavors as you navigate through the city's top pizzerias using our interactive map. From classic Margheritas to gourmet creations, your pizza cravings are in for a treat! 🗺️✨ And that's not all – you can curate your very own list of go-to pizzerias, ensuring that every slice is a taste of perfection. Don't just eat pizza, embrace it with our app! Start now and embark on a pizza journey like no other. 📱🍕

## SetUp

**Dependencies**

Run `npm install` in the project folder to install dependencies related to Express (the server).

`cd client and run` and run `npm install` install dependencies related to React (the client).

**Database prep**

Create `.env ` file in project directory and add

```
DB_NAME=pizzerias
DB_PASS=YOUR_PASSWORD
```
(replace YOUR_PASSWORD with your actual password)

Type `mysql -u root -p` to access the MySQL CLI using your password.

In the MySQL CLI, type `create database pizzerias;` and `create database favourites;` to create the two databases in MySQL.

Run the following in the MySQL CLI: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD'; (replace YOUR_PASSWORD with your actual password)

Run `npm run migrate` in your TERMINAL, in the project folder (not your MySQL CLI! Open a new terminal window for this). This will create two tables called 'pizzerias' and 'favourites' in your database.

## Run Your Development Servers

Run `npm start` in project directory to start the Express server on port 5000

`cd client` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.

## More information

Here is the [presentation](https://www.canva.com/design/DAFsKSTFyug/a1uubXgvpNDOl_34ZP138Q/edit?utm_content=DAFsKSTFyug&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) to the project, where you can find details about the database and the prototype.


**Google Maps Api**

Make your [Google maps api key](https://developers.google.com/maps/apis-by-platform?hl=es-419). Choose the option: "Maps JavaScript API" Afterwards create a `.env` file at the root of client. In this file add: 

```
VITE_APP_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
```

(replace YOUR_API_KEY with your actual api key)