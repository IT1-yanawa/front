// 상위 목록에 마우스 가져다대면 색변화 때면 원래대로
document.querySelectorAll(".span-step").forEach((step) => {
    const stepInfo = step.querySelector(".span-step-1");

    step.addEventListener("mouseover", () => {
        stepInfo.style.display = "block";
        step.style.backgroundColor = "gray";
    });

    step.addEventListener("mouseout", () => {
        stepInfo.style.display = "none";
        step.style.backgroundColor = "";
    });
});
// 다음단계 이전단계 등록완료 버튼 가져오가
const nextButton1 = document.querySelector(".next-button-1");
const nextButton2 = document.querySelector(".next-button-2");
const beforeButton1 = document.querySelector(".before-button-1");
const beforeButton2 = document.querySelector(".before-button-2");
const finishButton = document.querySelector(".finish-button");

// 각 폼들 가져오기
const form1 = document.getElementById("form-1");
const form2 = document.getElementById("form-2");
const form3 = document.getElementById("form-3");

// 다음 버튼 클릭(Form 1 -> Form 2)
nextButton1.addEventListener("click", () => {
    form1.style.display = "none";
    form2.style.display = "block";
});

// 다음 버튼 클릭(Form 2 -> Form 3)
nextButton2.addEventListener("click", () => {
    form2.style.display = "none";
    form3.style.display = "block";
});

// 이전 버튼 클릭(Form 2 -> Form 1)
beforeButton1.addEventListener("click", () => {
    form2.style.display = "none";
    form1.style.display = "block";
});

// 이전 버튼 클릭 (Form 3 -> Form 2)
beforeButton2.addEventListener("click", () => {
    form3.style.display = "none";
    form2.style.display = "block";
});
// 등록완료 버튼 누를시 alert로 알림뜸
finishButton.addEventListener("click", () => {
    alert("매칭 등록 완료!!");
});
// 선택한 종목들을 추적하여 표시하는 함수
function updateSelectedSports() {
    // 모든 체크박스 요소 선택
    const checkboxes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    // 체크된 종목들을 배열로 추출
    const selectedOptions = Array.from(checkboxes).map(
        (checkbox) => checkbox.value
    );

    // 선택된 종목들을 표시할 요소
    const displayElement = document.getElementById("selectedSportsDisplay");

    if (selectedOptions.length > 0) {
        displayElement.textContent = `선택된 종목: ${selectedOptions.join(
            ", "
        )}`;
    } else {
        displayElement.textContent = "선택된 종목이 없습니다.";
    }
}

// 모든 체크박스에 변경 이벤트 리스너 추가
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", updateSelectedSports);
});

// 페이지 로드 후 초기 상태로 호출
updateSelectedSports();
