//your code here
const evaluatedText = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");

evaluatedText.addEventListener("input", () => {
  const count = evaluatedText.value.length;
  letterCount.textContent = count;
});