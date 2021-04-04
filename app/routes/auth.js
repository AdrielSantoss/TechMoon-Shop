module.exports = application => {
    application.post('/register', (req, res) => {
        application.app.controllers.register.register(application, req, res);
    });
}