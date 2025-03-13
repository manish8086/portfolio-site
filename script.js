console.log("Welcome to Manish Gudimetla's Portfolio!");
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
    });

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "all 0.6s ease-out";
            }
        });
    });
});

