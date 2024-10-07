document.addEventListener("DOMContentLoaded", function() {
    const loveIcons = document.querySelectorAll(".love");

    loveIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            this.classList.toggle("active");

            const likeCountElement = this.closest('section').querySelector('.like');
            let currentLikes = parseInt(likeCountElement.getAttribute('data-likes'));

            if (this.classList.contains('active')) {
                currentLikes += 1;
            } else {
                currentLikes -= 1;
            }

            likeCountElement.setAttribute('data-likes', currentLikes);
            likeCountElement.textContent = `${currentLikes} likes`;
        });
    });
});



const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

