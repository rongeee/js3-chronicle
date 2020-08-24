import React from "react";
import { Link } from "react-router-dom";

export default function Issues({ id, date, issueURL, paperID }) {
  return (
    <div className="newspaperlist__paper">
      <p>{date}</p>
      <Link
        to={{
          pathname: `/paper/${paperID}/issue/${id}`,
          issueURL: issueURL,
        }}
      >
        Pages
      </Link>
    </div>
  );
}
