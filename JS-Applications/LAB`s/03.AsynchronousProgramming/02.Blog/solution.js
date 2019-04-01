function attachEvents() {
    let url = `https://baas.kinvey.com/appdata/kid_HJK4EUc_V/posts`;
    let username = 'peter';
    let pass = 'p';
    let base64auth = btoa(username + ':' + pass);
    let authHeaders = {'Authorization': 'Basic ' + base64auth};
    let loadPostRequest = {
        url: url,
        headers: authHeaders
    };


    $('#btnLoadPosts').on('click', function () {
        $.get(loadPostRequest)
            .then(loadPost)
            .catch(catchErr)


    });
    function loadPost(data) {
        for (let item of data){
            $('#posts').append($(`<option value="${item._id}">${item.title}</option>`));
        }
    }

    function catchErr(error) {
        let errDiv = $('div').text(`Error: ${error.status} (${error.statusText})`);

        $('body').prepend(errDiv);

        setTimeout(function () {
            $(errDiv).fadeout(function () {
                $(errDiv).remove()
            });
        }, 3000)
    }

    $('#btnViewPost').on('click', function(){
        let selectedPost = $('#posts option:selected').val();
        let viewPost = {
            url: `${url}/${selectedPost}`,
            headers: authHeaders
        };
        let loadPostComments = {
            url: 'https://baas.kinvey.com/appdata/kid_HJK4EUc_V/comments' ,
            headers: authHeaders
        };
        $.get(loadPostComments)
            .then(loadComments)
            .catch(catchError);
        $.get(viewPost)
            .then(viewPosts)
            .catch(catchError)

        function viewPosts(data){
            $('#post-title').text(`${data.title}`);
            $('#post-body').text(`${data.body}`)
        }
        function loadComments(data) {
            for(let comment of data){
                $('#post-comments').append(`<li>${comment.text}</li>`);

            }

        }

        function catchError(error){

        }
    });
}