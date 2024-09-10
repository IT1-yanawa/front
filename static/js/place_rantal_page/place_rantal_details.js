// HTML 요소 가져오기
const slider = document.querySelector(".keen-slider");
const nextBtn = document.querySelector(".next-btn");
const beforeBtn = document.querySelector(".before-btn");

// 현재 인덱스를 관리할 변수 (기본값: 0)
let currentIndex = 0;
const totalSlides = 4; // 총 슬라이드 수
const slidesToShow = 2; // 한 번에 보여질 슬라이드 개수

// 슬라이드를 이동시키는 함수
function moveSlider() {
    const slideWidth = slider.clientWidth / slidesToShow;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // 왼쪽/오른쪽 버튼 보이기/숨기기 처리
    if (currentIndex === 0) {
        beforeBtn.style.visibility = "hidden"; // 첫 슬라이드에서는 왼쪽 버튼 숨기기
    } else {
        beforeBtn.style.visibility = "visible";
    }

    if (currentIndex === totalSlides - slidesToShow) {
        nextBtn.style.visibility = "hidden"; // 마지막 슬라이드에서는 오른쪽 버튼 숨기기
    } else {
        nextBtn.style.visibility = "visible";
    }
}

// 오른쪽 버튼 클릭 이벤트
nextBtn.addEventListener("click", function () {
    if (currentIndex < totalSlides - slidesToShow) {
        currentIndex++;
        moveSlider();
    }
});

// 왼쪽 버튼 클릭 이벤트
beforeBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        moveSlider();
    }
});

// 페이지 로드 시 슬라이드 초기화
moveSlider();

// ***********************************************

// .sider-1안에 있는 신청하기버튼
const applyButton = document.querySelector(".side-match-btn");

// .sider-2안에 있는 x 이미지(신청하기 닫기)
const applyCloseButton = document.querySelector(".apply-close-btn");

// .sider-2안에 있는 신청완료 버튼누르기 (신청완료됨)
const applyCompleteButton = document.querySelector(".apply-complete-btn");

// 신청하기와 유사한 추천매칭팀 div
const sideDiv1 = document.querySelector(".sider-1");

// 신청하기 신청상세 div
const sideDiv2 = document.querySelector(".sider-2");

// 신청완료시 신청완료 완료 됬다는 div
const sideDiv3 = document.querySelector(".sider-3");

// 신청하기 버튼누르면 신청 div나옴 페이지이동 X
applyButton.addEventListener("click", () => {
    sideDiv1.style.display = "none";
    sideDiv2.style.display = "block";
});

// x 이미지 누르면 초기화면 나옴 페이지이동 X
applyCloseButton.addEventListener("click", () => {
    sideDiv1.style.display = "block";
    sideDiv2.style.display = "none";
});

// 신청완료 버튼 누를시 신청완료 div나옴 페이지이동 X
applyCompleteButton.addEventListener("click", () => {
    // 매칭신청완료시 알림 뜸 (서버관리배우면 여기는 수정)
    alert("장소대여 신청완료!");
    sideDiv2.style.display = "none";
    sideDiv3.style.display = "block";
});
