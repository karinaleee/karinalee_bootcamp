import React from "react";
import BlogPreview from "@/components/blogPreview/blogPreview";
import connectDB from "@/database/db";
import BlogModel, {BlogObject} from "@/database/blogSchema";


async function getBlogs() {
    await connectDB();

    try {
        const blogs = await BlogModel.find().sort({date: -1}).orFail();
        return blogs;
    } catch (err) {
        console.log(err);
        return [];
    }

}



export default async function Blog(){

    const blogList: BlogObject[] = await getBlogs();


    return( 
        <main>
            <h1 className="page-title">Blog</h1>
            <div id="blog-container">
               {blogList.map(blog => 
                <BlogPreview 
                title={blog.title}
                slug={blog.slug}
                date={blog.date}
                description={blog.description}
                image={blog.image}
                content = {blog.content}
                imageAlt={blog.image_alt}/>
               )}
            </div> 
        </main>
    );

}