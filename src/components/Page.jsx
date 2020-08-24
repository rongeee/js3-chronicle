import React from "react";

export default function Issues({ seq, url }) {
  console.log(url);

  const urlToPdf = (u) => {
    let res = u.replace("json", "pdf");
    return res;
  };

  let test = urlToPdf(url);
  console.log(test);

  return (
    <div className="newspaperlist__paper">
      <p>Page: {seq}</p>
      <a href={urlToPdf(url)}>View as PDF</a>
    </div>
  );
}
