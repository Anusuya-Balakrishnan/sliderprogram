var leftButton = document.querySelector(".leftButton");
var rightButton = document.querySelector(".rightButton");

// var imageContainer = document.querySelector(".imageContainer");
var imageBox = document.querySelector(".imageBox");

var imageBoxWidth = imageBox.clientWidth;
var imageWidth = document.querySelector(".imageBox img").clientWidth;
var currentLeftValue = imageBox.clientLeft;
console.log("currentLeftValue", currentLeftValue);
// console.log(imageBoxWidth);
// console.log(imageWidth);
var leftValue = 0;
function rightButtonClick() {
  if (leftValue < imageBoxWidth - imageWidth) {
    leftValue += imageWidth;
  } else {
    leftValue = 0;
  }
  console.log("leftValue" + leftValue);
  imageBox.style.left = `-${leftValue}px`;
}

// leftButton.onclick = leftButtonClick;

function leftButtonClick() {
  // console.leftButton

  // currentLeftValue=0
  if (leftValue == 0) {
    leftValue = imageBoxWidth - imageWidth;
  } else if (leftValue > 0 && leftValue <= imageBoxWidth - imageWidth) {
    console.log("leftValue$$$$$", leftValue);
    leftValue -= imageWidth;
  }
  console.log("leftValue" + leftValue);
  imageBox.style.left = `-${leftValue}px`;
}

// rightButton.onclick = rightButtonClick;
var setObj = setInterval(rightButtonClick, 2000);

imageBox.onmouseover = function () {
  console.log("mouseover");
  clearInterval(setObj);
};

imageBox.onmouseout = function () {
  console.log("mouseout");
  setObj = setInterval(rightButtonClick, 2000);
};
