document.addEventListener("DOMContentLoaded", function () {
    const addServiceBtn = document.getElementById("addServiceBtn");
    const deleteSelectedBtn = document.getElementById("deleteSelectedBtn");
    const editModal = document.getElementById("editModal");
    const closeButton = document.querySelector(".close-button");
    const saveChangesBtn = document.getElementById("saveChanges");
    const headerCheckbox = document.getElementById("selectAll"); // 헤더 체크박스
    const rowCheckboxes = document.querySelectorAll(".userCheckbox"); // 목록의 체크박스들
    let currentEditRow = null;

    // 클릭 시 색상 변경 기능
    function addTemporaryClass(element) {
        element.classList.add("clicked");
        setTimeout(function () {
            element.classList.remove("clicked");
        }, 300); // 0.3초 후에 원래 색으로 돌아옴
    }

    addServiceBtn.addEventListener("click", function () {
        addTemporaryClass(addServiceBtn);
    });

    deleteSelectedBtn.addEventListener("click", function () {
        addTemporaryClass(deleteSelectedBtn);
    });

    // 문자열에서 괄호 앞부분만 가져오고, 줄바꿈과 여분의 공백을 정리하는 함수
    function cleanUpPlaceName(placeName) {
        const cleanedName = placeName.split("(")[0].trim();
        return cleanedName.replace(/\s+/g, " ");
    }

    // 모달 열기
    function openModal(row) {
        currentEditRow = row;
        editModal.style.display = "block";

        // 모달창에 현재 행의 데이터 채우기
        document.getElementById("editUserName").value = row
            .querySelector(".user_name")
            .textContent.trim();
        document.getElementById("editJoinDate").value = row
            .querySelector(".Join_Date")
            .textContent.trim();

        // 장소명에서 괄호 앞부분만 가져오고 공백 정리
        const rawPlaceName = row
            .querySelector(".PlaceRantalDetail")
            .textContent.trim();
        const cleanedPlaceName = cleanUpPlaceName(rawPlaceName);
        document.getElementById("editPlaceName").value = cleanedPlaceName;

        document.getElementById("editPlaceAddress").value = row
            .querySelector(".placeAddres")
            .textContent.trim();
        document.getElementById("editSportKind").value = row
            .querySelector(".sport_kind")
            .textContent.trim();
    }

    // 모달 닫기
    function closeModal() {
        editModal.style.display = "none";
    }

    closeButton.addEventListener("click", closeModal);
    window.addEventListener("click", function (event) {
        if (event.target === editModal) {
            closeModal();
        }
    });

    // 수정 버튼 클릭 시 모달 열기
    document.querySelectorAll(".editBtn").forEach((button) => {
        button.addEventListener("click", function () {
            const row = this.closest(".ServiceTable_row");
            openModal(row);
        });
    });

    // 변경 사항 저장
    saveChangesBtn.addEventListener("click", function () {
        if (currentEditRow) {
            currentEditRow.querySelector(".user_name").textContent =
                document.getElementById("editUserName").value;
            currentEditRow.querySelector(".Join_Date").textContent =
                document.getElementById("editJoinDate").value;
            currentEditRow.querySelector(".PlaceRantalDetail").textContent =
                document.getElementById("editPlaceName").value + " (...)"; // "..."는 원래 장소명에 있는 괄호 뒤 내용이 생략된 것을 의미
            currentEditRow.querySelector(".placeAddres").textContent =
                document.getElementById("editPlaceAddress").value;
            currentEditRow.querySelector(".sport_kind").textContent =
                document.getElementById("editSportKind").value;

            closeModal(); // 수정 후 모달 닫기
        }
    });

    // 모든 체크박스를 제어하는 함수
    function toggleAllCheckboxes(isChecked) {
        rowCheckboxes.forEach((checkbox) => {
            checkbox.checked = isChecked;
        });
    }

    // 헤더 체크박스를 클릭하면 모든 체크박스의 상태를 변경
    headerCheckbox.addEventListener("change", function () {
        toggleAllCheckboxes(this.checked);
    });

    // 각 목록의 체크박스를 클릭하면, 하나라도 체크가 해제되면 헤더 체크박스를 해제
    rowCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            if (!this.checked) {
                headerCheckbox.checked = false;
            } else {
                // 모든 목록의 체크박스가 체크되었는지 확인
                const allChecked = Array.from(rowCheckboxes).every(
                    (cb) => cb.checked
                );
                headerCheckbox.checked = allChecked;
            }
        });
    });

    // 선택된 목록 삭제 기능
    deleteSelectedBtn.addEventListener("click", function () {
        const checkedRows = Array.from(rowCheckboxes).filter(
            (checkbox) => checkbox.checked
        );

        if (checkedRows.length > 0) {
            // 체크된 행들을 삭제
            checkedRows.forEach((checkbox) => {
                const row = checkbox.closest(".ServiceTable_row");
                row.remove();
            });

            // 모든 체크박스가 해제되었으므로, 헤더 체크박스도 해제
            headerCheckbox.checked = false;
        }
    });

    // 필터링 및 정렬 기능
    const sortOptions = document.querySelectorAll(".sort-filter-option");
    let currentSortField = "Join_Date";
    let isAscending = false; // 기본값: 내림차순

    function sortTable(field, isAscending) {
        const tableBody = document.querySelector(
            ".ServiceTable_container .ServiceTable_row_wrapper"
        ); // 테이블의 본문 컨테이너
        const rows = Array.from(
            tableBody.querySelectorAll(".ServiceTable_row")
        );

        rows.sort((a, b) => {
            let aValue, bValue;

            if (field === "Join_Date") {
                aValue = new Date(
                    a.querySelector(".Join_Date").textContent.trim()
                );
                bValue = new Date(
                    b.querySelector(".Join_Date").textContent.trim()
                );
            } else if (field === "user_name") {
                aValue = a
                    .querySelector(".user_name")
                    .textContent.trim()
                    .toLowerCase();
                bValue = b
                    .querySelector(".user_name")
                    .textContent.trim()
                    .toLowerCase();
            } else if (field === "hit_ctn") {
                aValue = parseInt(
                    a.querySelector(".hit_ctn").textContent.trim(),
                    10
                );
                bValue = parseInt(
                    b.querySelector(".hit_ctn").textContent.trim(),
                    10
                );
            }

            if (aValue < bValue) return isAscending ? -1 : 1;
            if (aValue > bValue) return isAscending ? 1 : -1;
            return 0;
        });

        rows.forEach((row) => tableBody.appendChild(row));
    }

    sortOptions.forEach((option) => {
        option.addEventListener("click", function () {
            const isUserNameSort = this.textContent.trim().includes("작성자");
            const field = isUserNameSort
                ? "user_name"
                : this.textContent.trim().includes("등록일")
                ? "Join_Date"
                : "hit_ctn";

            if (isUserNameSort) {
                // 작성자 정렬은 오름차순이 기본
                if (currentSortField === field) {
                    isAscending = !isAscending; // 클릭 시 오름차순 <-> 내림차순 토글
                } else {
                    currentSortField = field;
                    isAscending = true; // 새로 클릭하면 오름차순으로 설정
                }
            } else {
                if (currentSortField === field) {
                    isAscending = !isAscending; // 같은 필드를 다시 클릭하면 정렬 순서를 반대로
                } else {
                    currentSortField = field;
                    isAscending = false; // 새 필드를 클릭하면 내림차순이 기본
                }
            }

            sortTable(currentSortField, isAscending);
            sortOptions.forEach((opt) => opt.classList.remove("selected"));
            this.classList.add("selected");
        });
    });

    // 페이지 로드 시 기본 정렬 설정
    sortTable(currentSortField, isAscending);
    document.querySelector(".sort-filter-option").classList.add("selected");
});
