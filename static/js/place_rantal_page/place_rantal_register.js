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
    alert("대여 장소 등록 완료!!");
});
// 파일을 업로드할 input태그 클래스 가져옴
document.querySelector(".file-input").addEventListener("change", (event) => {
    // 이벤트 발생시켜 지금 파일을 fileList로 정의
    const fileList = event.target.files;
    // 업로드한 파일을 ul 태그 안에 가져오기위해 ul class가져옴
    const uploadPool = document.querySelector(".upload-pool");

    // ul 안에 값 초기화
    uploadPool.innerHTML = "";

    // 가져온 파일 길이만큼 반복
    for (let i = 0; i < fileList.length; i++) {
        // 안에 li 태그 생성
        const listItem = document.createElement("li");
        // 그 li 태그 클래스이름 지정
        listItem.className = "upload-item";

        // 가져온 파일 링크(파일) 가져올수 있게 a태그 생성
        const linkItem = document.createElement("a");

        // 그 안에 반복해 가져온 파일의 이름을 text로 뿌림
        linkItem.textContent = fileList[i].name;

        // 리스트 아이템 다음 자식에 링크아이템 생성
        listItem.appendChild(linkItem);

        // 업로드한 ul태그 다음 자식에 리스트아이템 생성
        uploadPool.appendChild(listItem);
    }
});
