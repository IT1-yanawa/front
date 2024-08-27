// 게시글 가져오는 서비스
const postService = (() => {
    const getPosts = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        if (callback) {
            callback(posts.slice(0, 25)); // 첫 25개의 게시글만 가져옴
        }
    };

    // 조건에 따른 검색 기능. 쿼리, 필터타입, 그리고 콜백을 가져옴
    const searchPosts = async (query, filterType, callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        let posts = await response.json();
        posts = posts.slice(0, 25); // 첫 25개의 게시글만 가져옴

        if (filterType === "subject") {
            //제목만 일 때,
            posts = posts.filter((post) => post.title.includes(query)); //제목에 해당 쿼리가 포함되어있으면 posts에 담음
        } else if (filterType === "subject||content") {
            //제목 + 내용일 때,
            posts = posts.filter(
                (post) =>
                    post.title.includes(query) || post.body.includes(query) //제목 또는 내용에 해당 쿼리가 담겨있으면 posts에 담음
            );
        } else if (filterType === "nick") {
            //닉네임일때,
            posts = posts.filter((post) => post.userId.toString() === query); //해당 쿼리문자열이 있는 닉네임 posts에 담음
        }

        if (callback) {
            callback(posts); //callback에 posts를 담음
        }
    };

    return { getPosts: getPosts, searchPosts: searchPosts };
})();

// sortPosts 함수는 게시글을 주어진 정렬 기준에 따라 정렬
const sortPosts = (posts, sortType) => {
    if (sortType === "num") {
        // 게시글 ID를 기준으로 오름차순 정렬
        posts.sort((a, b) => a.id - b.id);
    } else if (sortType === "hit") {
        // 조회수 (임의로 post ID를 조회수로 사용) 기준 내림차순 정렬
        posts.sort((a, b) => b.id - a.id);
    } else if (sortType === "date") {
        // 등록일 (임의로 post ID를 등록일로 사용) 기준 내림차순 정렬
        posts.sort((a, b) => b.id - a.id);
    }
    return posts; // 정렬된 게시글 목록 반환
};

const postLayout = (() => {
    //목록에 게시글 형식에 맞춰서 담기
    const showPosts = (posts) => {
        const tbody = document.querySelector("tbody");
        let temp = ``;

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

        tbody.innerHTML = temp;
    };

    return { showPosts: showPosts };
})();

const searchFormSubmit = () => {
    const filterType = document.querySelector("select[name='kind']").value; // 선택된 필터 유형을 가져오기
    const query = document.querySelector("input[name='keyword']").value; //입력된 검색어 가져오기

    if (query.trim() !== "") {
        //검색어 앞뒤 공백을 제거하고 검색어가 비어있지 않을때,
        // 검색어와 필터 사용하여 검색된 게시글만 출력
        postService.searchPosts(query, filterType, postLayout.showPosts);
    } else {
        //검색어가 공백일 경우 전체 게시글 출력
        postService.getPosts(postLayout.showPosts);
    }
};

// 사용자가 정렬 기준을 변경했을 때 실행되는 함수
const sortPostsBy = () => {
    const sortType = document.querySelector("select[name='sort']").value; // 사용자가 선택한 정렬 기준을 가져옴

    postService.getPosts((posts) => {
        const sortedPosts = postService.sortPosts(posts, sortType); // 선택한 정렬 기준에 따라 게시글 정렬
        postLayout.showPosts(sortedPosts); // 정렬된 게시글을 화면에 표시
    });
};

document.addEventListener("DOMContentLoaded", () => {
    postService.getPosts(postLayout.showPosts); //html이 로드될때, postService.getPosts(postLayout.showPosts) 실행
});

document.addEventListener("DOMContentLoaded", () => {
    const sortSelect = document.querySelector("select[name='sort']");
    sortSelect.addEventListener("change", sortPostsBy); // 사용자가 정렬 기준을 변경할 때마다 sortPostsBy 함수 실행
});
