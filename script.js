fetch("https://dummyjson.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let posts = data.posts;
    let postsConttainer = document.getElementById("posts");
    postsConttainer.innerHTML = "";
    posts.forEach((post) => {
      postsConttainer.innerHTML += `
      <div class="posts-item">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <div class="posts-footer"><div class="tags">

        ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      
          
        </div>
        <div class="posts-info">
        <p class="posts-icon like"> ${post.reactions.likes}</p>
        <p class="posts-icon dislike"> ${post.reactions.dislikes}</p>
        <p class="posts-icon view"> ${post.views}</p>
        </div> </div>
      </div>
      `;
    });
  })
  .catch(function (error) {
    console.error("Ошибка получении данных", error);
  });
