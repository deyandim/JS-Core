function solve(arr) {
    result = [];
    let pattern = /(<([^>]+)>)/ig;
    for (let str of arr) {

        let string = str.substring(str.indexOf('<') + 1, str.indexOf('>'));
        let lastString = str.substring(str.lastIndexOf('/') + 1, str.lastIndexOf('>'));
        str = str.substring(string.length + 2, str.lastIndexOf('<'));
        if (string === lastString) {
            result.push(str.replace(pattern, ''));
        }
    }

    // console.log(str.lastIndexOf('<'));
    console.log(result.filter(a => a!= 0).join(' '));
}
solve(['<div><p>This</p> is</div>',
'<div><a>perfectly</a></div>',
'<divs><p>valid</p></divs>',
'<div><p>This</div></p>',
'<div><p>is not</p><div>']);