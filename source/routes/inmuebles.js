module.exports = app => {

    const Inmuebles = app.database.models.Inmuebles;

    app.route('/inmuebles')
    .get((request, response) => {
        Inmuebles.findAll({})
        .then(result => response.json(result))
        .catch(error => {
            response.status(412).json({msg: error.message});
        })
    })
    .post((request, response) => {
        Inmuebles.create(request.body)
        .then(result => response.json(result))
        .catch(error => {
            response.status(412).json({msg: error.message});
        })
    });
} 