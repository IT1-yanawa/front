//영어, @, @ 뒤에 영어, @ 뒤에 영어 뒤에 '.', @ 뒤에 영어 뒤에 '.' 뒤에 영어

// const message = document.getElementById("emailP");

// // 이메일 형식 검증을 위한 정규 표현식
// const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// // keydown 이벤트 리스너 추가
// emailInput.addEventListener("keydown", (e) => {
//     const emailValue = e.srcElement.value;
//     console.log(e);

//     // 이메일 형식 검증
//     if (emailPattern.test(emailValue)) {
//         emailInput.classList.remove("invalid");
//         emailInput.classList.add("valid");
//         message.classList.remove("show");
//     } else {
//         emailInput.classList.remove("valid");
//         emailInput.classList.add("invalid");
//         message.classList.add("show");
//     }
// });

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eye-icon");
const eyeSlashIcon = document.getElementById("eye-slash-icon");

(function () {
    // 입력 필드의 값을 확인하고 버튼 활성화 여부를 결정하는 함수
    function updateButtonState() {
        if (
            emailInput.value.trim() !== "" &&
            passwordInput.value.trim() !== ""
        ) {
            // 이메일과 비밀번호가 모두 입력된 경우
            loginButton.classList.add("active");
            loginButton.disabled = false; // 버튼 활성화
        } else {
            // 이메일 또는 비밀번호가 비어있는 경우
            loginButton.classList.remove("active");
            loginButton.disabled = true; // 버튼 비활성화
        }
    }

    // 입력 필드의 변화가 있을 때마다 버튼 상태 업데이트
    emailInput.addEventListener("input", updateButtonState);
    passwordInput.addEventListener("input", updateButtonState);
})();

// Focus 및 Blur 이벤트 추가
emailInput.addEventListener("focus", (e) => {
    e.target.style.border = "1px solid #0066ff"; // 포커스 시 파란색 테두리
});
emailInput.addEventListener("blur", (e) => {
    if (emailInput.value.trim() === "") {
        e.target.style.border = "1px solid rgba(112, 115, 124, 0.22)"; // 비어있는 경우 빨간색 테두리
    } else {
        e.target.style.border = "1px solid rgba(112, 115, 124, 0.22)"; // 비어있지 않은 경우 기본 색상
    }
});

passwordInput.addEventListener("focus", (e) => {
    e.target.style.border = "1px solid #0066ff"; // 포커스 시 파란색 테두리
});
passwordInput.addEventListener("blur", (e) => {
    if (passwordInput.value.trim() === "") {
        e.target.style.border = "1px solid rgba(112, 115, 124, 0.22)"; // 비어있는 경우 빨간색 테두리
    } else {
        e.target.style.border = "1px solid rgba(112, 115, 124, 0.22)"; // 비어있지 않은 경우 기본 색상
    }
});

togglePassword.addEventListener("click", () => {
    // 현재 비밀번호 입력 필드의 타입을 체크하고 전환
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;

    // 아이콘의 표시 상태를 전환
    if (type === "password") {
        eyeIcon.classList.remove("hidden");
        eyeSlashIcon.classList.add("hidden");
    } else {
        eyeIcon.classList.add("hidden");
        eyeSlashIcon.classList.remove("hidden");
    }
});
