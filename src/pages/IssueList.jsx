import React from "react";
import { useState, useEffect } from "react";
import Issues from "../components/Issues";

export default function IssueList(props) {
  let [paperData, setPaperData] = useState([]);
  let [paperHeader, setPaperHeader] = useState({});

  const paperID = props.match.params.id;
  const fetchPaper = () => {
    const paperURL = props.location.url;
    fetch(paperURL)
      .then((res) => res.json())
      .then((result) => {
        setPaperData(result.issues);
        setPaperHeader(result);
        console.log(result);
      });
  };

  useEffect(() => {
    fetchPaper();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>Issues - {paperHeader.name}</h1>
      <div>
        <p>Place of Publication: {paperHeader.place_of_publication}</p>
        <p>Publisher: {paperHeader.publisher}</p>
      </div>
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
