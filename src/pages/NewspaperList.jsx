import React from "react";
import { useState, useEffect } from "react";
import NewsPaper from "../components/NewsPaper";

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
      <h1>Newspapers</h1>
      <div className="newspaperlist">
        {newsList.map((item, index) => {
          return (
            <NewsPaper
              key={index}
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
