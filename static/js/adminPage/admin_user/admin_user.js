document.addEventListener("DOMContentLoaded", function () {
    const allSelectToggle = document.querySelector(
        ".SettingsToggle_toggle:first-child .SettingToggle_switch"
    );
    const toggles = document.querySelectorAll(
        ".SettingsToggle_toggle .SettingToggle_switch"
    );

    // 첫 번째 스위치 (전체 선택 스위치) 클릭 시
    allSelectToggle.addEventListener("click", function () {
        const isActive = allSelectToggle.classList.contains(
            "SettingToggle_active"
        );

        // 모든 하위 스위치 상태 변경
        toggles.forEach(function (toggle) {
            if (isActive) {
                toggle.classList.remove("SettingToggle_active");
            } else {
                toggle.classList.add("SettingToggle_active");
            }
        });
    });

    // 각 스위치 개별 클릭 시
    toggles.forEach(function (toggle, index) {
        if (index === 0) return; // 첫 번째 스위치는 이미 처리했으므로 제외

        toggle.addEventListener("click", function () {
            toggle.classList.toggle("SettingToggle_active");

            // 하위 스위치가 하나라도 비활성화되면 전체 스위치도 비활성화
            const allActive = Array.from(toggles)
                .slice(1)
                .every((t) => t.classList.contains("SettingToggle_active"));
            if (!allActive) {
                allSelectToggle.classList.remove("SettingToggle_active");
            } else {
                allSelectToggle.classList.add("SettingToggle_active"); // 모든 하위 스위치가 활성화된 경우 전체 스위치 활성화
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".UsersFilter_filterButton");

    // 기본적으로 첫 번째 버튼에 선택된 클래스를 추가
    buttons[0].classList.add("UsersFilter_selected");

    // 각 버튼 클릭 시
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // 모든 버튼의 선택된 클래스와 배경색 초기화
            buttons.forEach((btn) => {
                btn.classList.remove("UsersFilter_selected");
                btn.style.backgroundColor = ""; // 기본 배경색으로 초기화
            });

            // 클릭된 버튼에 선택된 클래스와 배경색 적용
            button.classList.add("UsersFilter_selected");
            button.style.backgroundColor = "#212529"; // 선택된 버튼의 배경색을 검정색으로 설정
        });
    });
});
