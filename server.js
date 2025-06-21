const express = require('express');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/proxy', (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send('URL is required');
  
  const options = {
    url: targetUrl,
    headers: {
      'referer': 'https://pl.buzkora.online',
      'origin': 'https://pl.buzkora.online',
      'user-agent': 'Mozilla/5.0'
    }
  };
  request(options).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});