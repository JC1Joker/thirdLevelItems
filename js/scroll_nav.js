//鼠标滚动导航栏
var scrollingNav = document.querySelector('.scrolling_nav');
var isDown = false;
var startX;
var scrollLeft;

scrollingNav.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - scrollingNav.offsetLeft;
  scrollLeft = scrollingNav.scrollLeft;
});

scrollingNav.addEventListener('mouseleave', () => {
  isDown = false;
});

scrollingNav.addEventListener('mouseup', () => {
  isDown = false;
});

scrollingNav.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollingNav.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  scrollingNav.scrollLeft = scrollLeft - walk;
});


var navItems = document.querySelectorAll('.scrolling_nav li');

navItems.forEach((item) => {
  item.addEventListener('click', function() {
    navItems.forEach((item) => {
      item.classList.remove('active');
    });
    this.classList.add('active');
  });
});

if(window.matchMedia("(max-width:800px)").matches){
  // 鼠标滚动导航栏
  var scrollingNav = document.querySelector('.scrolling_nav');
  var isDown = false;
  var startX;
  var scrollLeft;

  scrollingNav.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scrollingNav.offsetLeft;
    scrollLeft = scrollingNav.scrollLeft;
  }, { passive: true });

  scrollingNav.addEventListener('touchend', () => {
    isDown = false;
  }, { passive: true });

  scrollingNav.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    e.preventDefault();/* 阻止触摸事件的默认行为 */
    const x = e.touches[0].pageX - scrollingNav.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    scrollingNav.scrollLeft = scrollLeft - walk;
  }, { passive: false }); // 将被动选项设置为false

  var navItems = document.querySelectorAll('.scrolling_nav li');

  navItems.forEach((item) => {
    item.addEventListener('click', function() {
      navItems.forEach((item) => {
        item.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
}
