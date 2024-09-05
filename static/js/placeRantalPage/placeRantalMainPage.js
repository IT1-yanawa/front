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

//-------------------------------------------------------------------------

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

//-------------------------------------------------------------------------

// 지역선택 옆 버튼
const selectPlace = document.querySelector(".button-icon-left");

// 모달창안에 x 버튼
const cancelButton = document.querySelector(".icon-button-cancel");

// 지역선택 상세창
const modalDiv = document.querySelector(".modal-div");

// 지역선택 옆 버튼 누를시 지역선택 상세창 생김
selectPlace.addEventListener("click", () => {
    modalDiv.style.display = "block";
});

// 모달창안에 x 버튼 누를시 지역선택 상세창 사라짐
cancelButton.addEventListener("click", () => {
    modalDiv.style.display = "none";
});

//-------------------------------------------------------------------------

// category-item 클랴스 가져오기
const categoryItem = document.querySelectorAll(".category-item");

categoryItem.forEach((button) => {
    button.addEventListener("click", () => {
        // 모든 버튼에서 check-category-item 클래스를 제거
        categoryItem.forEach((btn) =>
            btn.classList.remove("check-category-item")
        );

        // 클릭된 버튼에만 check-category-item 클래스를 추가
        button.classList.add("check-category-item");
    });
});

//-------------------------------------------------------------------------

// 각 버튼 클래스와 해당하는 카테고리 요소를 매핑하는 객체
const places = {
    "place-all": "empty-category",
    "place-seoul": "seoul",
    "place-busan": "busan",
    "place-daegu": "daegu",
    "place-incheon": "incheon",
    "place-gwangju": "gwangju",
    "place-daejeon": "daejeon",
    "place-ulsan": "ulsan",
    "place-sejong": "sejong",
    "place-gyeonggi": "gyeonggi",
    "place-gangwondo": "gangwondo",
    "place-chungcheongbugdo": "chungcheongbugdo",
    "place-chungcheongnamdo": "chungcheongnamdo",
    "place-jeonlabugdo": "jeonlabugdo",
    "place-jeonlanamdo": "jeonlanamdo",
    "place-gyeongsangbugdo": "gyeongsangbugdo",
    "place-gyeongsangnamdo": "gyeongsangnamdo",
    "place-jeju": "jeju",
    // 앞으로 추가될 장소들
};
// .modal-content 클래스 가져오기
const modalContent = document.querySelector(".modal-content");

// 클릭 이벤트 위임
modalContent.addEventListener("click", (event) => {
    const clickedButton = event.target.closest("button");

    // 버튼이 클릭된 경우에만 처리
    if (clickedButton && places.hasOwnProperty(clickedButton.classList[1])) {
        // 모든 버튼에서 check-category-item 클래스 제거
        const allButtons = modalContent.querySelectorAll(".category-item");
        allButtons.forEach((button) =>
            button.classList.remove("check-category-item")
        );

        // 클릭된 버튼에만 check-category-item 클래스 추가
        clickedButton.classList.add("check-category-item");

        // 모든 카테고리 숨기기
        Object.values(places).forEach((category) => {
            document.querySelector(`.${category}`).style.display = "none";
        });

        // 클릭된 버튼에 해당하는 카테고리만 표시
        document.querySelector(
            `.${places[clickedButton.classList[1]]}`
        ).style.display = "block";
    }
});

//-------------------------------------------------------------------------
// 모든 select-item 버튼을 선택
const buttons = document.querySelectorAll(".select-item");

// 각 버튼에 대해 클릭 이벤트 리스너 추가
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const svgPath = button.querySelector("path");

        // check 클래스가 있으면 제거하고, 없으면 추가
        if (svgPath.classList.contains("check")) {
            svgPath.classList.remove("check");
            svgPath.classList.add("no-check");
        } else {
            svgPath.classList.remove("no-check");
            svgPath.classList.add("check");
        }
    });
});
// -------------------------------------------------------

// 지역 선택초기화 버튼 가져오기
const resetButton = document.querySelector(".reset-button");

