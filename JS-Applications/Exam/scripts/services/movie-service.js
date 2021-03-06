const movieService = (() => {

    function addMovie(data) {
        return kinvey.post('appdata', 'movies', 'kinvey', data);
    }

    function getAllMovies() {
        return kinvey.get('appdata', `movies?query={}&sort={"tickets": -1}`, 'kinvey');
    }

    function getMyMovies(id) {
        return kinvey.get('appdata', `movies?query={"_acl.creator":"${id}"}`, 'kinvey');
    }

    function removeMovie(id) {
        return kinvey.remove('appdata', `movies/${id}`, 'kinvey');
    }

    function getMovieDetails(id) {
        return kinvey.get('appdata', `movies/${id}`, 'kinvey');
    }

    function editMovie(id, data) {
        return kinvey.update('appdata', `movies/${id}`, 'kinvey', data);
    }


    return {
        addMovie,
        getAllMovies,
        getMyMovies,
        removeMovie,
        getMovieDetails,
        editMovie,
    }
})();