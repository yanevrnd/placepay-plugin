const express = require('express');
const place = require('place-api');

place.api_key = 'test_private_key_ilv5K90PFHs1sZ4pUm2pcG_';

const app = express();
const port = '8000';
app.set('view engine', 'pug');

app.get('/', async (req, res) => {
    const account = await place.Account.create({
        username: 'Johny',
        email: 'joe.schmoe@example.com',
        full_name: 'Joe Schmoe',
        user_type: 'payer',
        access_tokens: [
            new place.AccessToken({ type: 'session_access' })
        ],
        fields: '*,username,access_tokens'
    });

    const accessToken = account.access_tokens[0].access_token;

    res.render('public/index', { token: accessToken });
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});