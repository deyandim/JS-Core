function addItem() {
    let newText = document.getElementById('newItemText');
    let newValue = document.getElementById(('newItemValue'));
    let optionRes = document.getElementById('menu');
    let newItem = document.createElement('option');

    newItem.textContent = newText.value;
    newItem.value = newValue.value;
    optionRes.appendChild(newItem);

    newText.value = "";
    newValue.value = "";

}