function showDetails(id){
    $(`#${id}`).toggle()
}

$(async () => {
    try {
        const contactListHTML = await $.get('./contact-list.html'); // partial Temp
        const contactInfoHTML = await $.get('./contactsTemplate.html'); // Temp

        Handlebars.registerPartial('contactInfo', contactInfoHTML);
        const template = Handlebars.compile(contactListHTML);
        const renderedHTML = template({ contacts });

        $('body').append(renderedHTML)
    }
    catch (e) {
        console.log(e);
    }
})