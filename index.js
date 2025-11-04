const express = require('express');
const app = express();
const db = require('./models');
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ 
    extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port 3000`);
})

db.sequelize.sync()
.then((result) => {
    app.listen(3000, () => {
        console.log('Server started');
    });
})
.catch((err) => {
    console.log(err);
});

app.post('/films', async (req, res) => {
    const data = req.body;
    try {
        const komik = await db.Film.create(data);
        res.send(film);
    } catch (err) {
        res.send(err);
    }
});

app.get('/films', async (req, res) => {
    try {
        const komiks = await db.Film.findAll();
        res.send(films);
    } catch (err) {
        res.send(err);
    }
});

app.put('/films/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const film = await db.Film.findByPk(id);
        if (!film) {
            return res.status(404).send({ message: 'film not found' });
        }

        await film.update(data);
        res.send({ message: 'film updated successfully', film });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/films/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const komik = await db.Film.findByPk(id);
        if (!film) {
            return res.status(404).send({ message: 'film not found' });
        }

        await film.destroy();
        res.send({ message: 'film deleted successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
});


          