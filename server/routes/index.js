const authenRouter = require('./site');
function route(app) {
    app.use('/', authenRouter);
}
module.exports = route;