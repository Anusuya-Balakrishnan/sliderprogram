var containerElement = document.getElementsByClassName("container")[0];

for (let i = 0; i < 10; i++) {
  var h1Element = document.createElement("div");
  //   var textMessage = document.createTextNode("Hello World");
  //   h1Element.appendChild(textMessage);

  containerElement.appendChild(h1Element);
  h1Element.style.width = "200px";
  h1Element.style.height = "200px";
  h1Element.style.margin = "20px";
  h1Element.style.backgroundColor = "green";
}
console.log(containerElement);
containerElement.style.backgroundColor = "blue";
containerElement.style.display = "flex";
containerElement.style.flexWrap = "wrap";
