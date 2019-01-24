function solve() {
	let rightAnswers = 0;
	let buttons = document.getElementsByTagName('button');
	let radioBtnYear = document.getElementsByName('softUniYear');
	let popularName = document.getElementsByName('popularName');
	let softUniFounder = document.getElementsByName('softUniFounder');
	let result = document.getElementById('result');

	buttons[0].addEventListener('click', answer);
	buttons[1].addEventListener('click', answer2);
	buttons[2].addEventListener('click', getResult);

	let firstAnswer;
	let secondAnswer;

	function answer() {
		for (let btn of radioBtnYear) {
			if (btn.checked) {
				firstAnswer = btn.value;
				document.getElementsByTagName('section')[1].style.display = 'block';
				buttons[0].removeEventListener('click', answer);
			}
			btn.setAttribute('disabled', true);
			
			
		}
	}


	function answer2() {
		for (let btn2 of popularName) {
			if (btn2.checked) {
				secondAnswer = btn2.value;
				document.getElementsByTagName('section')[2].style.display = 'block';
				buttons[0].removeEventListener('click', answer);
			}
			btn2.setAttribute('disabled', true);
		}
	}

	function getResult() {
		for (let btn of softUniFounder) {
			if (btn.checked) {
				if (firstAnswer == '2013') {
					rightAnswers++;
				}
				if (secondAnswer == 'Pesho') {
					rightAnswers++;
				}
				if (btn.value == 'Nakov') {
					rightAnswers++;
				}

				if (rightAnswers === 3) {
					result.textContent = 'You are recognized as top SoftUni fan!';
				} else {
					result.textContent = `You have ${rightAnswers} right answers`;
				}
			}
			btn.setAttribute('disabled', true);
		}
	}
}