document.addEventListener("DOMContentLoaded", function() {
 
    const sections = document.querySelectorAll("main section");
    sections.forEach(function(section) {
        section.style.display = "none";
    });

    const firstMenuItem = document.querySelector("nav ul li a");
    const initialSectionId = firstMenuItem.getAttribute("data-target");
    document.getElementById(initialSectionId).style.display = "block";


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
