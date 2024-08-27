// 페이지네이션 설정을 위한 변수와 함수들
const paginationLayout = (() => {
    const postsPerPage = 25; // 페이지당 게시글 수
    let currentPage = 1; // 현재 페이지 번호를 저장
    let totalPages = 1; // 전체 페이지 수를 저장
    let posts = []; // 전체 게시글 데이터를 저장할 배열

    // 현재 페이지에 해당하는 게시글만을 화면에 표시하는 함수
    const showPosts = () => {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = ""; // 기존 게시글들을 모두 삭제

        const start = (currentPage - 1) * postsPerPage;
        const end = start + postsPerPage;
        const paginatedPosts = posts.slice(start, end); // 현재 페이지에 해당하는 게시글들만 잘라서 가져옴

        // 각 게시글을 <tr> 요소로 만들어 tbody에 추가
        paginatedPosts.forEach((post) => {
            const { id, title, userId } = post;
            const row = `
                <tr>
                    <td><span class="num num tp1">${id}</span></td>
                    <td><span class="label tp1">카테고리</span></td>
                    <td>
                        <p class="title">
                            <a href="" class="subject-link">${title}</a>
                            <span class="board-list-comment">(1)</span>
                        </p>
                    </td>
                    <td>
                        <div class="user-nick-wrap nick">
                            <div class="user-nick-text">
                                <img style="width: 20px; height: 20px; vertical-align:middle;" src="" alt="">
                                사용자 ${userId}
                            </div>
                        </div>
                    </td>
                    <td><span class="count">조회수</span></td>
                    <td><span class="date">날짜</span></td>
                </tr>
            `;
            tbody.insertAdjacentHTML("beforeend", row);
        });

        updatePagination(); // 페이지네이션 업데이트
    };

    // 페이지네이션을 업데이트하는 함수
    const updatePagination = () => {
        const pagination = document.querySelector(".paging-box ul");
        pagination.innerHTML = ""; // 기존의 페이지 버튼들을 모두 삭제

        totalPages = Math.ceil(posts.length / postsPerPage); // 전체 페이지 수 계산

        // 현재 페이지 그룹에서 시작하는 페이지 번호와 끝나는 페이지 번호 계산
        const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
        const endPage = Math.min(startPage + 9, totalPages);

        // 페이지 버튼들을 동적으로 생성하여 추가
        for (let i = startPage; i <= endPage; i++) {
            const pageItem = `<li><a href="#" class="${
                i === currentPage ? "on" : ""
            }" data-page="${i}">${i}</a></li>`;
            pagination.insertAdjacentHTML("beforeend", pageItem);
        }

        // 이전, 다음 버튼의 활성화 상태 업데이트
        document
            .querySelector(".page-jump.prev")
            .classList.toggle("active", startPage > 1);
        document
            .querySelector(".page-jump.next")
            .classList.toggle("active", endPage < totalPages);
    };

    // 주어진 페이지 번호로 이동하여 해당 페이지의 게시글을 표시하는 함수
    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return; // 유효한 페이지 번호인지 확인
        currentPage = page; // 현재 페이지 번호 업데이트
        showPosts(); // 해당 페이지의 게시글을 표시
    };

    // 페이지네이션 초기화 함수, 게시글 데이터를 받아 첫 페이지를 로드
    const init = (postList) => {
        posts = postList; // 전체 게시글 데이터를 저장
        goToPage(1); // 첫 페이지로 이동
    };

    return { init: init, goToPage: goToPage };
})();

document.addEventListener("DOMContentLoaded", () => {
    postService.getPosts(paginationLayout.init); // 페이지가 로드될 때 전체 게시글을 불러와 초기화

    document.querySelector(".paging-box ul").addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            const page = parseInt(e.target.getAttribute("data-page"));
            paginationLayout.goToPage(page); // 클릭한 페이지 번호로 이동
        }
    });

    // "이전" 버튼 클릭 시 이전 페이지 그룹으로 이동
    document.querySelector(".page-jump.prev").addEventListener("click", () => {
        const currentStartPage =
            Math.floor((paginationLayout.currentPage - 1) / 10) * 10 + 1;
        if (currentStartPage > 1) {
            paginationLayout.goToPage(currentStartPage - 10); // 이전 페이지 그룹으로 이동
        }
    });

    // "다음" 버튼 클릭 시 다음 페이지 그룹으로 이동
    document.querySelector(".page-jump.next").addEventListener("click", () => {
        const currentEndPage =
            Math.floor((paginationLayout.currentPage - 1) / 10) * 10 + 10;
        if (currentEndPage < paginationLayout.totalPages) {
            paginationLayout.goToPage(currentEndPage + 1); // 다음 페이지 그룹으로 이동
        }
    });
});
