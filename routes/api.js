var express = require("express");
var router = express.Router();
const db = require("../model/helper");


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send({ title: 'api' });
// });

//Obtener todas las pizzerias
router.get("/pizzerias", async (req, res) => {
  try{
  const result = await db("SELECT * from pizzerias");
  const pizzerias = result.data;
  res.send(pizzerias);
} catch (error) {
  res.send(500);
}
});

//Obtener información de una pizzería específica
router.get('/pizzerias/:id', async (req, res) => {
  try {
    const pizzeriaId = req.params.id;
    const result = await db(`SELECT * FROM pizzerias WHERE id = ${pizzeriaId} ;`);
    const pizzeria = result.data[0];
    res.json(pizzeria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Añade a favoritos 
router.post('/favourites', async (req, res) => {
  try {
    const { pizzeriaId } = req.body;

    if (!pizzeriaId) {
      return res.status(400).json({ error: 'Missing pizzeriaId' });
    }
    // Controlo que la pizzeria no exista ya 
    const checkResult = await db(`SELECT id FROM favourites WHERE pizzeria_id = ${pizzeriaId}`);
    if (checkResult.data.length != 0) {
      return res.status(404).json({ error: 'Pizzeria is in favorites.' });
    }

    const result = await db(`INSERT INTO favourites (pizzeria_id) VALUES (${pizzeriaId})`);
    res.json({ message: 'Pizzeria added to favourites' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Obtener la lista de las pizzerias favoritas
router.get('/favourites', async (req, res) => {
  try {
    const result = await db.query('SELECT p.* FROM pizzerias p JOIN favourites f ON p.id = f.pizzeria_id');
    const preferredPizzerias = result.data;
    res.json(preferredPizzerias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Elimina una pizzeria de los favoritos
router.delete('/favourites/:id', async (req, res) => {
  try {
    const pizzeriaId = req.params.id;

    // Verifico que la pizzeria esté en los favoritos antes de borrarla
    const checkResult = await db.query('SELECT id FROM favourites WHERE pizzeria_id = ?', [pizzeriaId]);
    if (checkResult.data.length === 0) {
      return res.status(404).json({ error: 'Pizzeria not found in favorites.' });
    }

    const result = await db.query('DELETE FROM favourites WHERE pizzeria_id = ?', [pizzeriaId]);
    res.json({ message: 'Pizzeria removed from favorites.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



//Obtener todas las reviews de una pizzeria
router.get("/pizzerias/:pizzeria_id/reviews", async (req, res) => {
  try{
  const result = await db(`SELECT * from reviews WHERE pizzeria_id = ${req.params.pizzeria_id};`);
  const reviews = result.data;
  res.send(reviews);
} catch (error) {
  res.send(500);
}
});

router.post("/reviews", async (req, res) => {
  try {
    const { pizzeriaId } = req.body;

   //const pizzeriaId = req.params.pizzeria_id;

    if (!pizzeriaId) {
      return res.status(400).json({ error: 'Missing pizzeriaId' });
    }
   
    await db(`INSERT INTO reviews (pizzeria_id, review, day) VALUES (${pizzeriaId}, "${req.body.review}", '${req.body.day}');`);
    const result = await db(`SELECT * from reviews WHERE pizzeria_id = ${pizzeriaId};`)
    res.send(result.data)
    //res.json({ message: 'Review added to the pizzeria' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put("/reviews/:id", async (req, res) => {
  try {
    
    const result = await db(
      `SELECT * FROM reviews WHERE id = ${req.params.id};`
    );

    if (!result) {
      res.status(404).send();
      return;
    }

    await db(
      `UPDATE reviews SET review = '${req.body.review}', WHERE id = ${req.params.todo_id};`
    );
      
    //const updatedResult = await db(`SELECT * from reviews WHERE pizzeria_id = ${req.params.pizzeria_id};`)
      res.status(200).send()
    //res.send(updatedResult.data)
   // const result = await db(`SELECT * from reviews WHERE pizzeria_id = ${req.params.pizzeria_id};`)
    //res.json({ message: 'Review added to the pizzeria' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete("/reviews/:id", async (req, res) => {
  try {
    const reviewId = req.params.id;

     await db(`DELETE FROM reviews WHERE id = ${reviewId};`);

    // const result = await db(`SELECT * from reviews WHERE pizzeria_id = ${req.params.pizzeria_id};`)
    res.status(200).send()
    //res.send(result.data)
    //res.json({ message: 'Pizzeria removed from favorites.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;