<script>
   document.addEventListener("DOMContentLoaded", function() {
      fetch('posts.json')
         .then(response => response.json())
         .then(posts => {
            const featuredPostsContainer = document.getElementById('featured-posts');
            const featuredCount = 3; // Number of featured posts to display
            const shuffledPosts = posts.sort(() => 0.5 - Math.random()).slice(0, featuredCount);
            
            shuffledPosts.forEach(post => {
               const postElement = document.createElement('div');
               postElement.classList.add('flex-item');

               postElement.innerHTML = `
                  <article class="article">
                     <div class="d-flex">
                        <a href="${post.link}">
                           <img src="${post.image}" class="object-fit" alt="">
                           <div class="px-1 mt-1">
                              <a href="${post.link}" class="text-title display-2 text-light">${post.title}</a>
                              <p class="secondary-title text-secondary display-3"></p>
                           </div>
                        </a>
                     </div>
                  </article>
               `;

               featuredPostsContainer.appendChild(postElement);
            });
         })
         .catch(error => console.error('Error fetching posts:', error));
   });
</script>
