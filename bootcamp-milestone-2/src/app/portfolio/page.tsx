// import styles from "./page.module.css";
// import Image from "next/image";

// export default function Portfolio() {
//   return (
//     <>
//       <main className={styles.portfolioMain}>
//         <h1 className={styles.pageTitle}>Portfolio</h1>
//         <div className={styles.projectContainer}>
//           <div className={styles.project}>
//             <a href="/" className={styles.projectImageLink}>
//             {/* <Image
//                 src="/bootcamp-milestone-2\public\IMG_7579.jpg" // Correct relative path for Next.js public folder
//                 alt="Preview of Karina's personal website"
//                 className={styles.projectImage}
//                 width={400} // Specify dimensions for better optimization
//                 height={300}
//               /> */}
//               <img 
//             src="IMG_7579.jpg" 
//             alt="karina pic" 
//             className="project-image">

//             </img>
//             </a>
//             <div className={styles.projectDetails}>
//               <p className={styles.projectName}>
//                 <strong>Karina's personal website</strong>
//               </p>
//               <p className={styles.projectDescription}>
//                 Hello. This is my webpage. 
//               </p>
//               <a href="/" className={styles.learnMore}>
//                 LEARN MORE
//               </a>
//             </div>
//           </div>
//         </div>
      
        
//       </main>
//     </>
//   );
// }

import React from "react";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";
import styles from "./page.module.css";
import ProjectPreview from "@/components/project/projectPreview";



async function getProject() {
  console.log("1")
    await connectDB();
    console.log("2")
    try {
        const project = await ProjectModel.find().sort({date: -1}).orFail();
        console.log("3")
        return project;
    } catch (err) {
        console.log(err);
        return null;
    }

}



export default async function ProjectHome() {
    const project = await getProject();
    if (!project) {
      return <div> Project Not Found </div>;
    }
    return (
      <div>
        <h1 className={styles.pageTitle}>Projects</h1>
        <div className={styles.blogContainer}>
          {/* {blogs.map(blog =>
                 <BlogPreview {...(blog as any)._doc} key={blog.title} />
              )} */}
  
          {project.map((projects, index) => (
            <div key={index} className={styles.projectPreview}>
              <ProjectPreview
                    title={projects.title}
                    skills={projects.skills}
                    content1={projects.content1}
                    content2={projects.content2}
                    comments={projects.comments}
                    />
            </div>
          ))}
        </div>
      </div>
    );
  
}