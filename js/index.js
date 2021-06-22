window.addEventListener('load', function () {
    var focus = document.querySelector('.focus');
    var focus_l = document.querySelector('.focus_l');
    var focus_r = document.querySelector('.focus_r');
    var focusWidth = focus.offsetWidth;
    // 鼠标经过
    focus.addEventListener('mouseenter', function () {
        focus_l.style.display = 'block';
        focus_r.style.display = 'block';
        clearInterval(time);
    })
    // 鼠标离开
    focus.addEventListener('mouseleave', function () {
        focus_l.style.display = 'none';
        focus_r.style.display = 'none';
        time = setInterval(function () {
            focus_r.click();
        }, 2000);
    })
    // 动态生成圆
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = this.document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index', i)
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            animate(ul, -focusWidth * index);
            num = index;
            circle = index;
        })
        var num = 0;
    }
    ol.children[0].className = 'current';
    var circle = 0;
    var flag = true;
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 右
    focus_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle++;
            if (circle == ul.children.length - 1) {
                circle = 0;
            }
            circleChange();
        }
    })
    // 左
    focus_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle--;
            if (circle == -1) {
                circle = ol.children.length - 1;
            }
            circleChange();
        }
    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    // 自动播放
    var time = setInterval(function () {
        focus_r.click();
    }, 2000);
})

// window.addEventListener('load', function () {
//     var nav = this.document.querySelector('.nav');
//     var fixedtool = this.document.querySelector('.fixedtool');
//     var goBack = this.document.querySelector('.goBack');
//     var recom = this.document.querySelector('.recom');
//     var juli = fixedtool.offsetTop - nav.offsetTop;
//     this.document.addEventListener('scroll', function () {
//         if (window.pageYOffset > nav.offsetTop) {
//             fixedtool.style.position = 'fixed';
//             fixedtool.style.top = juli + 'px';
//         } else {
//             fixedtool.style.position = 'absolute';
//             fixedtool.style.top = '200px';
//         }
//         if (window.pageYOffset > recom.offsetTop) {
//             goBack.style.display = 'block';
//         } else {
//             goBack.style.display = 'none';
//         }
//     })
//     goBack.addEventListener('click', function () {
//         window.time = setInterval(function () {
//             if (window.pageYOffset == 0) {
//                 clearTimeout(window.time);
//             } else {
//                 step = window.pageYOffset / 10;
//                 window.scroll(0, window.pageYOffset - step);
//             }
//         }, 15);
//     })
// })

// jQ
$(function () {
    var flag = true;
    // 显示函数
    function toggleTool() {
        var top = $(".recom").offset().top;
        if ($(document).scrollTop() >= top) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    };
    toggleTool()
    // 滚动
    $(window).scroll(function () {
        toggleTool();
        if (flag) {
            $(".floor").children("div").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current");
                }
            })
        }
    });
    // 返回
    $(".goBack").click(function () {
        $("body,html").animate({
            scrollTop: 0
        });
    });
    // 点击
    $(".fixedtool").find("li").click(function () {
        // var top = $(".floor").offset().top;
        // var x = $(this).index(); 
        // var y = $(".jiadian").outerHeight(true); 
        flag = false;
        var current = $(".floor").children("div").eq($(this).index()).offset().top;
        $("body,html").animate({
            scrollTop: current
        }, function () {
            flag = true;
        });
        $(this).addClass("current").siblings().removeClass("current");
    });
})