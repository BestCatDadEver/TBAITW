module.exports = app => {

    const Users = app.database.models.Users;

    app.route('/users')
    .get((request, response) => {
        Users.findAll({})
        .then(result => response.json(result))
        .catch(error => {
            response.status(412).json({msg: error.message});
        })
    })
    .post((request, response) => {
        Users.create(request.body)
        .then(result => response.json(result))
        .catch(error => {
            response.status(412).json({msg: error.message});
        })
        // response.json({"status" : "Received"});
    });

    app.route('/users/:id')
    .get((request, response) => {
        Users.findOne({where : request.params})
        .then(result => response.json(result))
        .catch(error => {
            response.status(412).json({msg : error.message});
        })
    })
    .put((request, response) => {
        Users.update(request.body, {where : request.params})
        .then(result => response.sendStatus(204))
        .catch(error => {
            response.status(412).json({msg:error.message})
        })
    })
    .delete((request, response) => {
        Users.destroy({where : request.params})
        .then(result => response.sendStatus())
        .catch(error => {
            response.status(402).json({msg: error.message})
        })
    });
    
    
}