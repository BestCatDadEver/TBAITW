module.exports = app => {

    //app.db.models.Users;

    
    const Users = app.db.models;

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