import React from "react";
import { IComment } from "@/database/blogSchema";
import style from "./comment.module.css";


type CommentProps = {
    comment: IComment;
}


function parseCommentTime(time: Date){

    return new Date(time).toDateString();
}

export default function Comment({ comment }: CommentProps) {
    return (
    <div className={style.commentContainer}>
      <h3 className={style.commentUser}>{comment.user}</h3>
      <p className={style.commentContent}>{comment.content}</p>
      <p className={style.commentTime}>{parseCommentTime(comment.time)}</p>
    </div>

    );
}