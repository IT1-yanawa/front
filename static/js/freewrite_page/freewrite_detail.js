document.addEventListener("DOMContentLoaded", function () {
    const commentList = document.getElementById("commentList");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const comments = commentList.getElementsByTagName("li");
    let visibleComments = 5;

    function showComments() {
        for (let i = 0; i < comments.length; i++) {
            if (i < visibleComments) {
                comments[i].style.display = "block";
            } else {
                comments[i].style.display = "none";
            }
        }
    }

    loadMoreBtn.addEventListener("click", function () {
        visibleComments += 5;
        showComments();
    });

    showComments(); // 초기 5개의 댓글만 표시
});
