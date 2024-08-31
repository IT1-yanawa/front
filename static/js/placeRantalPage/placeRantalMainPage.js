document.addEventListener("DOMContentLoaded", () => {
    // 각 item 버튼들을 선택
    const items = document.querySelectorAll(".list-item button");

    // 모든 item 버튼들에 클릭 이벤트 리스너 추가
    items.forEach((button) => {
        button.addEventListener("click", () => {
            // 현재 check-list-item 클래스를 가지고 있는 요소를 선택
            const CheckedItem = document.querySelector(".check-list-item");
            // 현재 check-span 클래스를 가지고 있는 요소를 선택
            const CheckedSpan = CheckedItem?.querySelector(".check-span");

            // 기존의 check-list-item 및 check-span 클래스를 제거
            if (CheckedItem) {
                CheckedItem.classList.remove("check-list-item");
            }
            if (CheckedSpan) {
                CheckedSpan.classList.remove("check-span");
            }

            // 클릭한 버튼의 부모 요소(list-item)에 check-list-item 클래스 추가
            const newCheckedItem = button.parentElement;
            newCheckedItem.classList.add("check-list-item");

            // 클릭한 버튼의 span에 check-span 클래스 추가
            const newCheckedSpan =
                newCheckedItem.querySelector(".list-item-span");
            if (newCheckedSpan) {
                newCheckedSpan.classList.add("check-span");
            }
        });
    });
});

// 색 바꾸기위해 클래스 가져옴
const colorChange = document.querySelector(".popular-place-header-name");

// 기본 색 지정
const originColor = "rgb(50, 87, 182)";

// 바꿀 색
const redColor = "red";

// 번갈아가면서 변경되기위해 사용
let color = true;

// 0.5초마다 색바뀜
setInterval(() => {
    colorChange.style.color = color ? redColor : originColor;
    color = !color;
}, 500);
