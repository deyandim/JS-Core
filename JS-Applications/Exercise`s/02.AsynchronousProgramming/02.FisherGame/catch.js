function attachEvents() {
    let baseUrl = 'https://baas.kinvey.com/appdata/kid_SyUJr8iuN/biggestCatches';

    let username = 'dido';
    let password = 'dido';
    let appKey = 'kid_SyUJr8iuN';
    let endpoint = 'biggestCatches';
    let headers = {'Authorization' : `Basic ${btoa(username + ':' + password)}`,
    'Content-Type': 'application/json'
    };

    $('.load').on('click', loadCatches);
    $('.add').on('click', addCatches);

    async function loadCatches() {
        try{
            let allCatches = await $.ajax({
                method: 'GET',
                url: baseUrl,
                headers
            });
            $('#catches').empty();
            for(let singleCatch of allCatches){

                let divCatches = $(`<div class="catch" data-id="${singleCatch._id}">
                    <label>Angler</label>
                    <input type="text" class="angler" value="${singleCatch.angler}"/>
                    <label>Weight</label>
                    <input type="number" class="weight" value="${singleCatch.weight}"/>
                    <label>Species</label>
                    <input type="text" class="species" value="${singleCatch.species}"/>
                    <label>Location</label>
                    <input type="text" class="location" value="${singleCatch.location}"/>
                    <label>Bait</label>
                    <input type="text" class="bait" value="${singleCatch.bait}"/>
                    <label>Capture Time</label>
                    <input type="number" class="captureTime" value="${singleCatch.captureTime}"/>
                    </div>`);
                let btnUpdate = $(`<button class="update">Update</button>`);
                let btnDelete = $(`<button class="delete">Delete</button>`);
                $(divCatches)
                    .append(btnUpdate)
                    .append(btnDelete);
                $('#catches')
                    .append(divCatches);
                $(btnUpdate).on('click', updateCatch);
                $(btnDelete).on('click', deleteCatch);
            }
        } catch (error) {
            console.log(error)
        }
    }
    async function updateCatch() {
        let currentId = $(this).parent().data('id');
        let angler = $(this).parent().find('input.angler').val();
        let weight = Number($(this).parent().find('input.weight').val());
        let species = $(this).parent().find('input.species').val();
        let location = $(this).parent().find('input.location').val();
        let bait = $(this).parent().find('input.bait').val();
        let captureTime = Number($(this).parent().find('input.captureTime').val());

        let updateData = {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        };
        try {
            await $.ajax({
                method: 'PUT',
                url: `${baseUrl}/${currentId}`,
                headers,
                data: JSON.stringify(updateData)
            })
        } catch (error) {
            console.log(error);
        }
        loadCatches()
    }

    async function deleteCatch(){
        let currentId = $(this).parent().data('id');
        try {
            await $.ajax({
                method: "DELETE",
                url: `${baseUrl}/${currentId}`,
                headers
            });

        }catch (error) {
            console.log(error);
        }
        loadCatches();
    }

    async function addCatches() {
        let allInputs = $('#addForm input')
        let data = {
            angler: $('#addForm input.angler').val(),
            weight: Number($('#addForm input.weight').val()),
            species: $('#addForm input.species').val(),
            location: $('#addForm input.location').val(),
            bait: $('#addForm input.bait').val(),
            captureTime: Number($('#addForm input.captureTime').val()),
        };
        try{
            await $.ajax({
                method: 'POST',
                url: baseUrl,
                headers,
                data: JSON.stringify(data)
            })
        } catch (error) {
            console.log(error)
        }
        for (let input = 0; input < allInputs.length; input++){
            $(allInputs[input]).val('');
        }
    }

}
