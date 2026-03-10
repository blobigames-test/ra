const express = require('express');
const fetch = require('node-fetch');

const app = express();
const BASE = 'https://files.crazygames.com/ragdoll-archers/41';

app.get('*', async (req, res) => {
  try {
    const url = BASE + req.path;
    const response = await fetch(url, { redirect: 'follow' });
    const contentType = response.headers.get('content-type');
    res.set('Content-Type', contentType);
    const buffer = await response.buffer();
    res.send(buffer);
  } catch (e) {
    res.status(500).send('Error: ' + e.message);
  }
});

app.listen(process.env.PORT || 3000);
