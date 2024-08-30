const agreeDivCheckboxes = document.querySelectorAll(".input-style-agree");
const agreeCheckboxOns = document.querySelectorAll(".agree-checkbox.on");
const agreeCheckboxOffs = document.querySelectorAll(".agree-checkbox.off");
const isAgreeAll = document.querySelector("input[name=is_agree_all]");

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
