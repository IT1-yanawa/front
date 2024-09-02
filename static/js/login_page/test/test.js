document.addEventListener("DOMContentLoaded", () => {
    // 전체 동의 체크박스 선택
    const agreeAllCheckbox = document.querySelector(
        'input[name="is_agree_all"]'
    );

    // 필수 동의 체크박스 선택
    const requiredCheckboxes = Array.from(
        document.querySelectorAll(
            '.agree-div-five .agree-div input[type="checkbox"]'
        )
    );

    // 선택 동의의 부모 체크박스들 선택
    const selectParentCheckboxes = Array.from(
        document.querySelectorAll(
            ".agree-select-div .agree-div .input-style-agree"
        )
    );

    // 선택 동의의 하위 체크박스들이 포함된 컨테이너들 선택
    const subAgreeCheckboxesContainers = Array.from(
        document.querySelectorAll(".agree-select-1")
    );

    // 체크박스 상태에 따라 div와 svg의 display를 업데이트하는 함수
    function updateDisplay() {
        // 전체 동의 체크박스의 div 상태
        const allAgreeCheckboxDiv = document
            .querySelector('input[name="is_agree_all"]')
            .closest(".agree-div");
        const agreeCheckboxOn =
            allAgreeCheckboxDiv.querySelector(".agree-checkbox.on");
        const agreeCheckboxOff = allAgreeCheckboxDiv.querySelector(
            ".agree-checkbox.off"
        );
        const isAllAgreeChecked = agreeAllCheckbox.checked;
        agreeCheckboxOn.style.display = isAllAgreeChecked ? "block" : "none";
        agreeCheckboxOff.style.display = isAllAgreeChecked ? "none" : "block";

        // 필수 동의 체크박스의 div 상태
        requiredCheckboxes.forEach((Checkbox) => {
            const CheckboxDiv = Checkbox.querySelector(".agree-div");
            const CheckboxOn = CheckboxDiv.querySelector(".agree-checkbox.on");
            const CheckboxOff = CheckboxDiv.querySelector(
                ".agree-checkbox.off"
            );
            CheckboxOn.style.display = Checkbox.checked ? "block" : "none";
            CheckboxOff.style.display = Checkbox.checked ? "none" : "block";
        });

        // 선택 동의 체크박스의 하위 체크박스 상태 업데이트
        selectParentCheckboxes.forEach((parent) => {
            const parentCheckbox = parent.querySelector(
                'input[type="checkbox"]'
            );
            const subCheckboxes = Array.from(
                parent.querySelectorAll(".input-style-check-icon")
            );
            const allSubChecked = subCheckboxes.some((cb) => cb.checked);
            parentCheckbox.checked = allSubChecked;

            // 선택 동의의 div 상태
            const parentDiv = parent.querySelector(".agree-div");
            const parentOn = parentDiv.querySelector(".agree-checkbox.on");
            const parentOff = parentDiv.querySelector(".agree-checkbox.off");
            parentOn.style.display = allSubChecked ? "block" : "none";
            parentOff.style.display = allSubChecked ? "none" : "block";
        });

        // 선택 동의 체크박스의 div 상태 업데이트
        selectParentCheckboxes.forEach((parent) => {
            const subCheckboxes = Array.from(
                parent.querySelectorAll(".input-style-check-icon")
            );
            const someChecked = subCheckboxes.some((cb) => cb.checked);

            const parentDiv = parent.querySelector(".agree-div");
            const parentOn = parentDiv.querySelector(".agree-checkbox.on");
            const parentOff = parentDiv.querySelector(".agree-checkbox.off");

            if (someChecked) {
                parentOn.style.display = "block";
                parentOff.style.display = "none";
            } else {
                parentOn.style.display = "none";
                parentOff.style.display = "block";
            }
        });
    }

    // 체크박스 상태를 업데이트하는 함수
    function updateCheckboxesState() {
        requiredCheckboxes.forEach((cb) => {
            cb.addEventListener("change", () => {
                updateDisplay();
            });
        });

        selectParentCheckboxes.forEach((parent) => {
            const subCheckboxes = Array.from(
                parent.querySelectorAll(".input-style-check-icon")
            );
            subCheckboxes.forEach((cb) => {
                cb.addEventListener("change", () => {
                    updateDisplay();
                });
            });
        });

        agreeAllCheckbox.addEventListener("change", () => {
            const isChecked = agreeAllCheckbox.checked;
            requiredCheckboxes.forEach((cb) => (cb.checked = isChecked));
            selectParentCheckboxes.forEach((parent) => {
                const subCheckboxes = Array.from(
                    parent.querySelectorAll('input[type="checkbox"]')
                );
                subCheckboxes.forEach((cb) => (cb.checked = isChecked));
            });
            updateDisplay();
        });
    }

    updateCheckboxesState();
    updateDisplay(); // 페이지 로드 시 초기 상태 업데이트
});
