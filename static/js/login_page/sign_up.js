// const customInfo = document.querySelector("input[name=is_accept_event_all]");
// const emailNotification = document.querySelector(
//     "input[name=accept_marketing_email]"
// );
// const appPushNotification = document.querySelector(
//     "input[name=accept_marketing_push]"
// );
// const smsNotification = document.querySelector(
//     "input[name=accept_marketing_sms]"
// );

// console.log(customInfo);
// console.log(emailNotification);
// console.log(appPushNotification);
// console.log(smsNotification);

// function updateCustomInfo() {
//     if (
//         emailNotification.checked ||
//         appPushNotification.checked ||
//         smsNotification.checked
//     ) {
//         customInfo.checked = true;
//         alert("들어옴 on");
//     } else {
//         customInfo.checked = false;
//         alert("들어옴 off");
//     }
// }

// function updateSubItems() {
//     if (customInfo.checked) {
//         emailNotification.checked = true;
//         appPushNotification.checked = true;
//         smsNotification.checked = true;
//         alert("들어옴 on");
//     } else {
//         emailNotification.checked = false;
//         appPushNotification.checked = false;
//         smsNotification.checked = false;
//         alert("들어옴 off");
//     }
// }

// customInfo.addEventListener("change", () => {
//     updateSubItems();
// });

// [emailNotification, appPushNotification, smsNotification].forEach((el) => {
//     el.addEventListener("change", () => {
//         updateCustomInfo();
//     });
// });

// 전체 동의 - input
const isAgreeAll = document.querySelector("input[name=is_agree_all]");
// 필수 동의(3개) - input
const requiredCheckboxes = document.querySelectorAll(
    ".agree-div-five .agree-div .input-style-agree"
);
// 필수 동의, 선택 동의 - input
const agreeDivCheckboxes = document.querySelectorAll(".input-style-agree");
// 필수 동의, 선택 동의 - div - on
const agreeCheckboxOns = document.querySelectorAll(".agree-checkbox.on");
// 필수 동의, 선택 동의 - div - off
const agreeCheckboxOffs = document.querySelectorAll(".agree-checkbox.off");
// 모든 동의 - input
const Checkboxes = document.querySelectorAll("input[type=checkbox]");

// 선택 동의 1번째 - input
const isAcceptEventAll = document.querySelector(
    "input[name=is_accept_event_all]"
);
// 선택 동의 2번째 - input
const isAcceptRecruitAll = document.querySelector(
    "input[name=is_accept_recruit_all]"
);
// 선택 동의(2개)의 각 하위 체크 - input
const agreeCheckIcons = document.querySelectorAll(".input-style-check-icon");
// 하위 체크 - svg - on
const checkIconSvgOns = document.querySelectorAll(".check-icon-svg.on");
// 하위 체크 - svg - off
const checkIconSvgOffs = document.querySelectorAll(".check-icon-svg.off");

// 선택 동의(2개)의 각 하위 체크 - input -> Array 배열로 복사
const agreeCheckIconsArray = [...agreeCheckIcons];
// 하위체크 중 1~3번
const firstCheckIcons = agreeCheckIconsArray.slice(0, 3);
// 하위체크 중 4~6번
const lastCheckIcons = agreeCheckIconsArray.slice(3, 6);

// SVG 1~3번 / 4~6번 나눈 것
const checkIconSvgOnsArray = [...checkIconSvgOns];
const firstCheckIconSvgOns = checkIconSvgOnsArray.slice(0, 3);
const lastCheckIconSvgOns = checkIconSvgOnsArray.slice(3, 6);

const checkIconSvgOffsArray = [...checkIconSvgOffs];
const firstCheckIconSvgOffs = checkIconSvgOffsArray.slice(0, 3);
const lastCheckIconSvgOffs = checkIconSvgOffsArray.slice(3, 6);

// agreeDivCheckboxes가 NodeList 또는 HTMLCollection일 경우 배열로 변환
const agreeDivCheckboxesArray = [...agreeDivCheckboxes];
const CheckboxesArray = [...Checkboxes];

// 첫 번째 요소를 제외한 배열을 만듭니다.
const filteredCheckboxes = agreeDivCheckboxesArray.slice(1);
const filteredAllCheckboxes = CheckboxesArray.slice(1);
// console.log(filteredAllCheckboxes);

// 전체 동의 체크 시, 필수 3개.선택 2개. 각 선택 하위 목록들(각 3개) 체크
isAgreeAll.addEventListener("change", (e) => {
    if (e.target.checked) {
        for (i = 0; i < 6; i++) {
            agreeCheckboxOns[i].style.display = "block";
            agreeCheckboxOffs[i].style.display = "none";
            checkIconSvgOns[i].style.display = "block";
            checkIconSvgOffs[i].style.display = "none";
        }
    } else {
        for (i = 0; i < 6; i++) {
            agreeCheckboxOns[i].style.display = "none";
            agreeCheckboxOffs[i].style.display = "block";
            checkIconSvgOffs[i].style.display = "block";
            checkIconSvgOns[i].style.display = "none";
        }
    }
});

