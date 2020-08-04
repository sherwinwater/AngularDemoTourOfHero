const express = require('express');

const app = express();

app.use(express.static('./dist/angulardemotourofhero'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angulardemotourofhero/'}),
);

app.listen(process.env.PORT || 8080);