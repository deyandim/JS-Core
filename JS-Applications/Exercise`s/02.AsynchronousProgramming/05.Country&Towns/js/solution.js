// $('select').change(function () {
//     if($(this).val() == 'Town and Country'){
//         $('#inputTown').attr('disabled', false);
//         $('#inputCountry').attr('disabled', false);
//     }
//     else if($(this).val() == 'Country'){
//         $('#inputCountry').attr('disabled', false);
//         $('#inputTown').attr('disabled', true);
//     } else {
//         $('#inputTown').attr('disabled', true);
//         $('#inputCountry').attr('disabled', true);
//         $('#addInfo, #editInfo, #deleteInfo').attr('disabled', true)
//     }
// });

let urlTown = 'https://baas.kinvey.com/appdata/kid_ByoZH-btN/Towns';
let urlCountry = 'https://baas.kinvey.com/appdata/kid_ByoZH-btN/Country'
let username = 'country';
let password = 'town';
let headers = {'Authorization': `Basic ${btoa(username + ':' + password)}`,
            'Content-Type': 'application/json'
            };

let arrOfCountry = [];
let allRealCountry = $('#countries option');

for(let country of allRealCountry){
    arrOfCountry[$(country).text()] = country.value;
}

function addData() {
    // console.log($('#optTown').is(':selected'))


    function addCountryAndTown() {
console.log($('#enterTown'))

            let town = $('#inputTown').val().toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
            });
            let country = $('#inputCountry').val().toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
            });
            if ((country in arrOfCountry) && $('#enterTown')[0].checked) {

                let data = {
                    'country': country,
                    'town': town
                };
                console.log(data);
                $.ajax({
                    method: 'POST',
                    url: urlTown,
                    headers,
                    data: JSON.stringify(data)
                }).then(successAdded)
                    .catch(catchErr)
            } else if ((country in arrOfCountry) && !($('#enterTown')[0].checked)) {

                let addedCountry = { 'country': country }

                $.ajax({
                    method: 'POST',
                    url: urlCountry,
                    headers,
                    data: JSON.stringify(addedCountry)
                }).then(successAdded)
                    .catch(catchErr)




            } else if (!(country in arrOfCountry)) {
                $('#inputCountry').val('Not valid country').css('color', 'red');
                setTimeout(function () {
                    $('#inputCountry').val('')
                    $('#inputCountry').placeholder = 'Enter Country'
                }, 2000)
            }
        function successAdded(data) {
            $('#inputCountry').val('');
            $('#inputTown').val('');

        }

        function catchErr(error) {
            console.error(error)
        }

    }

    addCountryAndTown()
}

function editData() {
    let rowsCountry = $('#tableCountries tbody tr td input');
    let rowsTownAndCountry = $('#tableTownAndCountries tbody tr td input');


    // Editing only Countries
    for(let row of rowsCountry){

        if(row.checked){

            let countryEdited = (row.parentNode).parentNode.childNodes[1].childNodes[0].value.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
            });
            if(countryEdited in arrOfCountry) {
                $.ajax({
                    method: 'PUT',
                    url: `${urlCountry}/${row.id}`,
                    headers,
                    data: JSON.stringify({'country': countryEdited})
                }).then(editCountries)
                    .catch(catchError)

                function editCountries() {
                    console.log('Done');
                    loadCurrentData()
                }

                function catchError(error) {
                    console.error(error);
                }
            }else{
                (row.parentNode).parentNode.childNodes[1].childNodes[0].value = 'Incorrect country';
                setTimeout(function () {
                    (row.parentNode).parentNode.childNodes[1].childNodes[0].value = '';
                    (row.parentNode).parentNode.childNodes[1].childNodes[0].placeholder = 'Enter real country';
                }, 2000)
            }
        }
    }


    // Edtiting Towns And Countries
    for(let row of rowsTownAndCountry){

        if(row.checked){


            let countryEdited = (row.parentNode).parentNode.childNodes[1].childNodes[0].value.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
            });
            let townEdited = (row.parentNode).parentNode.childNodes[2].childNodes[0].value.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
            });
            if((countryEdited in arrOfCountry) && townEdited.length > 0) {
                $.ajax({
                    method: 'PUT',
                    url: `${urlTown}/${row.id}`,
                    headers,
                    data: JSON.stringify({'country': countryEdited,
                    'town': townEdited})
                }).then(editCountries)
                    .catch(catchError)

                function editCountries() {
                    console.log('Done');
                    loadCurrentData()
                }

                function catchError(error) {
                    console.error(error);
                }
            }else if(townEdited.length == 0){
                (row.parentNode).parentNode.childNodes[2].childNodes[0].placeholder = 'Enter town';

            } if (!(countryEdited in arrOfCountry)){
                (row.parentNode).parentNode.childNodes[1].childNodes[0].value = 'Incorrect country';
                setTimeout(function () {
                    (row.parentNode).parentNode.childNodes[1].childNodes[0].value = '';
                    (row.parentNode).parentNode.childNodes[1].childNodes[0].placeholder = 'Enter real country';
                }, 2000)
            }
        }
    }


}

function deleteCurrentData() {
    let rowsCountry = $('#tableCountries tbody tr td input');

    for(let row of rowsCountry){
        if(row.checked){
            console.log(row);
            ((row.parentNode).parentNode.remove());
            $.ajax({
                method: 'DELETE',
                url: `${urlCountry}/${row.id}`,
                headers
            }).then(()=>console.log('Done'))
                .catch(catchError)
        }
    }
    function catchError(error) {
        console.log(error);
    }

    let rowsCountryAndTown = $('#tableTownAndCountries tbody tr td input');

    for(let row of rowsCountryAndTown){

        if(row.checked){
            ((row.parentNode).parentNode.remove());
            $.ajax({
                method: 'DELETE',
                url: `${urlTown}/${row.id}`,
                headers
            }).then(()=>console.log('Done'))
                .catch(catchError)
        }
    }
    function catchError(error) {
        console.log(error);
    }
}



function loadCurrentData() {
    $('#tableCountries tbody').empty()
    $('#tableTownAndCountries tbody').empty()
    function loadCountries() {
        $.ajax({
            method: 'GET',
            url: urlCountry,
            headers
        }).then(showCountries)
            .catch(catchError)
    }

    function showCountries(data){
        let uniqueCountry = [];
        for(let country of data){
            uniqueCountry[country.country] = country._id;

        }


        let $tableCountry = $('#tableCountries tbody')
        for(let line in uniqueCountry){
            console.log(line)
            let $trCountry = $(`<tr>`);
            let $tdNumber = $(`<td><input type="checkbox" id=${uniqueCountry[line]} ></td>`);
            let $tdCountry = $(`<td><input type="text" class="form-control editCountry" value="${line}"></td>`);
            let $tdFlag = $(`<td><img src="./flags/${arrOfCountry[line]}.png"></td>`);

            $trCountry
                .append($tdNumber)
                .append($tdCountry)
                .append($tdFlag);


            $tableCountry.append($trCountry)

        }
        $('#editInfo, #deleteInfo').attr('disabled', false)
    }



    function catchError(error){
        console.error(error);
    }

    function loadTowns() {
        $.ajax({
            method: 'GET',
            url: urlTown,
            headers
        }).then(showCountriesAndTowns)
            .catch(catchError)
    }

    function showCountriesAndTowns(data){
        let $tableTownAndCountries = $('#tableTownAndCountries');

        for(let line of data){
            let $trCountry = $(`<tr>`);
            let $tdNumber = $(`<td><input type="checkbox" id=${line._id} ></td>`);
            let $tdCountry = $(`<td><input type="text" id="editCountry" class="form-control editCountry" value="${line.country}"></td>`);
            let $tdTown = $(`<td><input type="text" id="editTown" class="form-control editCountry" value="${line.town}"></td>`);

            $trCountry
                .append($tdNumber)
                .append($tdCountry)
                .append($tdTown);


            $tableTownAndCountries.append($trCountry)
        }




    }

    loadCountries();
    loadTowns()
}

// console.log($('#optTown').is(':selected'))


//
// let $firstOption = $('<option value="choose">Choose country</option>');
// let $allCountryWithTowns = $('#getCountryTowns');
// $allCountryWithTowns.append($firstOption);
//
// for(let line of data){
//
//     if(line.country in obj) {
//         obj[line.country] += `, ${line.town}`
//     } else {
//         obj[line.country] = `${line.town}`
//     }
// }
//
// for (let country in obj){
//     let $optionCountry = $(`<option value="${country}">${country}</option>`)
//     $allCountryWithTowns.append($optionCountry);
// }
// console.log(obj);
//
// $($allCountryWithTowns).change(function () {
//     if(($firstOption).value != 'choose'){
//         $('#loadTowns').attr('disabled', false)
//     }
// })