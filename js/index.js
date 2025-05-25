var ticking = true;
var lastScrollTop = 0;
window.addEventListener("scroll", function (e) {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    let bd = document.body;
    if (ticking) {
        window.requestAnimationFrame(function () {
            bd.classList.toggle("sc", document.documentElement.scrollTop > 80);
 
            bd.classList.toggle("menushow", document.documentElement.scrollTop > 80 && st < lastScrollTop); //Yukari Menü Göster -Aşağı Menü Gizle

            lastScrollTop = st <= 0 ? 0 : st;

            ticking = true;
        });
        ticking = false;
    }
});

document.querySelector("header > nav ul > li.menu").onclick = document.querySelector("header > nav ul > li.cikis").onclick = function () {
    document.body.classList.toggle("menuopen", !document.body.classList.contains("menuopen"));
}


const menuItems = document.querySelectorAll("header > nav ul > li a");

menuItems.forEach(item => {
    item.addEventListener("click", function (e) {
        document.body.classList.remove("menuopen");
    });
});

setInterval(() => {
    let aktif_slide = document.querySelector("dg-slider > div.aktif");
    sonraki_slide = aktif_slide.nextElementSibling || document.querySelector("dg-slider > div:first-child");
    sonraki_slide.classList.add("aktif");
    aktif_slide.classList.remove("aktif");
}, 5000);