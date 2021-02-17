const DB = require('./models');

DB.User.create({
    email: 'test@test.com',
    name: 'Test',
    password: 'testpassword'
})
.then(user => {
    console.log(user);
    process.exit();
})
.catch(err => {
    console.log(err);
    process.exit();
});