document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".wrap7");
    const rotateIcon = document.querySelector(".wrap8 img");

    dropdown.addEventListener("click", function () {
        this.classList.toggle("open");
        rotateIcon.classList.toggle("open");
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("open");
            rotateIcon.classList.remove("open");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const clickableItem = document.querySelector(
        'a[data-attribute-id="gigs__premium__detail__click"]'
    );

    clickableItem.addEventListener("click", function (event) {
        event.preventDefault(); // 기본 링크 동작 방지 (필요 시 제거 가능)
        const attributeId = this.getAttribute("data-attribute-id");
        console.log("Clicked item with data-attribute-id:", attributeId);

        // 여기에 클릭 시 실행할 다른 코드 추가
        alert("이야 눌린다");

        // 페이지 이동 등의 동작을 원할 경우
        // window.location.href = '목적지 URL';
    });
});
