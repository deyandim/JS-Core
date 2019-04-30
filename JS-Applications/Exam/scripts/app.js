const handlers = {};

$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');
        // home page routes
        this.get('/index.html', handlers.getHome);
        this.get('/', handlers.getHome);
        this.get('#/home', handlers.getHome);

        // user routes
        this.get('#/register', handlers.getRegister);
        this.get('#/login', handlers.getLogin);

        this.post('#/register', handlers.registerUser);
        this.post('#/login', handlers.loginUser);
        this.get('#/logout', handlers.logoutUser);

        // ADD YOUR ROUTES HERE

        this.get('#/all', handlers.getAllMovies);
        this.get('#/my', handlers.getMyMovie);

        this.get('#/createMovie', handlers.getCreateMovie);
        this.post('#/createMovie', handlers.createMovie);

        this.get('#/remove/:id', handlers.removeMovie);


    });

    app.run('#/home');
});