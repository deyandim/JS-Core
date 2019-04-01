function loadStudents(){
    let table = $('#results');

    let baseUrl = 'https://baas.kinvey.com/appdata';
    let appKey = 'kid_BJXTsSi-e';
    let collection = 'Students';
    let username = 'guest';
    let password = 'guest';
    let headers = {'Authorization': `Basic ${btoa(username + ':' + password)}`,
    'Content-Type': 'application/json'};

     $.ajax({
        method: 'GET',
        url: `${baseUrl}/${appKey}/${collection}`,
        headers
    }).then(getStudents)
      .catch(displayError);

    function getStudents(data) {
        data.sort((a,b) => a.ID - b.ID);
        for(let i = 0; i < data.length; i++){
            let tr = $('<tr>');
            let tdID = $(`<td>${data[i].ID}</td>`);
            let tdFirstName = $(`<td>${data[i].FirstName}</td>`);
            let tdLastName = $(`<td>${data[i].LastName}</td>`);
            let tdFacultyNumber = $(`<td>${data[i].FacultyNumber}</td>`);
            let tdGrade = $(`<td>${data[i].Grade}</td>`);

              tr.append(tdID)
                .append(tdFirstName)
                .append(tdLastName)
                .append(tdFacultyNumber)
                .append(tdGrade);
            table.append(tr);
        }
    }

    function displayError(err) {

        let errorDiv = $(`<div>${err.statusText.toUpperCase()}</div>`);
        $('body').append(errorDiv)
        // console.error(error);
    }

}

loadStudents()