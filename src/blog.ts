type Blog = {
    title: string; 
    date: string; 
    description: string; 
    image: string; 
    imageAlt: string; 
    slug: string; //URL name to redirect to specific page
}; 

const blog: Blog[] = [
    {    title: "Karina's Blog", 
        date: "10/20/2024", 
        description: "About me blog", 
        image: "blog.jpg", 
        imageAlt: "Here my issue", 
        slug: "blog.com"
    }

];

function appendBlogsToContainer(){
    const blogContainer = document.getElementById('blog-container');
}