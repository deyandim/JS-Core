
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
        $('.students').remove();
        data.sort((a,b) => a.ID - b.ID);
            for (let i = 0; i < data.length; i++) {
                let tr = $('<tr class="students"></tr>');
                let tdID = $(`<td><input type="checkbox" id=${data[i]._id} > ${data[i].ID} </td>`);
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
         $('#delete').attr('disabled', false)
    }

    function displayError(err) {

        let errorDiv = $(`<div>${err.statusText.toUpperCase()}</div>`);
        $('body').append(errorDiv)
        // console.error(error);
    }


}

function addStudent() {
    let baseUrl = 'https://baas.kinvey.com/appdata';
    let appKey = 'kid_BJXTsSi-e';
    let collection = 'Students';
    let username = 'guest';
    let password = 'guest';
    let headers = {'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Content-Type': 'application/json'};
    let inputData = $('#action input');


    let lastInfo = $.ajax({
        method: 'GET',
        url: `${baseUrl}/${appKey}/${collection}`,
        headers
    }).then(studentId)
        .catch(catchError);

    function studentId(data) {
        let idList = [];
        let lastStudentId;

        for (let line of data) {
            idList.push(line.ID)
        }
        for(let i = 1; i < idList.length; i++){
            if(!idList.includes(i)){
                lastStudentId = i;
                break;
            }
        }


        let newStudent = {
            "ID": lastStudentId,
            "FirstName": $(inputData[0]).val(),
            "LastName": $(inputData[1]).val(),
            "FacultyNumber": $(inputData[2]).val(),
            "Grade": $(inputData[3]).val()
        };
        if($(inputData[0]).val() && $(inputData[1]).val() && $(inputData[2]).val() && $(inputData[3]).val()) {
            $.ajax({
                method: 'POST',
                url: `${baseUrl}/${appKey}/${collection}`,
                headers,
                data: JSON.stringify(newStudent)
            }).then(emptyInputs)
                .catch(catchError);

            function emptyInputs() {
                $(inputData[0]).val('');
                $(inputData[1]).val('');
                $(inputData[2]).val('');
                $(inputData[3]).val('');
            }
        }
    }

    function catchError(error) {
        console.error(error)
    }
    
    
    
}

function deleteStudent() {
    let baseUrl = 'https://baas.kinvey.com/appdata';
    let appKey = 'kid_BJXTsSi-e';
    let collection = 'Students';
    let username = 'guest';
    let password = 'guest';
    let headers = {'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Content-Type': 'application/json'};

    let checkStudent = $('.students input');
    for(let student of checkStudent){
        if(student.checked){

            $.ajax({
                method: 'DELETE',
                url: `${baseUrl}/${appKey}/${collection}/${student.id}`,
                headers
            }).then(removeStudent)
                .catch(catchError);

            function removeStudent() {
                $(student).parent('td').parent('tr').remove();
            }

            function catchError(error) {
                console.error(error)
            }
        }
    }
}