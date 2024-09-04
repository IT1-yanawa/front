document
    .querySelector(
        ".ProfileViewHeaderActions_ProfileViewHeaderActions__btnSetting__eb6gX"
    )
    .addEventListener("click", function () {
        document.getElementById("profile-view").style.display = "none";
        document.getElementById("profile-edit").style.display = "block";
    });

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
// ===========================================================================
// 프로필 사진 업로드 기능
document
    .getElementById("openFilePicker")
    .addEventListener("click", function () {
        document.getElementById("fileInput").click();
    });
// ===========================================================================
// 이름 모달
const openModalBtn = document.getElementById("openModal2");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
// ======================================================================
// 전화번호 모달

const openModalBtn2 = document.getElementById("poneNumbermodal");
const modal2 = document.getElementById("myModal2");
const closeModalBtn2 = document.getElementById("closeModal2");

openModalBtn2.addEventListener("click", function () {
    modal2.style.display = "block";
});

closeModalBtn2.addEventListener("click", function () {
    modal2.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
});
// =====================================================================
// 한 줄 소개
const button = document.querySelector(
    ".ListItem_ListItem__root__4HTKO.ListItem_ListItem__divider__KWrpp.ListItem_ListItem__button__cVygs.ProfileEditDescription_ProfileEditDescription__listItem__VoPor"
);
const liElement = document.querySelectorAll(
    "li.ListItem_ListItem__root__4HTKO.ListItem_ListItem__divider__KWrpp.ProfileEditDescription_ProfileEditDescription__listItem__VoPor"
)[0];

liElement.style.display = "none";

button.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    liElement.style.display = "block";
    button.style.display = "none";
});

liElement.addEventListener("click", function (event) {
    event.stopPropagation();
});

document.addEventListener("click", function () {
    liElement.style.display = "none";
    button.style.display = "block";
});

// =================================================================
// 선호하는 종목
const button1 = document.querySelector(
    ".ListItem_ListItem__root__4HTKO.ListItem_ListItem__divider__KWrpp.ListItem_ListItem__button__cVygs.ProfileEditDescription_ProfileEditDescription__listItem__VoPor1"
);
const liElement1 = document.querySelectorAll(
    "li.ListItem_ListItem__root__4HTKO.ListItem_ListItem__divider__KWrpp.ProfileEditDescription_ProfileEditDescription__listItem__VoPor1"
)[0];

liElement1.style.display = "none";

button1.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    liElement1.style.display = "block";
    button1.style.display = "none";
});

liElement1.addEventListener("click", function (event) {
    event.stopPropagation();
});

document.addEventListener("click", function () {
    liElement1.style.display = "none";
    button1.style.display = "block";
});
// ================================================================
// 선호하는 포지션
const button2 = document.querySelector(
    ".ListItem_ListItem__root__4HTKO.ListItem_ListItem__divider__KWrpp.ListItem_ListItem__button__cVygs.ProfileEditDescription_ProfileEditDescription__listItem__VoPor2"
);
const liElement2 = document.querySelectorAll(
    "li.ListItem_ListItem__root__4HTKO.ListItem_ListItem__divider__KWrpp.ProfileEditDescription_ProfileEditDescription__listItem__VoPor2"
)[0];

liElement2.style.display = "none";

button2.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    liElement2.style.display = "block";
    button2.style.display = "none";
});

liElement2.addEventListener("click", function (event) {
    event.stopPropagation();
});

document.addEventListener("click", function () {
    liElement2.style.display = "none";
    button2.style.display = "block";
});
// ===================================================================
// 운동경력
const button3 = document.querySelector(
    ".ListItem_ListItem__root__4HTKO.ListItem_ListItem__divider__KWrpp.ListItem_ListItem__button__cVygs.ProfileEditDescription_ProfileEditDescription__listItem__VoPor3"
);
const liElement3 = document.querySelectorAll(
    "li.ListItem_ListItem__root__4HTKO.ListItem_ListItem__divider__KWrpp.ProfileEditDescription_ProfileEditDescription__listItem__VoPor3"
)[0];

liElement3.style.display = "none";

button3.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    liElement3.style.display = "block";
    button3.style.display = "none";
});

liElement3.addEventListener("click", function (event) {
    event.stopPropagation();
});

document.addEventListener("click", function () {
    liElement3.style.display = "none";
    button3.style.display = "block";
});
