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
// router.get("/pizzerias", async (req, res) => {
//   try {
//     const result = await db.query('SELECT * FROM pizzerias');
//     const pizzerias = result.data;
//     res.json(pizzerias);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

router.get('/pizzerias/:id', async (req, res) => {
  try {
    const pizzeriaId = req.params.id;
    const result = await db.query('SELECT * FROM pizzerias WHERE id = ?', [pizzeriaId]);
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

    const result = await db.query('INSERT INTO favourites (pizzeria_id) VALUES (?)', [pizzeriaId]);
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
module.exports = router;