// 필수 동의, 선택 동의 체크 중 한개라도 체크 해제 시, 전체 동의 체크 해제
filteredCheckboxes.forEach((filteredCheckbox, i) => {
    filteredCheckbox.addEventListener("change", (e) => {
        const originalIndex = i + 1;
        if (e.target.checked) {
            filteredCheckboxes[i].checked = true;
            agreeCheckboxOns[originalIndex].style.display = "block";
            agreeCheckboxOffs[originalIndex].style.display = "none";
        } else {
            filteredCheckboxes[i].checked = false;
            agreeCheckboxOns[originalIndex].style.display = "none";
            agreeCheckboxOffs[originalIndex].style.display = "block";
        }

        isAgreeAll.checked = filteredAllCheckboxes.every(
            (checkbox) => checkbox.checked
        );

        if (isAgreeAll.checked) {
            agreeCheckboxOns[0].style.display = "block";
            agreeCheckboxOffs[0].style.display = "none";
        } else {
            agreeCheckboxOns[0].style.display = "none";
            agreeCheckboxOffs[0].style.display = "block";
        }
    });
});

// 각 선택 하위 목록들(각 3개) 체크 중 한개라도 체크 해제 시, 전체 동의 체크 해제
agreeCheckIconsArray.forEach((agreeCheckIcon) => {
    agreeCheckIcon.addEventListener("change", (e) => {
        if (!e.target.checked) {
            isAgreeAll.checked = false;
            agreeCheckboxOns[0].style.display = "none";
            agreeCheckboxOffs[0].style.display = "block";
        }
    });
});

// 첫번째 선택 동의
isAcceptEventAll.addEventListener("change", (e) => {
    if (e.target.checked) {
        firstCheckIconSvgOns.forEach((firstCheckIconSvgOn, i) => {
            firstCheckIcons[i].checked = true;
            firstCheckIconSvgOn.style.display = "block";
            firstCheckIconSvgOffs[i].style.display = "none";
        });
    } else {
        firstCheckIconSvgOffs.forEach((firstCheckIconSvgOff, i) => {
            firstCheckIcons[i].checked = false;
            firstCheckIconSvgOns[i].style.display = "none";
            firstCheckIconSvgOff.style.display = "block";
        });
    }
});

// 첫번째 선택 동의의 하위 체크 목록들
firstCheckIcons.forEach((firstCheckIcon, i) => {
    firstCheckIcon.addEventListener("change", (e) => {
        if (e.target.checked) {
            isAcceptEventAll.checked = true;
            firstCheckIconSvgOns[i].style.display = "block";
            firstCheckIconSvgOffs[i].style.display = "none";
        } else {
            firstCheckIconSvgOns[i].style.display = "none";
            firstCheckIconSvgOffs[i].style.display = "block";
        }

        // 부모 체크박스 상태를 직접 업데이트
        const allUnchecked = firstCheckIcons.every(
            (checkbox) => !checkbox.checked
        );

        if (allUnchecked) {
            isAcceptEventAll.checked = false;
            agreeCheckboxOns[4].style.display = "none";
            agreeCheckboxOffs[4].style.display = "block";
        } else {
            isAcceptEventAll.checked = true;
            agreeCheckboxOns[4].style.display = "block";
            agreeCheckboxOffs[4].style.display = "none";
        }
    });
});

// 두 번째 선택 동의
isAcceptRecruitAll.addEventListener("change", (e) => {
    if (e.target.checked) {
        lastCheckIconSvgOns.forEach((lastCheckIconSvgOn, i) => {
            lastCheckIcons[i].checked = true;
            lastCheckIconSvgOn.style.display = "block";
            lastCheckIconSvgOffs[i].style.display = "none";
        });
    } else {
        lastCheckIconSvgOffs.forEach((lastCheckIconSvgOff, i) => {
            lastCheckIcons[i].checked = false;
            lastCheckIconSvgOns[i].style.display = "none";
            lastCheckIconSvgOff.style.display = "block";
        });
    }
});

// 두번째 선택 동의의 하위 체크 목록들
lastCheckIcons.forEach((lastCheckIcon, i) => {
    lastCheckIcon.addEventListener("change", (e) => {
        if (e.target.checked) {
            isAcceptRecruitAll.checked = true;
            lastCheckIconSvgOns[i].style.display = "block";
            lastCheckIconSvgOffs[i].style.display = "none";
        } else {
            lastCheckIconSvgOns[i].style.display = "none";
            lastCheckIconSvgOffs[i].style.display = "block";
        }

        const allUnchecked = lastCheckIcons.every(
            (checkbox) => !checkbox.checked
        );

        if (allUnchecked) {
            isAcceptRecruitAll.checked = false;
            agreeCheckboxOns[5].style.display = "none";
            agreeCheckboxOffs[5].style.display = "block";
        } else {
            isAcceptRecruitAll.checked = true;
            agreeCheckboxOns[5].style.display = "block";
            agreeCheckboxOffs[5].style.display = "none";
        }
    });
});

