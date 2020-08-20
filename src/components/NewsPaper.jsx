import React from "react";
import { Link } from "react-router-dom";

export default function NewsPaper({ id, title, state, url }) {
  return (
    <div className="newspaperlist__paper">
      <p>{id}</p>
      <p>{title}</p>
      <p>{state}</p>
      <Link
        to={{
          pathname: `/paper/${id}`,
          url: url,
        }}
      >
        View
      </Link>
    </div>
  );
}
