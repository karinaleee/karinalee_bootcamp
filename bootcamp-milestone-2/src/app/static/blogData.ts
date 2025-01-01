export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string; // URL name to redirect to specific page
  }
  
  export const blog: Blog[] = [
    {
      title: "Karina's Blog",
      date: "10/20/2024",
      description: "About me blog",
      image: "IMG_6219.jpg",
      imageAlt: "Here my issue",
      slug: "https://blog.com",
    },
  ];
  
  // Function to append blogs to a container
  function appendBlogsToContainer() {
    const blogContainer = document.getElementById("blog-container");
    if (!blogContainer) {
      console.error("Blog container not found!");
      return;
    }
  
    blog.forEach((blog) => {
      const blogDiv = document.createElement("div");
      blogDiv.className = "blog-post";
  
      const blogTitle = document.createElement("h1");
      blogTitle.textContent = blog.title;
      blogDiv.appendChild(blogTitle);
  
      const blogDate = document.createElement("p");
      blogDate.textContent = blog.date;
      blogDiv.appendChild(blogDate);
  
      const blogDescription = document.createElement("p");
      blogDescription.textContent = blog.description;
      blogDiv.appendChild(blogDescription);
  
      const blogImage = document.createElement("img");
      blogImage.src = blog.image;
      blogImage.width = 250;
      blogImage.height = 250;
      blogImage.alt = blog.imageAlt;
      blogDiv.appendChild(blogImage);
  
      const blogSlug = document.createElement("a");
      blogSlug.href = blog.slug;
      blogSlug.textContent = "Read this too";
      blogDiv.appendChild(blogSlug);
  
      blogContainer.appendChild(blogDiv);
    });
  }
  
  export default blog;
  