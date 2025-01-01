import React from 'react';
import styles from "@/app/blog/page.module.css";
import { blog } from "@/app/static/blogData"; // Import the actual blog array
import BlogPreview from '@/components/blogPreview/blogPreview'; 
import Footer from "@/components/footer/footer";

export default function BlogPage() {
  return (
    <main>
      <div className={styles.blogPage}>
        <div className={styles.blogList}>
          {blog.map((item) => ( 
            <BlogPreview key={item.slug} blog={item} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
