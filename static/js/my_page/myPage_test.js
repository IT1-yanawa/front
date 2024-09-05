// 프로필 편집 열기
document
    .querySelector(
        ".ProfileViewHeaderActions_ProfileViewHeaderActions__btnSetting__eb6gX"
    )
    .addEventListener("click", function () {
        document.getElementById("profile-view").style.display = "none";
        document.getElementById("profile-edit").style.display = "block";
    });

// 프로필 편집 저장 또는 취소 시 원래 화면으로 돌아가기
document
    .querySelectorAll(
        ".ProfileEditDescription_ProfileEditDescription__actions__buttons__OS5HV button"
    )
    .forEach(function (button) {
        button.addEventListener("click", function () {
            document.getElementById("profile-view").style.display = "block";
            document.getElementById("profile-edit").style.display = "none";
        });
    });

// 프로필 사진 업로드 기능
document
    .getElementById("openFilePicker")
    .addEventListener("click", function () {
        document.getElementById("fileInput").click();
    });

// 첫 번째 모달
const openModalBtn = document.getElementById("openModal2");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModal");
const cancelButton = modal.querySelector(".css-6ty6h4");
const saveButton = modal.querySelector(".css-typupr");

// 첫 번째 모달 열기
openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
    console.log("모달이 열렸습니다.");
});

// 첫 번째 모달 닫기
closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
    console.log("모달이 닫혔습니다.");
});

// 첫 번째 모달의 취소 및 저장 버튼 클릭 시 모달 닫기
cancelButton.addEventListener("click", function () {
    modal.style.display = "none";
    console.log("취소 버튼이 눌려 모달이 닫혔습니다.");
});

saveButton.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작(폼 제출) 방지
    modal.style.display = "none";
    console.log("저장 버튼이 눌려 모달이 닫혔습니다.");
});

// 두 번째 모달
const openModalBtn2 = document.getElementById("poneNumbermodal");
const modal2 = document.getElementById("myModal2");
const closeModalBtn2 = document.getElementById("closeModal2");
const cancelButton3 = modal2.querySelector(".css-6ty6h4");
const saveButton3 = modal2.querySelector(".css-typupr");

// 두 번째 모달 열기
openModalBtn2.addEventListener("click", function () {
    modal2.style.display = "block";
    console.log("두 번째 모달이 열렸습니다.");
});

// 두 번째 모달 닫기
closeModalBtn2.addEventListener("click", function () {
    modal2.style.display = "none";
    console.log("두 번째 모달이 닫혔습니다.");
});

// 두 번째 모달 외부 클릭 시 닫기
window.addEventListener("click", function (event) {
    if (event.target === modal2) {
        modal2.style.display = "none";
        console.log("두 번째 모달 외부 클릭으로 닫혔습니다.");
    }
});

// 두 번째 모달의 취소 및 저장 버튼 클릭 시 모달 닫기
cancelButton3.addEventListener("click", function () {
    modal2.style.display = "none";
    console.log("취소 버튼이 눌려 두 번째 모달이 닫혔습니다.");
});

saveButton3.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작(폼 제출) 방지
    modal2.style.display = "none";
    console.log("저장 버튼이 눌려 두 번째 모달이 닫혔습니다.");
});

// ============================================
// '한 줄 소개' 버튼 클릭 시 입력란 보이기
const button = document.querySelector(
    ".ListItem_ListItem__root__4HTKO.ListItem_ListItem__divider__KWrpp.ListItem_ListItem__button__cVygs.ProfileEditDescription_ProfileEditDescription__listItem__VoPor"
);
const liElement = document.querySelectorAll(
    "li.ListItem_ListItem__root__4HTKO.ListItem_ListItem__divider__KWrpp.ProfileEditDescription_ProfileEditDescription__listItem__VoPor"
)[0];

// 처음에 입력란 숨기기
liElement.style.display = "none";
console.log("입력란 초기 상태: 숨김");

// '한 줄 소개' 버튼 클릭 시 입력란 보이기
button.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작 방지
    event.stopPropagation(); // 이벤트 전파 방지
    console.log("'한 줄 소개' 버튼이 클릭되었습니다.");

    liElement.style.display = "block"; // 입력란 보이기
    button.style.display = "none"; // 버튼 숨기기
    console.log("입력란이 보이도록 설정되었습니다.");
});

// 입력란 클릭 시 클릭 이벤트 전파 방지
liElement.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("입력란이 클릭되었지만 이벤트 전파는 중지되었습니다.");
});

// 화면의 다른 부분을 클릭했을 때 입력란 숨기기
document.addEventListener("click", function () {
    liElement.style.display = "none";
    button.style.display = "block"; // 버튼 다시 보이기
    console.log("화면 다른 부분을 클릭하여 입력란을 숨겼습니다.");
});

// 저장 또는 취소 버튼 클릭 시 입력란만 숨기기 (새로고침 방지)
const cancelButton4 = document.querySelector("#cancelButton");
const saveButton4 = document.querySelector("#saveButton");

cancelButton4.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작 방지
    liElement.style.display = "none";
    button.style.display = "block"; // 버튼 다시 보이기
    console.log("취소 버튼이 눌려 입력란이 숨겨졌습니다.");
});

saveButton4.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작 방지
    liElement.style.display = "none";
    button.style.display = "block"; // 버튼 다시 보이기
    console.log("저장 버튼이 눌려 입력란이 숨겨졌습니다.");
});
