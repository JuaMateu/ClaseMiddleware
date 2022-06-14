const { admin } = require("../controllers/mainController");

function adminiMiddleware (req, res, next) {
    let admins = ['Ada', 'Greta', 'Vim','Tim'];
    let usuario = req.query.user;

    if(!usuario) {
        res.send('ingrese un usuario')
    } else if (!admins.includes(usuario)) {
        res.send('no tiene los privilegios para ingresar');
    } else  {
        next()
    }    
        
    
 }

module.exports = adminiMiddleware