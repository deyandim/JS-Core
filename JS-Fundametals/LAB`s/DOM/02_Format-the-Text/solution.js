function solve(){
  let mainParagraph = document.getElementById("input").textContent;
  let first = mainParagraph.indexOf("Web.") + 4;
  let firstP = mainParagraph.slice(0, first);
  let second = mainParagraph.indexOf("styles.") + 7;
  let secondP = mainParagraph.slice(first, second);
  mainParagraph = mainParagraph.slice(second, mainParagraph.length);


  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");

  document.getElementById("output").appendChild(p1);
  document.getElementById("output").appendChild(p2);
  document.getElementById("output").appendChild(p3);

  p1.textContent = firstP;
  p2.textContent = secondP;
  p3.textContent = mainParagraph;
  console.log(p1.textContent);
  

}

