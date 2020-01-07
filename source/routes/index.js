module.exports = app => {
    app.get('/', (request, response) =>{
        response.json({status : 'Tarea API'});
    });
}