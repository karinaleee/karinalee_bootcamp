"use client";
import React, { useState } from "react";
import style from "./newcomment.module.css";

type commentData = {
  user: string;
  content: string;
};

type Props = {
  title: string;
};

export default function NewComment({ title }: Props) {
  
  const [formData, setformData] = useState<commentData>({
    user: "",
    content: "",
  });


  

  const [status, setStatus] = useState("");
 
  console.log('status    ',status)
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setformData((form) => ({ ...form, [name]: value }))
  };
  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
   
    try {
     
      
      const response = await fetch(`https://karinalee-bootcamp-97e9.vercel.app/api/Project/${title}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log('response', response)

      console.log('FORM DATA                   ', formData)
      if (!response.ok) {
        throw new Error("Failed to add comment.");
      }

     
      setformData({ user: "", content: "" });
    } catch (error) {
      console.log("error", error);
      setStatus("Comment failed");
    }
  };



  return (

    <div className= {style.commentSection}>
      <h2>Leave a Comment!</h2>
      <form className="formInfo" onSubmit={handleSubmit}>
        <div>
          <label >Name:</label>
          <input className={style.user} type="text" id="user" name="user" value={formData.user} onChange={handleInputChange} placeholder="Your name" required/>
        </div>
        <div>
          <label >Comment:</label>
          <textarea
          className={style.comment}
            id="comment"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Write your comment"
            required
          />
        </div>

        <button type="submit">Submit Comment</button>
      </form>
      {status && <p className={style.status}></p>}
    
    </div>
  );
}