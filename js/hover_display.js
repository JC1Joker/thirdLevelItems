// pc端通过鼠标悬浮显示相应的内容
var nav = document.querySelector(".scrolling_nav");
var lis = nav.querySelectorAll("li");
var mainArticle = document.querySelectorAll(
  "#recommend > main, #liaoning > main, #fake_rebates > main, #fake_investment > main, #fake_loans > main, #fake_ec > main, #fake_police > main, #fake_credit > main, #fake_service > main, #fake_leader > main, #fake_game_trade > main, #fake_dating > main, #other > main"
);

for (var i = 0; i < lis.length; i++) {
  lis[i].index = i;
  lis[i].onmouseover = function () {
    for (var t = 0; t < mainArticle.length; t++) {
      mainArticle[t].style.display = "none";
      lis[t].classList.remove("cur");
    }
    mainArticle[this.index].style.display = "block";
    lis[this.index].classList.add("cur");
  };
}
