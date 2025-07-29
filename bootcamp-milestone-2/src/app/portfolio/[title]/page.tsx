import style from "./page.module.css";
import Footer from "@/components/footer/footer";
import Comment from "@/components/project/comment";
import NewComment from "@/components/project/newcomment";
import React from "react";

type Props = {
  params: Promise<{
    title: string;
  }>;
};
type commentType = {
  user: string;
  content: string;
  time: Date;
};
// Function to fetch project data
async function getProject(title: string) {
  try {
    const res = await fetch(
      `https://karinalee-bootcamp-97e9.vercel.app/api/Project/${title}`,
      {
        cache: "no-store",
      }
    );
    console.log("response - going thru?", res);

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
            {/* <img
              className={style.photo}
              src={project.image}
              alt={project.imageAlt || "Proj. Image"}
            /> */}
            <p className={style.description}>{project.description}</p>
          </div>
          <div className={style.commentSection}>
            <h2 className={style.commentTitle}>Comment Here!</h2>
            <div className={style.commentList}>
              {project.comments.map((comment: commentType, index: number) => (
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
    console.error("Error", error);
    return (
      <div className={style.errorPage}>
        <h1 className={style.pageTitle}>
          An error occurred. Please try again later.
        </h1>
      </div>
    );
  }
}
