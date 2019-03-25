function loadRepos() {
    let $username = $('#username').val();
    let url = `https://api.github.com/users/${$username}/repos`;
    $.ajax({
        method: 'GET',
        url: url,
        success: displayRepos,
        error: displayError
    })
}
let baseUrl = 'https://github.com/';

function displayRepos(data) {
    for (let user of data){
        let $li = $('<li>');
        let $a = $(`<a href = '${user.html_url}'>${user.full_name}</a>`)
        $li.append($a);
        $('#repos').append($li);
    }
    $('#username').val('');
}

function displayError(data){
    let $li = $('<li>');
    $li.text('Error');
    $('#repos').append($li);
    $('#username').val('');
}