function attachEvents() {
    let url = 'https://phonebook-32911.firebaseio.com/phonebook';
    let arr = [];
    $('#btnCreate').click(function (){
        $.ajax({
            method: 'POST',
            url: url + '.json',
            data: JSON.stringify({
                    person: $('#person').val(),
                    phone: $('#phone').val()
            }),
            success: function(data){
                $('#person').val('');
                $('#phone').val('')
            }
        });
    });

    $('#btnLoad').click(function(){
        $.ajax({
            method: 'GET',
            url: url + '.json',
            success: showContacts
        })
    });

    function showContacts(data){
        for(let contact in data){
          let $li = $(`<li class="${contact}">${data[contact].person}: ${data[contact].phone} <button class="delete" value="${contact}">DELETE</button></li>`);

            $('#phonebook').append($li);
            $('.delete').click(function(){
                $.ajax({
                    method: 'DELETE',
                    url: `${url}/${this.value}.json`,
                    success: () => $(`.${contact}`).remove()
                });
            });
        }
    }

}