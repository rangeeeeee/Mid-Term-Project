document.addEventListener("DOMContentLoaded", function() {
 
    const sections = document.querySelectorAll("main section");
    sections.forEach(function(section) {
        section.style.display = "none";
    });

    const defaultSection = document.getElementById("base");
    if (defaultSection) {
        defaultSection.style.display = "block";
    }

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
});
