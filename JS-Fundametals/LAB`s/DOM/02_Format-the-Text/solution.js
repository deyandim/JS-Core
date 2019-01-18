function solve() {
  let mainParagraph = document.getElementById("input").textContent;
  let newArr = [];
  let count = 0;
  let index = 0;

  // spliting string to paragraphs
  for (i = 0; i < mainParagraph.length; i++) {
    if (mainParagraph[i] === "." || mainParagraph[i] === "!" || mainParagraph[i] === "?") {
      count++;
    }
    if (count == 3) {
      newArr.push(mainParagraph.slice(index, i + 1));
      index = i + 1;
      count = 0;
    }
  }

  // adding last paragraph
  last = mainParagraph.slice(index, mainParagraph.length);
  newArr.push(last);

  // create and appending
  for (let paragraph of newArr) {
    let p1 = document.createElement("p");
    document.getElementById("output").appendChild(p1);
    p1.textContent = paragraph;
  }
}