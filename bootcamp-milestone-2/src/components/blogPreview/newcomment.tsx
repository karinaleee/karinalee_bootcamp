"use client";
import React, { useState} from "react";
import style from "./newcomment.module.css";
import Comment from "./comment";

//type definitions
type commentData = {
  user: string;
  content: string;
};

type Props = {
  slug: string; 
};


export default function NewComment({ slug }: Props) {
  //   const [error, setError] = useState("");
  // creting constant for the new comment data and the status of the form input
  //console.log("entering the new comment function")
  const [formData, setformData] = useState<commentData>({
    user: "",
    content: "",
  });


  
//test
  const [status, setStatus] = useState("");
  // only reacts to chenges in input or textarea

  console.log('status  1  ',status)
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setformData((form) => ({ ...form, [name]: value }))
  };
  
        // useEffect(()=>{
        //   Comment;
        //   console.log("use effect entered")
        // }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("in handle submit")
    // both comment and user have inputs
    console.log("entering try")
   // console.log("slug       ",slug)
    try {
      //                                this may change
      
      const response = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log('response', response)

      console.log('FORM DATA                   ', formData)
      if (!response.ok) {
        throw new Error("Failed to add comment.");
      }

      setStatus("submitted");
      setformData({ user: "", content: "" });
      console.log('status  2  ',status)


    } catch (error) {
      console.log("error", error);
      setStatus("Comment failed");
    }
  };






  return (

    <div className= {style.commentSec}>
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






// function refreshComments(){
//   window.location.reload(); 
// } 

// export default function NewComment(Page: any) {
//   const [comment, setComment] = useState("");
//   const [username, setUser] = useState("");
//   const time = new Date()

//   const changeUser = (event: any) => { setUser(event.target.value); }
//   const changeComment = (event: any) => { setComment(event.target.value); }
//   const addComment = async (event: any) => {
//       event.preventDefault();
//       const data = { username, comment, time };
//       const response = await fetch(`/api/blog/${Page.slug}`, {
//           method: 'POST',
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data)
//       });
//       event.target.reset();
  
//   }

//   return (
//       <div>
//           <h3 className={style.addAComment}>Add a Comment!</h3>
//           <form onSubmit={addComment}>
//               <div>
//                   <div className={style.labelContainer}>
//                   <label className={style.label}>Name</label>
//                   </div>
//                   <div>
//                   <input type="text" id="name" onChange={changeUser} className={style.input}/>
//                   </div>
//               </div>
//               <br></br>
//               <div>
//                   <div className={style.labelContainer}>
//                       <label className={style.label}>Comment</label>
//                   </div>
//                   <div>
//                       <textarea id="message" onChange={changeComment} className={style.input}/>
//                   </div>
//               </div>
//               <input type="submit" id="submit" className = {style.submit} onClick={() => refreshComments()}/>
//           </form>
//       </div>
//   )
