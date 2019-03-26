function attachEvents() {
    let url = 'https://messenger-fba11.firebaseio.com/messenger.json';


    $('#submit').click(function () {
        $.ajax({
            method: 'POST',
            url: url,
            data: JSON.stringify({
                author: $('#author').val(),
                content: $('#content').val(),
                timestamp: Date.now()
            }),
            success: sortMsg
        });

        // console.log($('#author').val())
        function sortMsg(data){

        }
    });

    $('#refresh').click(function(){
        $.ajax({
            method: 'GET',
            url: url,
            success: showMsg
        });

        function showMsg(data){
            for(let msg in data){
                // $('#messeges').val('ss')
                $('#messages').append(`${data[msg].author}: ${data[msg].content}\n`)
            }
        }
    })
}