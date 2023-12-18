window.onload = function () {
  showCustomModal();
  startCountdown();
};

function showCustomModal() {
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("modal").style.display = "block";
}

function hideCustomModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.transition =
    "background-color 1s ease";
}


let countdownValue = 4;
/* countdown表示倒计时 */
let countdown;

function startCountdown() {
  /* 在button按钮设计倒计时 */
  const confirmButton = document.getElementById("confirmButton");
  confirmButton.disabled = true;

  countdown = setInterval(function () {
    countdownValue--;
    if (countdownValue <= 0) {
      clearInterval(countdown);
      confirmButton.disabled = false;
      confirmButton.style.color = "blue";
      countdownValue = 4;
      confirmButton.innerText = "我知道了";
    } else {
      confirmButton.innerText = `我知道了(${countdownValue}s)`;
    }
  }, 1000);
}
