const container = document.querySelector('.container')

fetch('https://6584392b4d1ee97c6bcf4612.mockapi.io/product/blogs', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(blogs => {
  // Do something with the list of tasks
  blogs.forEach(
    (blog) => {
        const blogItem = document.createElement('div');
        blogItem.classList.add("blog-Item");
        blogItem.innerHTML =
        `
            <p>${blog.name}</p>
            <p>${blog.view}</p>
            <p>${blog.image}</p>
            <p>${blog.id}</p>

        `
        container.appendChild(blogItem);
  });
}).catch(error => {
  // handle error
})