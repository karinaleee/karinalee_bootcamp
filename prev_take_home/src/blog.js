var blog = [
    { title: "Karina's Blog",
        date: "10/20/2024",
        description: "About me blog",
        image: "IMG_6219.jpg",
        imageAlt: "Here my issue",
        slug: "blog.com"
    }
];
// function appendBlogsToContainer(){
var blogContainer = document.getElementById('blog-container');
blog.forEach(function (blog) {
    var blogDiv = document.createElement("div");
    blogDiv.className = "blog-post";
    var blogTitle = document.createElement("h1");
    blogTitle.textContent = blog.title;
    blogDiv.appendChild(blogTitle);
    var blogDate = document.createElement("p");
    blogDate.textContent = blog.date;
    blogDiv.appendChild(blogDate);
    var blogDescription = document.createElement("p");
    blogDescription.textContent = blog.date;
    blogDiv.appendChild(blogDescription);
    var blogImage = document.createElement("img");
    blogImage.src = blog.image;
    blogImage.width = 250;
    blogImage.height = 250;
    blogImage.alt = "Image ${blog.title}";
    blogDiv.appendChild(blogImage);
    var blogSlug = document.createElement("a");
    blogSlug.href = blog.slug;
    blogSlug.textContent = "Read this too";
    blogDiv.appendChild(blogSlug);
    blogContainer.appendChild(blogDiv);
});
