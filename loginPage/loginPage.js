const emailInput1 = document.getElementById("email-1");

// **이메일 입력 시 이벤트(+ 오류 메시지 없음)

emailInput1.addEventListener("focus", (e) => {
    e.target.style.border = "1px solid #0066ff"; // 포커스 시 파란색 테두리
});
emailInput1.addEventListener("blur", (e) => {
    if (emailInput1.value.trim() === "") {
        e.target.style.border = "1px solid rgba(112, 115, 124, 0.22)"; // 비어있는 경우 기본 색상
    } else {
        e.target.style.border = "1px solid rgba(112, 115, 124, 0.22)"; // 비어있지 않은 경우 기본 색상
    }
});

// **이메일 입력 시 이벤트(+ 오류 메시지 기능구현)
const emailInput2 = document.getElementById("email-2");
const message = document.getElementById("email-span");

// keydown 이벤트 리스너 추가
emailInput2.addEventListener("input", (e) => {
    console.log(e);

    // 이메일 입력 여부 검증
    if (e.target.value) {
        e.target.classList.remove("invalid");
        e.target.classList.add("valid");
        message.classList.remove("show"); // 메시지 숨김
    } else {
        e.target.classList.remove("valid");
        e.target.classList.add("invalid");
        message.classList.add("show"); // 메시지 표시
    }
});

// **비밀번호 포커스 시 파란색 테두리
const passwordInput = document.getElementById("password");

passwordInput.addEventListener("focus", (e) => {
    e.target.style.border = "1px solid #0066ff"; // 포커스 시 파란색 테두리
});
passwordInput.addEventListener("blur", (e) => {
    if (passwordInput.value.trim() === "") {
        e.target.style.border = "1px solid rgba(112, 115, 124, 0.22)"; // 비어있는 경우 기본 색상
    } else {
        e.target.style.border = "1px solid rgba(112, 115, 124, 0.22)"; // 비어있지 않은 경우 기본 색상
    }
});

const loginButton = document.getElementById("loginButton");
const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eye-icon");
const eyeSlashIcon = document.getElementById("eye-slash-icon");

//**비밀번호 보기/숨기기 (눈 아이콘) 기능

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
