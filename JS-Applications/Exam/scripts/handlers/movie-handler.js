handlers.createMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    console.log(ctx);
    let data = {...ctx.params};

    if (data.title.length < 6|| data.title === '') {
        notifications.showError('The title should be at least 6 characters long');
    } else if (data.description.length < 10) {
        notifications.showError('The description should be at least 10 characters long')
    } else if (!data.imageUrl.startsWith('https://')) {
        notifications.showError('Link url should always start with “http://" or "https://”.')
    }  else if (isNaN(data.tickets)) {
        notifications.showError('The available tickets should be a number')
    } else if (data.genres.split(' ').length === 3 ) {

        console.log(data.genres.split(' ').length);
        notifications.showError('The genres must be separated by a single space')
    }  else {

        movieService.addMovie(data)
            .then(function () {
                notifications.showInfo('Movie created.');

                ctx.redirect('#/all');
            })
            .catch(function (error) {
                notifications.handleError(error);
            });
    }
};

handlers.getAllMovies = function (ctx) {
    console.log(123);
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    movieService.getAllMovies()
        .then(function (res) {
            let userId = sessionStorage.getItem('id');

            let movies = res;

            movies.forEach((movie) => movie.isCreator = movie._acl.creator === userId);

            ctx.movies = movies;

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            })
                .then(function () {
                    this.partial('./templates/movie/allMovies.hbs');
                })
                .catch(function (err) {
                    notifications.handleError(err);
                });
        });
};

handlers.getCreateMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    console.log(ctx);
    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    })
        .then(function () {

            this.partial('./templates/movie/createMovie.hbs')
        })
        .catch(function (error) {
            notifications.handleError(error);
        })
}

handlers.getEditMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    movieService.editMovie(id)
        .then(function (res) {
            ctx.title = res.title;
            ctx.description = res.description;
            ctx.tickets = res.tickets;
            ctx.description = res.description;
            ctx.genres = res.genres;
            ctx.imageUrl = res.imageUrl;


            console.log(res);


            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            })
                .then(function () {
                    this.partial('./templates/movie/editMovie.hbs');
                })
                .catch(function (err) {
                    notifications.handleError(err);
                });
        });
};

handlers.getMyMovie = function(ctx){
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    movieService.getAllMovies()
        .then(function (res) {
            let userId = sessionStorage.getItem('id');

            let movies = res;

            movies = movies
                .filter((movie) => movie._acl.creator === userId);

            ctx.movies = movies;


            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            })
                .then(function () {
                    this.partial('./templates/movie/myMovies.hbs');
                })
                .catch(function (err) {
                    notifications.handleError(err);
                });
        });
};

handlers.removeMovie = function (ctx) {

    console.log(123)
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    movieService.removeMovie(id)
        .then(function () {

            notifications.showInfo('Movie deleted.');

            ctx.redirect('#/my');

        })
        .catch(function (error) {
            notifications.handleError(error);
        })
};