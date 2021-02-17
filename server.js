require('dotenv').config();
const EXPRESS = require('express');

const APP = EXPRESS();

APP.get('/', (req, res) => {
    res.json({ message: 'MERN app API Home' });
});

APP.listen(process.env.PORT || 3001, () => {
    console.log(`Keeping it ${process.env.PORT}`);
});