window.onscroll = function(){
    /* 获取滚动的高度 */
    var st = document.documentElement.scrollTop || document.body.scrollTop;/* 兼容浏览器 */
    /* 当滚动条大于某个高度显示效果 */
    if(st > window.offsetHeight){
        /* offset获取高度 */
        /* tnav_fixed由隐藏到显示 */
        tnav_fixed.style.display = "fixed";
        // fixed.style.position = "fixed";
    }
    else{
        /* 滚回恢复默认值 */
        tnav_fixed.style.display = "fixed";
        fixed.style.position = "static";
        /* position 默认值为static */
    }
}