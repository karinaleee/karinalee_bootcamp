// import style from "./page.module.css";
// import Comment from "@/components/project/comment";
// import NewComment from "../../../components/project/newcomment";

// type Props = {
//   params: Promise<{
//     title: string;
//   }>;
// };


// type commentType = {
// 	user: string;
// 	content: string;
// 	time: Date;
// }

// async function getProject(title: string) {
//   try {

//     const res = await fetch(`api/portfolio/${title}`, {
//       cache: "no-store",
//     });
  
//     if (!res.ok) {
//       throw new Error("Failed to fetch project");
//     }
//     return res.json();
//   } catch (err: unknown) {
//     console.log(`error: ${err}`);
//     return null;
//   }
// }
// export default async function Project({ params }: Props) {
//   const title = (await params).title;
//   const project = await getProject(title);


//   if (!project) {

//     return (
//       <div>
//         <h1 className="pageTitle">404 - Project Not Found</h1>
//       </div>
//     );
//   }
//   if (project) {
//     return (
//       <div className={style.container}>
//         <div className={style.info}>
//           <p className={style.title}>
//             <strong>{project.title} </strong> {project.skills}
//           </p>
//           <ul>
//             <li className={style.content1}>{project.content1}</li>
//             <li className={style.content2}>{project.content2}</li>
//           </ul>

//           <div className={style.comment}>
//             <p>Comment Section</p>
//             {project.comments.map((comment: commentType, index: number) => (
//               <Comment key={index} comment={comment} />
//             ))}
//           </div>
//         </div>
//         <div className={style.commentSec}>
//           <NewComment title={title} />
//         </div>
//       </div>
//     );
//   }
 
// }
// import style from './blg.module.css'
// import style from "./page.module.css";
// import Comment from "@/components/blogPreview/comment";
// import NewComment from "@/components/blogPreview/newcomment";
// import connectDB from "@/database/db";
// import projectSchema from "@/database/projectSchema";

// type commentType = {
// 	user: string;
// 	content: string; 	
// 	time: Date;
// }
// // /*
// type Props = {
// 	params:Promise<{
// 		slug: string
// 	}>;
// }

// async function getBlog(slug: string) {
// 	try {
	
// 		const res = await fetch(`/api/blogs/${slug}`, {
// 			cache: "no-store",	
// 		})
	
// 		if (!res.ok) { 
// 			throw new Error("Failed to fetch blog");
// 		}
// 		return res.json();
// 	} catch (err: unknown) {
// 		console.log(`error: ${err}`);
// 		return null;
	
// 	}
// }*/

// // import style from "./page.module.css";
// // import Comment from "@/components/blogPreview/comment";
// // import NewComment from "@/components/blogPreview/newcomment";
// // import connectDB from "@/database/db";
// // import projectSchema from "@/database/projectSchema";


// // type Props = {
// // 	params: {slug: string };
// // }

// // async function getBlog(slug: string) {
// // 	await connectDB();
// // 	try {
// // 		const blog = await projectScehma.findOne( { slug } ).orFail();
// // 		return blog;
// // 	} catch (err) {
// // 		return null;
// // 	}
// // }



// /*
// export default async function Blog({params}: Props) {
// 	const slug = (await params).slug;
// 	console.log(slug);
//     const blog = await getBlog(slug);
// 	console.log(blog);
// 	if(!blog){
		
// 		return(
// 		  <div>
// 			<h1 className="pageTitle"> 404 - Blog Not Found</h1>
// 		  </div>
// 		);
// 	  }
// 	if(blog){
		
// 	return(

//         <div className={style.info}>
// 			<div className={style.blogContent}>
// 			<div>	
//        <h3 className={style.title}>{blog.title} </h3>
//        <h3 className={style.date}> {new Date(blog.date).toLocaleDateString()}</h3>
//         <img className={style.photo}
//               src={blog.image} 
//               alt={blog.image_alt || 'Image'} />
            
//           </div>
// 			<p className={style.description}>{blog.description}</p>


//           <div className={style.comment}>
// 			<p>Comment</p>
//             {blog.comments.map((comment: commentType, index:number) => (
// 	                <Comment key={index} comment={comment} />
// 	            ))}
//           </div>


// 			</div>
	
// 		<NewComment slug={slug}/>		  
// 	  </div>
	
//     );
// 	}
	
// }*/

// // export default async function Project({ params }: Props) {
// //     const title = (await params).title;
// //     const project = await project(title);
  
  
// //     if (!project) {
  
// //       return (
// //         <div>
// //           <h1 className="pageTitle">404 - Project Not Found</h1>
// //         </div>
// //       );
// //     }
// // 	if (project) {
// //         return (
// //           <div className={style.container}>
// //             <div className={style.info}>
// //               <p className={style.title}>
// //                 <strong>{project.title} </strong> {project.skills}
// //               </p>
// //               <ul>
// //                 <li className={style.content1}>{project.content1}</li>
// //                 <li className={style.content2}>{project.content2}</li>
// //               </ul>
    
