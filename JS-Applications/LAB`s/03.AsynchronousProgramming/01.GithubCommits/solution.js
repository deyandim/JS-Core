function loadCommits() {

    let url = `https://api.github.com/repos/${$('#username').val()}/${$('#repo').val()}/commits`;
    $.get(url)
        .then(displayCommits)
        .catch(displayErrors);

    function displayCommits(data) {
        $('#commits').empty();
        for (let commit of data){
            $('#commits').append($(`<li>${commit.commit.author.name}: ${commit.commit.message}</li>`));
            console.log(commit.commit.author.name);
        }
    }
    function displayErrors(err){
        $('#commits').append($(`<li>Error: ${err.status} (${err.statusText})</li>`));
    }
}