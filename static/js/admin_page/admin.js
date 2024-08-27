// 버튼 요소를 가져오기.
const infoButton = document.querySelector(".ProjectInfo_infoButton");
// 보이거나 숨겨야 할 div 요소를 가져오기.
const infoBox = document.querySelector(".ProjectInfo_infoBox");

// 기본값: infoBox를 숨기기.
infoBox.style.display = "none";
infoButton.setAttribute("aria-expanded", "false");

// 버튼 클릭 시 이벤트 처리
infoButton.addEventListener("click", function () {
    // 현재 aria-expanded 속성 값을 가져오기.
    const expanded = infoButton.getAttribute("aria-expanded") === "true";

    // 속성 값에 따라 표시 여부를 토글.
    infoButton.setAttribute("aria-expanded", !expanded);
    infoBox.style.display = expanded ? "none" : "block";
});

// 모든 대카테고리를 불러오기.
const menuItems = document.querySelectorAll(".MenuItems_menu");

// 각 대카테고리에 대해 클릭 이벤트를 추가
menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (e) {
        // 창 새로고침 방지
        e.preventDefault();
        //아이콘 가져오기
        const icon = menuItem.querySelector(".MenuItems_downIcon");
        // 현재 중카테고리가 열려있는지 확인
        const submenuContainer = menuItem.nextElementSibling; // 선택한 대카테고리 다음에 오는 중카테고리
        // const isExpanded = submenuContainer.classList.contains('MenuItems_show'); //submenuContainer에서 MenuItems_show를 포함하는 태그들을 classList에 담기

        submenuContainer.classList.toggle("MenuItems_show");

        // 아이콘 회전 상태를 중카테고리의 보임 상태에 맞춰 조정
        if (submenuContainer.classList.contains("MenuItems_show")) {
            icon.style.transform = "rotate(180deg)";
        } else {
            icon.style.transform = "rotate(0deg)";
        }

        // if (isExpanded) {
        //     // 중카테고리가 열려 있다면, 클래스를 삭제
        //     submenuContainer.classList.remove('MenuItems_show');
        //     icon.style.transform = "rotate(0deg)";
        // } else {
        //     // 중카테고리가 닫혀 있다면, 클래스를 추가
        //     submenuContainer.classList.add('MenuItems_show');
        //     icon.style.transform = "rotate(180deg)";
        // }
    });
});
