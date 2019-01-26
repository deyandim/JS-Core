(function () {
    let validYear = false;
    let validMonth = false;
    let validDay = false;

    let outputDiv = document.getElementById('output');

    let btn = document.getElementsByTagName('button')[0];
    btn.addEventListener('click', validate);

    let month = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    function validate() {
        let inputYear = document.getElementById('year').value;
        let inputMonth = document.getElementById('month').value;
        let inputDay = document.getElementById('day').value;
        let outputMonth;
        //validating year
        if (inputYear > 0 && inputYear <= 9999) {
            validYear = true;
        }
        // validating month
        if (month.includes(inputMonth)) {
            validMonth = true;

            // format month for output
            outputMonth = month.indexOf(inputMonth) + 1;
            outputMonth = ('0' + outputMonth).slice(-2);

            // validating day
            if (((+inputYear % 4 == 0) && (+inputYear % 100 != 0)) || (+inputYear % 400 == 0) && inputMonth === 'February') {
                if (inputDay > 0 && inputDay < 30) {
                    validDay = true;
                }
            }
            switch (inputMonth) {
                case 'January':
                case 'March':
                case 'May':
                case 'July':
                case 'August':
                case 'October':
                case 'December':
                    if (inputDay > 0 && inputDay < 32) {
                        validDay = true;
                    }
                    break;
                case 'April':
                case 'June':
                case 'September':
                case 'November':
                    if (inputDay > 0 && inputDay < 31) {
                        validDay = true;
                    }
                    break;
            }
        }
        else{
            outputMonth = inputMonth;
        }

        // format day
        inputDay = ('0' + inputDay).slice(-2);

        // output
        if (validDay && validMonth && validYear) {
            let p = document.createElement('p');
            p.textContent = `Date: ${inputYear}-${outputMonth}-${inputDay} is valid`;
            outputDiv.appendChild(p);
        }
        else {
            let p = document.createElement('p');
            p.textContent = `Date: ${inputYear}-${outputMonth}-${inputDay} is not valid`;
            outputDiv.appendChild(p);
        }
        validYear = false;
        validMonth = false;
        validDay = false;
        inputYear = document.getElementById('year').value = '';
        inputMonth = document.getElementById('month').value = '';
        inputDay = document.getElementById('day').value = '';
    }
})();