// 초기화 버튼 클릭 이벤트
resetButton.addEventListener("click", () => {
    // 지역선택 들의 카테고리 요소 가져오기
    const allButtons = modalContent.querySelectorAll(".category-item");
    // 선택한 체크박스들 가져오기
    const allpaths = modalContent.querySelectorAll("path");

    allButtons.forEach((button) => {
        // 선택한 지역시의 클래스 제거
        button.classList.remove("check-category-item");
    });

    allpaths.forEach((path) => {
        // 체크된 클래스들 제거
        path.classList.remove("check");
        path.classList.add("no-check");
    });
});
// -------------------------------------------------------

// 적용하기 버튼 가져오기
const applyButton = document.querySelector(".apply-button");

// 모달창안 적용 버튼 누를시 지역선택 상세창 사라짐 (사라지게만함 적용은 안된거임)
applyButton.addEventListener("click", () => {
    modalDiv.style.display = "none";
});

//-----------------------------------------------------------------------
// 스포츠 선택 옆 버튼
const selectSports = document.querySelector(".button-icon-right");

// 모달창안에 x 버튼
const cancelButtonSports = document.querySelector(".icon-button-cancel-sports");

// 스포츠 선택 상세창
const modalDivSports = document.querySelector(".modal-div-sports");

// 스포츠 선택 옆 버튼 누를시 스포츠 선택 상세창 생김
selectSports.addEventListener("click", () => {
    modalDivSports.style.display = "block";
});

// 스포츠 선택 모달창안에 x 버튼 누를시 스포츠 선택 상세창 사라짐
cancelButtonSports.addEventListener("click", () => {
    modalDivSports.style.display = "none";
});

// --------------------------------------------------------------------

// 스포츠 초기화 버튼 가져오기
const resetButtonSports = document.querySelector(".reset-button-sports");

// 스포츠 모달창가져오가
const modalContentSports = document.querySelector(".modal-content-sports");

// 초기화 버튼 클릭 이벤트
resetButtonSports.addEventListener("click", () => {
    // 스포츠 선택 들의 카테고리 요소 가져오기
    const allButtons = modalContentSports.querySelectorAll(".category-item");
    // 선택한 체크박스들 가져오기
    const allpaths = modalContentSports.querySelectorAll("path");

    allpaths.forEach((path) => {
        // 체크된 클래스들 제거
        path.classList.remove("check");
        path.classList.add("no-check");
    });
});

// ------------------------------------------------------------------------------

// 스포츠 선택 적용하기 버튼 가져오기
const applyButtonSports = document.querySelector(".apply-button-sports");

// 모달창안 적용 버튼 누를시 지역선택 상세창 사라짐 (사라지게만함 적용은 안된거임)
applyButtonSports.addEventListener("click", () => {
    modalDivSports.style.display = "none";
});

// --------------------------------------------------------------------------

// 장소 사진 모두 담고있는 div 가져오기
const placeImgContainers = document.querySelectorAll(".place-img");

// 다음버튼
const nextBtns = document.querySelectorAll(".next-btn");

// 이전버튼
const beforeBtns = document.querySelectorAll(".before-btn");

// 안에 사진들 가져오기
placeImgContainers.forEach((placeImgContainer, index) => {
    const images = placeImgContainer.querySelectorAll("img");
    let currentIndex = 0;

    // 이미지의 개수
    const totalImages = images.length;

    // 다음버튼 누를시 이벤트
    nextBtns[index].addEventListener("click", () => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            // 마지막 이미지에서 다시 처음으로
            currentIndex = 0;
        }
        updateSlide(placeImgContainer, currentIndex);
    });

    // 이전버튼 누를시 이벤트
    beforeBtns[index].addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // 처음에서 마지막으로
            currentIndex = totalImages - 1;
        }
        updateSlide(placeImgContainer, currentIndex);
    });

    // 마우스가 슬라이드 위에 있을 때만 해당 슬라이드의 버튼 표시
    placeImgContainer.parentElement.addEventListener("mouseover", () => {
        nextBtns[index].style.display = "block";
        beforeBtns[index].style.display = "block";
    });

    // 마우스가 슬라이드 밖으로 나가면 해당 슬라이드의 버튼 숨기기
    placeImgContainer.parentElement.addEventListener("mouseout", () => {
        nextBtns[index].style.display = "none";
        beforeBtns[index].style.display = "none";
    });
});

function updateSlide(container, index) {
    // 이미지 너비가 320임
    const offset = -index * 320;
    // 너비 만큼 x축방향으로 이동
    container.style.transform = `translateX(${offset}px)`;
}
