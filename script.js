document.addEventListener("DOMContentLoaded", function() {
    console.log("Page has loaded");
    addTabFocus();
});

function addTabFocus() {
    let figures = document.querySelectorAll("figure");
    figures.forEach(figure => {
        figure.setAttribute("tabindex", "0");

        // Sự kiện khi rê chuột vào ảnh
        figure.addEventListener("mouseover", function() {
            this.style.border = "2px solid blue";
        });

        // Sự kiện khi chuột rời ảnh
        figure.addEventListener("mouseleave", function() {
            this.style.border = "none";
        });

        // Sự kiện khi nhấn Tab vào ảnh
        figure.addEventListener("focus", function() {
            this.style.outline = "3px solid red";
        });

        // Sự kiện khi mất focus
        figure.addEventListener("blur", function() {
            this.style.outline = "none";
        });
    });
}
