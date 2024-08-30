const agreeDivCheckboxes = document.querySelectorAll(".input-style-agree");
const agreeCheckboxOns = document.querySelectorAll(".agree-checkbox.on");
const agreeCheckboxOffs = document.querySelectorAll(".agree-checkbox.off");
const isAgreeAll = document.querySelector("input[name=is_agree_all]");

const selectIconCheckes = document.querySelectorAll(".input-style-check-icon");

isAgreeAll.addEventListener("click", (e) => {
    if (e.target.checked) {
        agreeCheckboxOns.forEach((agreeCheckboxOn, i) => {
            agreeCheckboxOn.style.display = "block";
            agreeCheckboxOffs[i].style.display = "none";
        });
    } else {
        agreeCheckboxOffs.forEach((agreeCheckboxOff, i) => {
            agreeCheckboxOns[i].style.display = "none";
            agreeCheckboxOff.style.display = "block";
        });
    }
});

// agreeDivCheckboxes가 NodeList 또는 HTMLCollection일 경우 배열로 변환
const agreeDivCheckboxesArray = [...agreeDivCheckboxes];

// 첫 번째 요소를 제외한 배열을 만듭니다.
const filteredCheckboxes = agreeDivCheckboxesArray.slice(1);

filteredCheckboxes.forEach((filteredCheckbox, i) => {
    filteredCheckbox.addEventListener("click", (e) => {
        const originalIndex = i + 1;
        if (e.target.checked) {
            agreeCheckboxOns[originalIndex].style.display = "block";
            agreeCheckboxOffs[originalIndex].style.display = "none";
        } else {
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

// const checkIconSvg = document.querySelectorAll(".check-icon-svg");
// const checkIconPath = checkIconSvg[0].firstElementChild;

// console.log(checkIconSvg);
// console.log(checkIconPath);

const agreeCheckIcons = document.querySelectorAll(".input-style-check-icon");
const checkIconSvgOns = document.querySelectorAll(".check-icon-svg.on");
const checkIconSvgOffs = document.querySelectorAll(".check-icon-svg.off");
const isAcceptEventAll = document.querySelector(
    "input[name=is_accept_event_all]"
);
const isAcceptRecruitAll = document.querySelector(
    "input[name=is_accept_recruit_all]"
);

isAcceptEventAll.addEventListener("click", (e) => {
    const originalIndex = i + 1;
    if (e.target.checked) {
        checkIconSvgOns.forEach((checkIconSvgOn, i) => {
            checkIconSvgOn.style.display = "block";
            checkIconSvgOffs[i].style.display = "none";
        });
    } else {
        checkIconSvgOffs.forEach((checkIconSvgOff, i) => {
            checkIconSvgOns[i].style.display = "none";
            checkIconSvgOff.style.display = "block";
        });
    }
});

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
