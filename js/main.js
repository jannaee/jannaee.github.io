// Code for Parallax scrolling effects 
//attribute: https://1stwebdesigner.com/parallax-scrolling-tutorial/
'use strict';

$(document).ready(function () {
    $("a[href*='#']").each(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname
            && this.hash.replace(/#/, '')) {
            let $targetId = $(this.hash), 
                $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
            let $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
            if ($target) {
                let targetOffset = $target.offset().top;
                $(this).click(function () {
                    $("#nav li a").removeClass("active");
                    $(this).addClass('active');
                    $('html, body').animate({ scrollTop: targetOffset }, 1000);
                    return false;
                });
            }
        }
    });
});

//https://codemyui.com/hide-header-navigation-on-scroll-down-and-show-on-scroll-up/
$(document).ready(function () {
    let c, 
        currentScrollTop = 0,
        navbar = $('nav');
    $(window).scroll(function () {
        let a = $(window).scrollTop();
        let b = navbar.height();
        currentScrollTop = a;
        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });
});


//Hamburger icon for small screens
function openHamNav(){
   let x = document.getElementById('myHamNav');
   if (x.className === "nav-container") {
       x.className += " responsive";
   } else {
       x.className = "nav-container";
   }
}