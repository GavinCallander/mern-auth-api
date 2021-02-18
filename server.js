require('dotenv').config();
const CORS = require('cors');
const EXPRESS = require('express');

const APP = EXPRESS();

APP.use(CORS());
APP.use(EXPRESS.urlencoded({ extended: false }));
APP.use(EXPRESS.json());

APP.get('/', (req, res) => {
    res.json({ message: 'MERN app API Home' });
});

APP.use('/api', require('./controllers/auth'));

APP.listen(process.env.PORT || 3001, () => {
    console.log(`Keeping it ${process.env.PORT}`);
});