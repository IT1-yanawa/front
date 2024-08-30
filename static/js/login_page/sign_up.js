const agreeCheckIcons = document.querySelectorAll(".input-style-check-icon");
const checkIconSvgOns = document.querySelectorAll(".check-icon-svg.on");
const checkIconSvgOffs = document.querySelectorAll(".check-icon-svg.off");
const isAcceptEventAll = document.querySelector(
    "input[name=is_accept_event_all]"
);
const isAcceptRecruitAll = document.querySelector(
    "input[name=is_accept_recruit_all]"
);

const agreeDivCheckboxes = document.querySelectorAll(".input-style-agree");
const agreeCheckboxOns = document.querySelectorAll(".agree-checkbox.on");
const agreeCheckboxOffs = document.querySelectorAll(".agree-checkbox.off");
const isAgreeAll = document.querySelector("input[name=is_agree_all]");

const agreeCheckIconsArray = [...agreeCheckIcons];
const firstCheckIcons = agreeCheckIconsArray.slice(0, 3);
const lastCheckIcons = agreeCheckIconsArray.slice(3, 6);

const checkIconSvgOnsArray = [...checkIconSvgOns];
const firstCheckIconSvgOns = checkIconSvgOnsArray.slice(0, 3);
const lastCheckIconSvgOns = checkIconSvgOnsArray.slice(3, 6);

const checkIconSvgOffsArray = [...checkIconSvgOffs];
const firstCheckIconSvgOffs = checkIconSvgOffsArray.slice(0, 3);
const lastCheckIconSvgOffs = checkIconSvgOffsArray.slice(3, 6);

isAcceptEventAll.addEventListener("click", (e) => {
    if (e.target.checked) {
        firstCheckIconSvgOns.forEach((firstCheckIconSvgOn, i) => {
            firstCheckIconSvgOn.style.display = "block";
            firstCheckIconSvgOffs[i].style.display = "none";
        });
    } else {
        firstCheckIconSvgOffs.forEach((firstCheckIconSvgOff, i) => {
            firstCheckIconSvgOns[i].style.display = "none";
            firstCheckIconSvgOff.style.display = "block";
        });
    }
});

isAcceptRecruitAll.addEventListener("click", (e) => {
    if (e.target.checked) {
        lastCheckIconSvgOns.forEach((lastCheckIconSvgOn, i) => {
            lastCheckIconSvgOn.style.display = "block";
            lastCheckIconSvgOffs[i].style.display = "none";
        });
    } else {
        lastCheckIconSvgOffs.forEach((lastCheckIconSvgOff, i) => {
            lastCheckIconSvgOns[i].style.display = "none";
            lastCheckIconSvgOff.style.display = "block";
        });
    }
});

firstCheckIcons.forEach((firstCheckIcon, i) => {
    firstCheckIcon.addEventListener("click", (e) => {
        if (e.target.checked) {
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
            agreeDivCheckboxesArray[4].checked = false;
            agreeCheckboxOns[4].style.display = "none";
            agreeCheckboxOffs[4].style.display = "block";
        } else {
            agreeDivCheckboxesArray[4].checked = true;
            agreeCheckboxOns[4].style.display = "block";
            agreeCheckboxOffs[4].style.display = "none";
        }
    });
});

lastCheckIcons.forEach((lastCheckIcon, i) => {
    lastCheckIcon.addEventListener("click", (e) => {
        if (e.target.checked) {
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

// agreeDivCheckboxes가 NodeList 또는 HTMLCollection일 경우 배열로 변환
const agreeDivCheckboxesArray = [...agreeDivCheckboxes];

// 첫 번째 요소를 제외한 배열을 만듭니다.
const filteredCheckboxes = agreeDivCheckboxesArray.slice(1);

filteredCheckboxes.forEach((filteredCheckbox, i) => {
    filteredCheckbox.addEventListener("click", (e) => {
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

        isAgreeAll.checked = filteredCheckboxes.every(
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

isAgreeAll.addEventListener("click", (e) => {
    if (e.target.checked) {
        agreeCheckboxOns.forEach((agreeCheckboxOn, i) => {
            agreeDivCheckboxes[i].checked = true;
            agreeCheckIcons[i].checked = true;
            agreeCheckboxOn.style.display = "block";
            agreeCheckboxOffs[i].style.display = "none";
            checkIconSvgOns[i].style.display = "block";
            checkIconSvgOffs[i].style.display = "none";
        });
    } else {
        agreeCheckboxOffs.forEach((agreeCheckboxOff, i) => {
            agreeDivCheckboxes[i].checked = false;
            agreeCheckIcons[i].checked = false;
            agreeCheckboxOns[i].style.display = "none";
            agreeCheckboxOff.style.display = "block";
            checkIconSvgOffs[i].style.display = "block";
            checkIconSvgOns[i].style.display = "none";
        });
    }
});

// console.log(firstCheckIcons);

// 한개를 해제했을 때, 두개를 해제했을 때: 체크 true / ON style
// 세개(전체)를 해제했을 때: 체크 false / off style

// firstCheckIcons.forEach((firstCheckIcon) => {
//     firstCheckIcon.addEventListener("click", () => {

//     });
// });

// path[fill=rgba(55, 56, 60, 0.28)]
// path[fill=`#0066ff`]

// **체크 표시 상태 전환 기능**
// agreeDivCheckbox.addEventListener("click", (e) => {
//     console.log(agreeDivCheckbox);
// });

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
