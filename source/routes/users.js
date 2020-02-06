module.exports = app => {

    const Users = app.db.models.Users;

    app.route('/users')
    .get((request, response) => {
        Users.findAll({})
        .then(result => response.json(result))
        .catch(error => {
            console.log("ERROR");
        })
    })
    .post((request, response) => {
        Users.create(request.body)
        .then(result => response.json(result))
        .catch(error => {
            response.status(412).json({msg: error.message});
        })
        response.json({"status" : "Recibodp"});
    });
    
    
}