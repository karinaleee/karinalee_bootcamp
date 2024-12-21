import React from 'react';
import Image from "next/image";
import type { Blog } from "@/app/blogData";
import style from './blogPreview.module.css';
import Link from 'next/link';

// Component for blog, it iterates through all the blogs from blog data and displays them
export default function BlogPreview(props: Blog) {
  return (
    <Link href={`/blog/${props.slug}`}>
      <div className={style.previewContainer}>
        <h3 className={style.title}>{props.title}</h3>
        <div className={style.content}>
          <Image
            src={props.image || "/bootcamp-milestone-2/src/app/IMG_6219.jpg"} // Replace with a default image if `props.image` is undefined
            alt="Project image"
            width={250}
            height={250}
            className={style.image}
          />
          <p className={style.description}>{props.description}</p>
          <p className={style.date}>{props.date}</p>
        </div>
      </div>
    </Link>
  );
}