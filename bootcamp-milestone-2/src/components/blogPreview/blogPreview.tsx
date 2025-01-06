import React from "react";
import style from './blogPreview.module.css'
import Link from "next/link";
import { Blog } from "@/database/blogSchema";

export default function BlogPreview(props: Blog) {

  return (

    
    <div className={style.info}>
      <div>
        <Link className={style.title} href={`/blogs/${props.slug}`}> {props.title} </Link>
           <h3 className={style.date}> {new Date(props.date).toLocaleDateString()}</h3>
              <img className={style.img}
              src={props.image} 
              alt={props.image_alt || 'Image'} 
          />
          </div>
          <div>
          <p className={style.description}>{props.description}</p>
          
        </div>

	  </div>
   
  );
}
