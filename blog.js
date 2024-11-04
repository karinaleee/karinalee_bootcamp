var blogs = [
    {
        title: string, 
        date: string, 
        description: string, 
        image: string, 
        imageAlt: string, 
        slug: string, //URL name to redirect to specific page
    }, 
    {
            title: "Karina's Blog", 
            date: "10/20/2024", 
            description: "About me blog", 
            image: "blog.jpg", 
            imageAlt: "Here my issue", 
            slug: "blog.com"
        
    
    },
    ];


        var blogContainer = document.getElementById("blog-container");
        blogs.forEach(function (blog) {
            const blogDiv = document.createElement("div");
            blogDiv.className = "blog-post";
        
        
            const blogTitle = document.createElement("h1");
            blogTitle.textContent = blog.title; 
            blogDiv.appendChild(blogTitle);
        
                
            const blogDate = document.createElement("p"); 
            blogDate.textContent = blog.date; 
            blogDiv.appendChild(blogDate);
        
            
            const blogDescription = document.createElement("p"); 
            blogDescription.textContent = blog.date; 
            blogDiv.appendChild(blogDescription);
        
            const blogImage = document.createElement("img");
            blogImage.src = blog.image; 
            blogImage.width = 350;
            blogImage.height = 250; 
            blogImage.alt = "Image ${blog.title}"
            blogDiv.appendChild(blogImage);
            
            const blogSlug = document.createElement("a"); 
            blogSlug.href = blog.slug;
            blogSlug.textContent = "Read this too"; 
            blogDiv.appendChild(blogSlug);
        

        });
