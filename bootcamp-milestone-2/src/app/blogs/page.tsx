import React from "react";
import BlogPreview from "@/components/blogPreview/blogPreview";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";
import styles from "./page.module.css";


async function getBlogs() {
  console.log("1")
    await connectDB();
    console.log("2")
    try {
        const blogs = await BlogModel.find().sort({date: -1}).orFail();
        console.log("3")
        return blogs;
    } catch (err) {
        console.log(err);
        return null;
    }

}


//blog = list 
export default async function BlogHome() {
    const blogs = await getBlogs();
    if (!blogs) {
      return <div> Blog Not Found </div>;
    }
    return (
      <div>
        <h1 className={styles.pageTitle}>Blogs</h1>
        <div className={styles.blogContainer}>
       
  
          {blogs.map((blog, index) => (
            <div key={index} className={styles.blogPreview}>
              <BlogPreview
                      title={blog.title}
                      date={blog.date}
                      slug={blog.slug}
                      description={blog.description}
                      image={blog.image}
                      image_alt={blog.image_alt} 
                      comments={blog.comments}
                              />
            </div>
          ))}
        </div>
      </div>
    );
  
}