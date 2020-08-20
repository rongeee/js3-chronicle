import React from "react";
import { useState, useEffect } from "react";
import NewsPaper from "./NewsPaper";

export default function NewspaperList() {
  let [newsList, setNewsList] = useState([]);

  const fetchNewsList = () => {
    fetch("https://chroniclingamerica.loc.gov/newspapers.json")
      .then((res) => res.json())
      .then((result) => {
        setNewsList(result.newspapers);
        console.log(result);
      });
  };
  useEffect(() => {
    fetchNewsList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="main">
      <div className="newspaperlist">
        {newsList.map((item, index) => {
          return (
            <NewsPaper
              id={index}
              title={item.title}
              state={item.state}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}
