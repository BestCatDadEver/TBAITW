module.exports = app => {
    app.get('/', (request, response) =>{
        response.json({status : 'The Best App In The World'});
    });
}