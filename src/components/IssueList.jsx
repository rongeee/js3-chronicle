import React from "react";
import { useState, useEffect } from "react";
import Issues from "./Issues";

export default function IssueList(props) {
  let [paperData, setPaperData] = useState([]);

  const paperID = props.match.params.id;
  const fetchPaper = () => {
    const paperURL = props.location.url;
    fetch(paperURL)
      .then((res) => res.json())
      .then((result) => {
        setPaperData(result.issues);
      });
  };

  useEffect(() => {
    fetchPaper();
  }, []);

  return (
    <div>
      <div className="newspaperlist">
        {paperData.map((item, index) => {
          return (
            <Issues
              key={index}
              id={index}
              date={item.date_issued}
              issueURL={item.url}
              paperID={paperID}
            />
          );
        })}
      </div>
    </div>
  );
}
