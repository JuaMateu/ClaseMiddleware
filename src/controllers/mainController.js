const controller = {
    home: (req, res) => {
        return res.render("index");
    },
    admin: (req, res) => {
        return res.send("Hola admin: " + req.query.user);
    }
}

module.exports = controller