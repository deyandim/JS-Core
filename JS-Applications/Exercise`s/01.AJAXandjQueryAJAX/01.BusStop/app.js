function getInfo() {
    let $stopId = $('#stopId').val();
    let url = `https://judgetests.firebaseio.com/businfo/${$stopId}.json`;
    $.ajax({
        method: 'GET',
        url: url,
        success: getBusses,
        error: catchErr
    });

    function getBusses(data){
        $('#stopName').text(`${data.name}`);
        for(let bus in data.buses){
            //   Bus {busId} arrives in {time} minutes
            let $li = $(`<li>Bus ${bus} arrives in ${data.buses[bus]} minutes</li>`);
            $('#buses').append($li);
        }
        $('#stopId').val('')
    }

    function catchErr(err) {

        $('#stopName').text('Error');
    }
}