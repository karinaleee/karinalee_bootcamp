import React from "react";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";
import styles from "./page.module.css";
import ProjectPreview from "@/components/project/projectPreview";

async function getProject() {
  console.log("1");
  await connectDB();
  console.log("2");
  try {
    const project = await ProjectModel.find().sort({ date: -1 }).orFail();
    console.log("3");
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
