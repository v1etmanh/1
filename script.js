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
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.2s ease-in-out";
        });

        // Sự kiện khi chuột rời ảnh
        figure.addEventListener("mouseleave", function() {
            this.style.border = "none";
            this.style.transform = "scale(1)";
        });

        // Sự kiện khi nhấn Tab vào ảnh
        figure.addEventListener("focus", function() {
            this.style.outline = "3px solid red";
            this.style.backgroundColor = "#f0f0f0";
        });

        // Sự kiện khi mất focus
        figure.addEventListener("blur", function() {
            this.style.outline = "none";
            this.style.backgroundColor = "transparent";
        });
    });
}
