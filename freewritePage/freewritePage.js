document.addEventListener("DOMContentLoaded", function () {
    const titleInput = document.getElementById("title");
    const maxLength = 45;

    titleInput.addEventListener("input", function () {
        const currentLength = titleInput.value.length;

        if (currentLength > maxLength) {
            titleInput.value = titleInput.value.slice(0, maxLength);
            alert("제목은 최대 45자까지 입력 가능합니다.");
        }

        // 글자 수를 표시하는 요소 업데이트 (예: 0/45)
        const charCountElement = document.querySelector(".max-length");
        if (charCountElement) {
            charCountElement.textContent = `${currentLength}/${maxLength}`;
        }
    });
});
