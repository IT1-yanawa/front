// 등록된 팀 목록보기 div가져오기
const mainBack = document.querySelector(".wrapper-btn-back");

// 등록된 팀 목록보기 눌렀을때 알림 + mainPage로 이동
mainBack.addEventListener("click", () => {
    // 예시로 해놓은거
    alert("메인페이지로 이동되었습니다!");
    // 위에 alert 지우고 등록된 팀 목록보기 버튼 눌렀을때 매칭 메인페이지로 이동하게 코드작성
});

// 마우스 올렸을때 배경색 바꾸기위해 버튼 class가져오기
const btnBackgroundColor = document.querySelector(".back-button");

// 마우스를 버튼 위로 가져갔을 때 색바뀜
btnBackgroundColor.addEventListener("mouseover", function () {
    btnBackgroundColor.style.backgroundColor = "rgb(192,192,192)";
});

// 마우스를 버튼에서 뗐을 때 원래색으로 돌아옴
btnBackgroundColor.addEventListener("mouseout", function () {
    btnBackgroundColor.style.backgroundColor = "";
});
