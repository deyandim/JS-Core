function attachEvents(){
    $('#btnLoadTowns').on('click', loadTowns);

    async function loadTowns(){
        $('#root').empty();
        const towns = await $('#towns').val().split(', ');

        const template = await $.ajax('./template.hbs');

        const compiledHTML = Handlebars.compile(template);

        const context = { towns };

        const $ul = $('<ul>');

        $ul.append(compiledHTML(context));

        $('#root').append($ul);

    }

}