const fontControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontControlRef.oninput = function() {
  textRef.style.fontSize = fontControlRef.value + "px";
};