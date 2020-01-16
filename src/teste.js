const express = require('express');

const app = express();

app.use(express.json());

app.post('/devs', async (request, response) => {
    console.log(request.body)
    return response.json({ message: 'helluu hello'});
});

app.listen(3333);
