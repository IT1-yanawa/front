document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("baseImage");
    const maxFiles = 6;
    const maxSize = 10 * 1024 * 1024; // 10MB
    const minResolution = { width: 1200, height: 675 };
    const imageListContainer = document.querySelector(
        ".UploadedImageList_container"
    );
    const imageEditModal = document.getElementById("imageEditModal");
    const imageToEdit = document.getElementById("imageToEdit");
    const saveChangesButton = document.getElementById("saveChanges");
    const cancelEditButton = document.getElementById("cancelEdit");

    let validFiles = []; // 유효한 파일들을 저장할 배열

    fileInput.addEventListener("change", function (event) {
        const files = Array.from(event.target.files);
        let errorMessages = [];

        if (files.length + validFiles.length > maxFiles) {
            errorMessages.push("최대 6개의 이미지만 업로드할 수 있습니다.");
        } else {
            files.forEach((file, index) => {
                if (file.size > maxSize) {
                    errorMessages.push(
                        `${file.name} 파일은 10MB를 초과할 수 없습니다.`
                    );
                } else {
                    const img = new Image();
                    img.src = URL.createObjectURL(file);
                    img.onload = function () {
                        if (
                            img.width < minResolution.width ||
                            img.height < minResolution.height
                        ) {
                            errorMessages.push(
                                `${file.name} 파일은 해상도가 1200x675픽셀 이상이어야 합니다.`
                            );
                        } else {
                            validFiles.push(file); // 유효한 파일들을 배열에 저장
                            renderImages(); // 이미지를 다시 렌더링
                        }

                        if (
                            index === files.length - 1 &&
                            errorMessages.length > 0
                        ) {
                            alert(errorMessages.join("\n"));
                        }
                    };
                }
            });
        }
    });

    function renderImages() {
        imageListContainer.innerHTML = ""; // 이전의 이미지를 모두 제거
        validFiles.forEach((file) => {
            const imgSrc = URL.createObjectURL(file);
            addImageToList(imgSrc);
        });
    }

    function addImageToList(imageSrc) {
        const listItem = document.createElement("li");
        listItem.className = "UploadedImageList_listItem";
        listItem.tabIndex = 0;
        listItem.role = "button";

        const imageContainer = document.createElement("div");
        imageContainer.className = "UploadedImage_container";
        imageContainer.style.backgroundImage = `url('${imageSrc}')`;

        const editButton = document.createElement("button");
        editButton.className = "UploadedImage_editButton";
        editButton.type = "button";
        editButton.ariaLabel = "이미지 편집하기";
        editButton.textContent = "편집";

        const removeButton = document.createElement("button");
        removeButton.className = "UploadedImage_removeButton";
        removeButton.type = "button";
        removeButton.ariaLabel = "이미지 제거하기";
        removeButton.innerHTML = `
            <svg viewBox="0 0 40 40" focusable="false" role="presentation" class="withIcon_icon" aria-hidden="true" style="width: 18px; height: 18px;">
                <path d="M33.4 8L32 6.6l-12 12-12-12L6.6 8l12 12-12 12L8 33.4l12-12 12 12 1.4-1.4-12-12 12-12z"></path>
            </svg>
        `;

        imageContainer.appendChild(editButton);
        imageContainer.appendChild(removeButton);
        listItem.appendChild(imageContainer);
        imageListContainer.appendChild(listItem);

        removeButton.addEventListener("click", function () {
            validFiles = validFiles.filter(
                (file) => URL.createObjectURL(file) !== imageSrc
            );
            renderImages(); // 이미지를 다시 렌더링
        });

        editButton.addEventListener("click", function () {
            imageToEdit.src = imageSrc;
            imageEditModal.style.display = "block";
        });
    }

    // 모달 닫기 이벤트 (취소 버튼)
    cancelEditButton.addEventListener("click", function () {
        imageEditModal.style.display = "none"; // 모달만 닫고, 이미지 리스트에는 영향을 주지 않음
    });

    // 모달 닫기 이벤트 (확인 버튼)
    saveChangesButton.addEventListener("click", function () {
        // 편집된 이미지에 대한 추가 처리를 할 수 있습니다.
        imageEditModal.style.display = "none"; // 모달만 닫고, 이미지 리스트에는 영향을 주지 않음
    });
});
