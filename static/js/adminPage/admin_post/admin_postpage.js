// 게시글을 가져오는 서비스 객체
const postService = (() => {
    // 검색과 필터링된 게시글을 가져오는 함수
    // const searchPosts = async (query, filterType, sortType, callback) => {
    //     const response = await fetch(
    //         "https://jsonplaceholder.typicode.com/posts"
    //     );
    //     let posts = await response.json();

    // 필터 타입에 따른 게시글 필터링
    if (filterType === "subject") {
        posts = posts.filter((post) => post.title.includes(query));
    } else if (filterType === "subject||content") {
        posts = posts.filter(
            (post) => post.title.includes(query) || post.body.includes(query)
        );
    } else if (filterType === "nick") {
        posts = posts.filter((post) => post.userId.toString().includes(query));
    } else if (filterType === comment) {
        posts = posts.filter((post) => post.comment.includes(query));
    }

    // 정렬 타입에 따른 게시글 정렬
    posts = postService.sortPosts(posts, sortType);

    // 콜백 함수로 필터링 및 정렬된 게시글 반환
    if (callback) {
        callback(posts);
    }
    // };

    // 게시글 정렬 함수
    const sortPosts = (posts, sortType) => {
        if (sortType === "num") {
            posts.sort((a, b) => a.id - b.id);
        } else if (sortType === "hit") {
            posts.sort((a, b) => b.id - a.id);
        } else if (sortType === "date") {
            posts.sort((a, b) => b.id - a.id);
        }
        return posts;
    };

    return { searchPosts, sortPosts }; // 검색 및 정렬 기능을 노출
})();

// 게시글 레이아웃 객체
const postLayout = (() => {
    // 게시글을 HTML로 표시하는 함수
    const showPosts = (posts) => {
        const tbody = document.querySelector("tbody"); // 게시글이 삽입될 테이블의 tbody 요소 선택
        let temp = "";

        // 각 게시글을 테이블 행으로 변환하여 HTML에 추가
        posts.forEach((post) => {
            const { id, title, userId } = post;
            temp += `
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
        });

        tbody.innerHTML = temp; // tbody에 생성된 HTML을 삽입
    };

    return { showPosts }; // 게시글 표시 기능을 노출
})();

// 페이지 로드 후 초기화
document.addEventListener("DOMContentLoaded", () => {
    let currentFilterType = "subject"; // 기본 필터 타입
    let currentSortType = "num"; // 기본 정렬 타입
    let currentQuery = ""; // 기본 검색어

    // 게시글을 표시하는 함수
    const renderPosts = (data) => {
        postLayout.showPosts(data);
    };

    // 게시글 데이터를 가져오는 함수
    const fetchData = async (query, filterType, sortType) => {
        return new Promise((resolve) => {
            postService.searchPosts(query, filterType, sortType, resolve); // 검색 및 정렬된 데이터를 반환
        });
    };

    // 페이지네이션 초기화 함수
    const initPagination = (posts) => {
        $("#pagination-container").pagination({
            dataSource: posts, // 페이지네이션의 데이터 소스로 게시글 사용
            pageSize: 25, // 페이지 당 게시글 수
            callback: function (data, pagination) {
                renderPosts(data); // 각 페이지에 해당하는 게시글을 렌더링
            },
        });
    };

    // 검색 또는 정렬 조건에 따라 게시글과 페이지네이션을 업데이트하는 함수
    const updatePosts = async () => {
        const posts = await fetchData(
            currentQuery,
            currentFilterType,
            currentSortType
        );
        initPagination(posts); // 게시글 데이터에 따라 페이지네이션 초기화
    };

    // 검색 버튼 클릭 시 검색어를 반영하여 게시글 업데이트
    document.querySelector(".srch-bt").addEventListener("click", () => {
        currentQuery = document.getElementById("keyword").value;
        updatePosts();
    });

    // 정렬 옵션 변경 시 정렬 타입을 반영하여 게시글 업데이트
    document
        .querySelector("select[name='sort']")
        .addEventListener("change", (event) => {
            currentSortType = event.target.value;
            updatePosts();
        });

    // 페이지 로드 시 게시글 및 페이지네이션 초기화
    updatePosts();
});
