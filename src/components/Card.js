import { useState } from "react";

function Card({ text, pageid }) {
  const [pageData, setPageData] = useState("");

  const url =
    "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=revisions&rvslots=*&rvprop=content&formatversion=2&format=json&titles=";

  const callPage = () => {
    fetch(url + text).then((data) => console.log(data));
  };

  return (
    <button className="card" onClick={callPage}>
      <p>{text}</p>
      <p>{pageid}</p>
    </button>
  );
}

export default Card;
