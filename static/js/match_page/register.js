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
const nextButton1 = document.querySelector(".next-button-1");
const nextButton2 = document.querySelector(".next-button-2");
const beforeButton1 = document.querySelector(".before-button-1");
const beforeButton2 = document.querySelector(".before-button-2");
const finishButton = document.querySelector(".finish-button");

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

finishButton.addEventListener("click", () => {
    alert("매칭 등록 완료!!");
});
