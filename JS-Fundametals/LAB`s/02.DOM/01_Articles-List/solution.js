function solve() {
	let title = document.getElementById("createTitle").value;
	let content = document.getElementById("createContent").value;

	if(title.length > 0 && content.length > 0){
		let article = document.createElement("article");
		let head3 = document.createElement("h3");
		let paragraph = document.createElement("p");

		head3.textContent = title;
		paragraph.textContent = content;

		article.appendChild(head3);
		article.appendChild(paragraph);

		document.getElementById("articles").appendChild(article);

		document.getElementById("createTitle").value = "";
		document.getElementById("createContent").value = "";
	}	
}