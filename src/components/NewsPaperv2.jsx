import React from "react";
import { useState, useEffect } from "react";
import Issues from "./Issues";

export default function NewsPaperv2(props) {
  let [paperData, setPaperData] = useState([]);

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
            <Issues id={index} date={item.date_issued} issueURL={item.url} />
          );
        })}
      </div>
    </div>
  );
}
