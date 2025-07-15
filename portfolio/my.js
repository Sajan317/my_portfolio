console.log("Welcome to my portfolio!");
document.addEventListener("DOMContentLoaded", function() {
            const sections = document.querySelectorAll("section");
            sections.forEach(section => {
                section.style.padding = "20px";
                section.style.margin = "10px 0";
                section.style.border = "1px solid #ccc";
                section.style.borderRadius = "5px";
            });
        });