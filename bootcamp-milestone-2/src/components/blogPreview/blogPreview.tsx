import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogObject } from "@/database/blogSchema";

export default function BlogPreview(props: BlogObject) {
  return (
    <div className="blog-element">
      <Link href={"/blog/" + props.slug}>
        <a>
          <h2>{props.title}</h2>
        </a>
      </Link>
      <div className="blog-img">
        <Image
          src={props.image}
          alt={props.image_alt}
          width={500}
          height={500}
        />
      </div>
      <div className="blog-text">
        <p>{props.description}</p>
        <p>{props.date ? props.date.toDateString() : "Date not available"}</p>
      </div>
    </div>
  );
}
