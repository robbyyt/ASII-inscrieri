import React from "react";
import "./Comment.scss";
import classnames from "classnames";
export default function Comment(props) {
  return (
    props.volunteer && (
      <div
        className={classnames("comment", {
          accepted: props.volunteer.status === "accepted",
          denided: props.volunteer.status === "denided",
          maybe: props.volunteer.status === "maybe"
        })}
      >
        <p className="comment-title">
          {props.comment.value}
        </p>
      </div>
    )
  );
}
