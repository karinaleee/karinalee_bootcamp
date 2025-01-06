
import style from "./page.module.css";
import Comment from "@/components/blogPreview/comment";
import NewComment from "@/components/blogPreview/newcomment";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";
import Image from "next/image";

type commentType = {
	user: string;
	content: string; 	
	time: Date;
}

type Props= {
	params:Promise<{
		slug: string 
	}>;
}

async function getBlog(slug: string) {
	await connectDB();
	try {
		const blog = await BlogModel.findOne( { slug } ).orFail();
		return blog;
	} catch (err) {
		console.log("empty list:", err)
		return null;
	}
}


export default async function Blog({params}: Props) {
	const slug = (await params).slug;
	const blog = await getBlog(slug);

	if (blog == null) {
	  return (
		<div>
		  <h2>Error finding %{slug}!</h2>
		</div>
	  );
	} else {
	  return (
		<div className={style.info}>
		<div className={style.blogContent}>
		<div>	
   <h3 className={style.title}>{blog.title} </h3>
   <h3 className={style.date}> {new Date(blog.date).toLocaleDateString()}</h3>
   <div className={style.img}>
			<Image
			src="/cats.jpg"
			alt="cat"
			width={800}
			height={600}
			/>
          <div>
	  </div>
		<p className={style.description}>{blog.description}</p>


	  <div className={style.comment}>
		<p>Comment</p>
		{blog.comments.map((comment: commentType, index:number) => (
				<Comment key={index} comment={comment} />
			))}
	  </div>


		</div>

	 <NewComment slug={slug}/>		  
  </div>
  </div>
  </div>
	  );
	}
}