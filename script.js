document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("main section");
    sections.forEach(function(section) {
        section.style.display = "none";
    });

    const defaultSection = document.getElementById("base");
    if (defaultSection) {
        defaultSection.style.display = "block";
    }

    // 모든 메뉴 항목을 선택합니다.
    const menuItems = document.querySelectorAll("nav ul li a");
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener("click", function(event) {
            event.preventDefault();
            sections.forEach(function(section) {
                section.style.display = "none";
            });

            const targetSectionId = menuItem.getAttribute("data-target");
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });

 
    const titleLink = document.querySelector("h1 a");

   
    titleLink.addEventListener("click", function(event) {
        
    });
});
