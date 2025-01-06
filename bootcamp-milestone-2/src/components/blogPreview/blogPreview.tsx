import React from "react";
import Image from "next/image";
import style from './blogPreview.module.css'
import Link from "next/link";
import { Blog } from "@/database/blogSchema";

export default function BlogPreview(props: Blog) {
  // return (
  //   <div className="blog-element">
  //     <Link href={"/blog/" + props.slug}>
  //       <a>
  //         <h2>{props.title}</h2>
  //       </a>
  //     </Link>
  //     <div className="blog-img">
  //       <Image
  //         src={props.image}
  //         alt={props.image_alt}
  //         width={500}
  //         height={500}
  //       />
  //     </div>
  //     <div className="blog-text">
  //       <p>{props.description}</p>
  //       <p>{props.date ? props.date.toDateString() : "Date not available"}</p>
  //     </div>
  //   </div>
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
