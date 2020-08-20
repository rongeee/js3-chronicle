import React from "react";
import { Link } from "react-router-dom";

export default function Issues({ id, date, issueURL }) {
  return (
    <div className="newspaperlist__paper">
      <p>{id}</p>
      <p>{date}</p>
      <p>{issueURL}</p>
      <Link
        to={{
          pathname: `/paper/${id}`,
          // url: url,
        }}
      >
        View
      </Link>
    </div>
  );
}