// ******************
const emailInput = document.getElementById("email-1");
const duplicateCheck = document.getElementById("duplicate-check");
const duplicateCheckButton = document.getElementById("duplicate-check-button");

// **이메일 중복 확인 버튼 활성화 기능**
(function () {
    // 입력 필드의 값을 확인하고 버튼 활성화 여부를 결정하는 함수
    function updateDuplicateState() {
        if (emailInput.value.trim() !== "") {
            // 이메일 입력된 경우
            duplicateCheck.classList.add("active");
            duplicateCheck.disabled = false; // 버튼 활성화
            duplicateCheckButton.style.cursor = "pointer";
        } else {
            // 이메일 비어있는 경우
            duplicateCheck.classList.remove("active");
            duplicateCheck.disabled = true; // 버튼 비활성화
            duplicateCheckButton.style.cursor = "default";
        }
    }

    // 입력 필드의 변화가 있을 때마다 버튼 상태 업데이트
    emailInput.addEventListener("input", updateDuplicateState);
})();

const mobileInput = document.getElementById("mobile-input");
const getCodeSpan = document.getElementById("get-code-span");
const getCodeButton = document.getElementById("get-code-button");

// **인증번호 받기 버튼 활성화 기능**
(function () {
    // 입력 필드의 값을 확인하고 버튼 활성화 여부를 결정하는 함수
    function updateCodeState() {
        if (mobileInput.value.trim() !== "") {
            getCodeButton.classList.add("active");
            getCodeButton.disabled = false; // 버튼 활성화
        } else {
            getCodeButton.classList.remove("active");
            getCodeButton.disabled = true; // 버튼 비활성화
        }
    }

    // 입력 필드의 변화가 있을 때마다 버튼 상태 업데이트
    mobileInput.addEventListener("input", updateCodeState);
})();

const nameInput = document.getElementById("name-input");
const getCodeInput = document.getElementById("get-code-input");
const passwordInput = document.getElementById("password-input");
const pwOnemoreInput = document.getElementById("pw-onemore-input");
const finalButton = document.getElementById("final-button");

// **가입하기 버튼 활성화 기능**
(function () {
    // 입력 필드의 값을 확인하고 버튼 활성화 여부를 결정하는 함수
    function updateCodeState() {
        if (
            emailInput.value.trim() !== "" &&
            nameInput.value.trim() !== "" &&
            getCodeInput.value.trim() !== "" &&
            passwordInput.value.trim() !== "" &&
            pwOnemoreInput.value.trim() !== "" &&
            requiredCheckboxes[0].checked &&
            requiredCheckboxes[1].checked &&
            requiredCheckboxes[2].checked
        ) {
            finalButton.classList.add("active");
            finalButton.disabled = false; // 버튼 활성화
        } else {
            finalButton.classList.remove("active");
            finalButton.disabled = true; // 버튼 비활성화
        }
    }

    // 입력 필드의 변화가 있을 때마다 버튼 상태 업데이트
    emailInput.addEventListener("input", updateCodeState);
    nameInput.addEventListener("input", updateCodeState);
    getCodeInput.addEventListener("input", updateCodeState);
    passwordInput.addEventListener("input", updateCodeState);
    pwOnemoreInput.addEventListener("input", updateCodeState);
    requiredCheckboxes[0].addEventListener("input", updateCodeState);
    requiredCheckboxes[1].addEventListener("input", updateCodeState);
    requiredCheckboxes[2].addEventListener("input", updateCodeState);
})();

// // **로그인 버튼 활성화 기능**
// (function () {
//     // 입력 필드의 값을 확인하고 버튼 활성화 여부를 결정하는 함수
//     function updateButtonState() {
//         if (
//             emailInput1.value.trim() !== "" &&
//             passwordInput.value.trim() !== ""
//         ) {
//             // 이메일과 비밀번호가 모두 입력된 경우
//             loginButton.classList.add("active");
//             loginButton.disabled = false; // 버튼 활성화
//         } else {
//             // 이메일 또는 비밀번호가 비어있는 경우
//             loginButton.classList.remove("active");
//             loginButton.disabled = true; // 버튼 비활성화
//         }
//     }

//     // 입력 필드의 변화가 있을 때마다 버튼 상태 업데이트
//     emailInput1.addEventListener("input", updateButtonState);
//     passwordInput.addEventListener("input", updateButtonState);
// })();
