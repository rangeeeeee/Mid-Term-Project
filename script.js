document.addEventListener("DOMContentLoaded", function() {
    // 모든 메뉴 항목을 선택합니다.
    const menuItems = document.querySelectorAll("nav ul li a");

    // 각 메뉴 항목에 클릭 이벤트를 추가합니다.
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener("click", function(event) {
            // 클릭 이벤트의 기본 행동을 막습니다.
            event.preventDefault();

            // 모든 섹션을 숨깁니다.
            const sections = document.querySelectorAll("main section");
            sections.forEach(function(section) {
                section.style.display = "none";
            });

            // 클릭한 메뉴 항목의 대상 섹션을 보여줍니다.
            const targetSectionId = menuItem.dataset.target;
            const targetSection = document.getElementById(targetSectionId);
            targetSection.style.display = "block";
        });
    });

    // 첫 번째 메뉴 항목의 섹션을 기본적으로 표시합니다.
    const firstMenuItem = menuItems[0];
    const initialSectionId = firstMenuItem.dataset.target;
    document.getElementById(initialSectionId).style.display = "block";
});
