function solve() {
    let len = '';
    let lastResult = '';
    let output = document.getElementById('output');

    let extractBtn = document.getElementsByTagName('button')[0];
    extractBtn.addEventListener('click', extract);

    function extract() {
        let input = document.getElementById('input').value;
        let number = input.match(/[0-9]+/);
        input = input.replace(number, '');
        input = input.substring(0, number);
        input = input.split(`${input[input.length - 1]}`).filter(x => x != 0);

        let pattern = new RegExp(`[${input[0]}]+`, 'g');
        output.value = input[1].split(pattern).join('').split('#').join(' ');
    }
}