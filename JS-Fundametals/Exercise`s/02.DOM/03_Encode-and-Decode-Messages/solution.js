function solve() {
	function solve() {
		let encodeBtn = document.getElementsByTagName('button')[0];
		let decodeBtn = document.getElementsByTagName('button')[1];
		let encoded = document.getElementsByTagName('textarea')[0].value;
		let decoded = document.getElementsByTagName('textarea')[1].value;
	
		encodeBtn.addEventListener('click', ()=>{
			let encodeMessege = document.getElementsByTagName('textarea')[0].value;
			document.getElementsByTagName('textarea')[1].value = decoded;
			for(let i = 0; i < encodeMessege.length; i++){
				document.getElementsByTagName('textarea')[1].value += String.fromCharCode(encodeMessege[i].charCodeAt() + 1);
			}
			document.getElementsByTagName('textarea')[0].value = encoded;
		});
	
		decodeBtn.addEventListener('click', ()=>{
		   let decodeMessege = document.getElementsByTagName('textarea')[1].value;
			document.getElementsByTagName('textarea')[1].value = "";
			for(let i = 0; i < decodeMessege.length; i++){
				document.getElementsByTagName('textarea')[1].value += String.fromCharCode(decodeMessege[i].charCodeAt() - 1);
			}
	
	
		});
	
	}
}