// //               <div className={style.comment}>
// //                 <p>Comment Section</p>
// //                 {project.comments.map((comment: commentType, index: number) => (
// //                   <Comment key={index} comment={comment} />
// //                 ))}
// //               </div>
// //             </div>
// //             <div className={style.commentSec}>
// //               <NewComment title={title} />
// //             </div>
// //           </div>
// //         );
// //       }
// // }
// // import style from "./page.module.css";
// // import Footer from "@/components/footer/footer";
// // import Comment from "@/components/project/comment"; 
// // import NewComment from "@/components/project/newcomment"; 
// // import React from "react";
// // // Type definitions
// // type Props = {
// //   params: Promise<{
// //     slug: string;
// //   }>;
// // };
// // // Function to fetch project data
// // async function getProject(slug: string) {
// //   try {
// //     const res = await fetch(`http://localhost:3000/api/Project/${slug}`, {
// //       cache: "no-store",
// //     });
// //     // This checks that the GET request was successful
// //     if (!res.ok) {
// //       throw new Error("Failed to fetch project");
// //     }
// //     return res.json();
// //   } catch (err: unknown) {
// //     console.error(`Error fetching project: ${err}`);
// //     return null;
// //   }
// // }
// // export default async function Project({ params }: Props) {
// //   try {
// //     const slug = (await params).slug;
// //     console.log("SLUG passed to getProject:", slug);
// //     const project = await getProject(slug);
// //     console.log("Fetched Project:", project);
// //     // Handle case where project is not found
// //     if (!project) {
// //       return (
// //         <div className={style.errorPage}>
// //           <h1 className={style.pageTitle}>404 - Project Not Found</h1>
// //         </div>
// //       );
// //     }
// //     return (
// //       <div className={style.projectPage}>
// //         <div className={style.info}>
// //           <div className={style.projectContent}>
// //             <h1 className={style.title}>{project.title}</h1>
// //             <img
// //               className={style.photo}
// //               src={project.image}
// //               alt={project.imageAlt || "Project Image"}
// //             />
// //             <p className={style.description}>{project.description}</p>
// //           </div>
// //           <div className={style.commentSection}>
// //             <h2 className={style.commentTitle}>COMMENT SECTION</h2>
// //             <div className={style.commentList}>
// //               {project.comments.map((comment: any, index: number) => (
// //                 <Comment key={index} comment={comment} />
// //               ))}
// //             </div>
// //           </div>
// //           <NewComment title={slug} />
// //         </div>
// //         <Footer />
// //       </div>
// //     );
// //   } catch (error) {
// //     console.error("Error rendering the project page:", error);
// //     return (
// //       <div className={style.errorPage}>
// //         <h1 className={style.pageTitle}>
// //           An error occurred. Please try again later.
// //         </h1>
// //       </div>
// //     );
// //   }
// // }

// import { NextRequest, NextResponse } from "next/server";
// import connectDB from "@/database/db"; // Default import
// import projectSchema from "@/database/projectSchema"; // Ensure correct export in projectSchema.ts

// interface PropsProm {
//   params: { slug: string };
// }
// // Handle GET request to fetch a project by slug
// export async function GET(req: NextRequest, { params }: PropsProm) {
//   await connectDB(); // Ensure DB is connected
//   const { slug } = params;
//   try {
//     // Fetch the project by slug
//     const project = await projectSchema.findOne({ slug });
//     if (!project) {
//       return NextResponse.json({ error: "Project not found" }, { status: 404 });
//     }
//     console.log("This is the slug:", slug);
//     return NextResponse.json(project); // Return the found project
//   } catch (err) {
//     console.error("Error fetching project:", err);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }
// // Handle POST request to add a comment to a project
// export async function POST(request: Request) {
//   try {
//     await connectDB(); // Ensure DB is connected
//     const { slug, user, content } = await request.json();
//     // Fetch the project by slug
//     const project = await projectSchema.findOne({ slug });
//     if (!project) {
//       return NextResponse.json({ error: "Project not found" }, { status: 404 });
//     }
//     // Add the new comment
//     const newComment = {
//       user,
//       content,
//       time: new Date(),
//     };
//     project.comments.push(newComment);
//     // Save the updated project
//     await project.save();
//     return NextResponse.json({ message: "Comment added successfully" });
//   } catch (error) {
//     console.error("Error in POST route:", error);
//     return NextResponse.json({ error: "Failed to add comment" }, { status: 500 });
//   }
// }

import style from "./page.module.css";
import Footer from "@/components/footer/footer";
import Comment from "@/components/project/comment"; 
import NewComment from "@/components/project/newcomment"; 
import React from "react";
// Type definitions
type Props = {
  params: Promise<{
    title: string;
  }>;
};
// Function to fetch project data
async function getProject(title: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/Project/${title}`, {
      cache: "no-store",
    });
    console.log("RESPNONCE",res)
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }
    return res.json();
  } catch (err: unknown) {
    console.error(`Error fetching project: ${err}`);
    return null;
  }
}
export default async function Project({ params }: Props) {
  try {
    const title = (await params).title;
    const project = await getProject(title);
    
    // Handle case where project is not found
    if (!project) {
      return (
        <div className={style.errorPage}>
          <h1 className={style.pageTitle}>404 - Project Not Found</h1>
        </div>
      );
    }
    return (
      <div className={style.projectPage}>
        <div className={style.info}>
          <div className={style.projectContent}>
            <h1 className={style.title}>{project.title}</h1>
            <img
              className={style.photo}
              src={project.image}
              alt={project.imageAlt || "Project Image"}
            />
            <p className={style.description}>{project.description}</p>
          </div>
          <div className={style.commentSection}>
            <h2 className={style.commentTitle}>COMMENT SECTION</h2>
            <div className={style.commentList}>
              {project.comments.map((comment: any, index: number) => (
                <Comment key={index} comment={comment} />
              ))}
            </div>
          </div>
          <NewComment title={title} />
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error rendering the project page:", error);
    return (
      <div className={style.errorPage}>
        <h1 className={style.pageTitle}>
          An error occurred. Please try again later.
        </h1>
      </div>
    );
  }
}