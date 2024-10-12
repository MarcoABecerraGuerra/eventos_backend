const {Router} = require('express');
const { validateLogin } = require('../functions/auth/login');
const router = Router();

//Routes

router.post('/usuario/login', async (req, res) =>{
    const { username, pass } = req.body
    let data = await validateLogin(username, pass);
    res.json(JSON.parse(data.body));
})

module.exports = router;