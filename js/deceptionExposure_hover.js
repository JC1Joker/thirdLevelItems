// pc端通过鼠标悬浮显示相应的内容
var nav = document.querySelector(".scrolling_nav");
var lis = nav.querySelectorAll("li");
var mainArticle = document.querySelectorAll(
  "#recommend > main, #liaoning > main, #dynamic > main , #knowledge > main, #hot_spot > main"
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
