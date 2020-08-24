import React from "react";
import { useState, useEffect } from "react";
import Page from "./Page";

export default function IssueList(props) {
  let [pageHeader, setPageHeader] = useState({});
  let [pageData, setPageData] = useState([]);
  console.log(props);

  const paperID = props.match.params.id;
  const fetchPages = () => {
    const pageURL = props.location.issueURL;
    fetch(pageURL)
      .then((res) => res.json())
      .then((result) => {
        setPageData(result.pages);
        setPageHeader(result);
      });
  };

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <div>
      <h1>Pages</h1>
      <div>
        <p>Date Issued: {pageHeader.date_issued}</p>
        <p>Edition: {pageHeader.edition}</p>
        <p>Volume: {pageHeader.volume}</p>
      </div>
      <div className="newspaperlist">
        {pageData.map((item, index) => {
          return <Page key={index} seq={item.sequence} url={item.url} />;
        })}
      </div>
    </div>
  );
}
