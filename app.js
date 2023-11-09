const againBtn = document.getElementById("again-btn");
const showAnswer = document.getElementById("show-answer");
const guessNumberInput = document.getElementById("guess-number");
const checkBtn = document.getElementById("check-btn");
const showStatus = document.getElementById("show-status");
const showTotal = document.getElementById("show-total");
const showRecord = document.getElementById("show-record");
const body = document.querySelector("body");
const num = document.getElementById("num");
const recordNum = [];

const backNumber = Math.floor(Math.random() * 20) + 1;
showTotal.textContent = 20;

checkBtn.addEventListener("click", (e) => {
  const userNumber = guessNumberInput.value;
  const resultTotal = showTotal.textContent--;
  recordNum.push(`${num.innerText++}`);
  if (userNumber > 20 || userNumber < 0) {
    showStatus.innerText = "Iltimos, 1 va 20 oralig'ida raqam kiriting !!!";
  } else {
    if (userNumber < backNumber) {
      showStatus.innerText = "Kattaroq raqam";
      resultTotal;
    } else if (userNumber > backNumber) {
      showStatus.innerText = "Kichikroq raqam";
      resultTotal;
    } else {
      showStatus.innerText = "Siz toptingiz!!";
      showAnswer.innerText = userNumber;
      showRecord.textContent = recordNum.length;
      body.classList.add("bg-success");
    }
  }
});
