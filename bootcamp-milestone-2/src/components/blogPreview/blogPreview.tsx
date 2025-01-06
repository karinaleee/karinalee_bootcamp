import React from "react";
import style from './blogPreview.module.css'
import Link from "next/link";
import { Blog } from "@/database/blogSchema";
import Image from "next/image";


// export type Blog = {
//   slug: string;
//   title: string;
//   date: string;
//   description: string;
//   image: string;
//   image_alt?: string; // Optional in case it's not always provided
//   comments?: {
//     user: string;
//     content: string;
//     time: string;
//   }[];
// };

export default function BlogPreview(props: Blog) {

  return (

    
    <div className={style.info}>
      <div>
        <Link className={style.title} href={`/blogs/${props.slug}`}> {props.title} </Link>
           <h3 className={style.date}> {new Date(props.date).toLocaleDateString()}</h3>
           <div className={style.img}>
                <Image
                    src={props.image}
                    alt={props.image_alt || 'Image of Cat'}
                    width={200}
                    height={300}
                />
          <div>
          <p className={style.description}>{props.description}</p>
          
        </div>
        </div>

	  </div>
    </div>
   
  );
}
