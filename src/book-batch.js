import { useEffect, useState } from "react";
import axios from "axios";

export function BookBatches() {
  const [img, setImg] = useState([]);
  useEffect(() => {
    axios
      .get("https://e-commerce.sandeepmehta215.repl.co/bookbatches")
      .then((resp) => {
        if (resp.status === 200) setImg(resp.data.images);
        else setImg("loading...");
      });
  }, []);

  return (
    <div className="bookBatches">
      {img.map((obj) => (
        <img className="bookBatchPills" src={obj} alt="loading" />
      ))}
    </div>
  );
}
