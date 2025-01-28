const express = require('express');
const mongoose = require('mongoose');
const User = require('./database');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public"))); // Stellt HTML & JS bereit

// API: Neuen User speichern
app.post('/add-user', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send("Gespeichert");
    } catch (err) {
        res.status(500).send(err);
    }
});

// API: Alle User abrufen
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Server starten
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server läuft auf http://localhost:${PORT}`));
