import axios from "axios";
import { useEffect, useState } from "react";

export function FeaturedAuthors() {
  const [FeaturedAuthors, setFeaturedAuthors] = useState([]);
  const [FeaturedSeries, setFeaturedSeries] = useState([]);
  useEffect(() => {
    axios
      .get("https://e-commerce.sandeepmehta215.repl.co/featured")
      .then((resp) => {
        setFeaturedAuthors(resp.data.FeaturedAuthors);
        setFeaturedSeries(resp.data.FeaturedSeries);
      });
  });

  return (
    <>
      <h1> Featured India Authors </h1>
      <ul className="img-group">
        {FeaturedAuthors.map((obj, index) => {
          return (
            obj.nation === "India" && (
              <li key={index} className="list list-group-item">
                <img className="circle" alt="loading" src={obj.icon} />
              </li>
            )
          );
        })}
      </ul>
      <h1> Featured International Authors </h1>
      <ul className="img-group">
        {FeaturedAuthors.map((obj, index) => {
          return (
            obj.nation !== "India" && (
              <li key={index} className="list list-group-item">
                <img className="circle" alt="loading" src={obj.icon} />
              </li>
            )
          );
        })}
      </ul>
      <h1> Featured Series</h1>
      <ul className="img-group">
        {FeaturedSeries.map((obj, index) => {
          return (
            <li key={index} className="list list-group-item">
              <img className="square" alt="loading" src={obj.titleSrc} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
