import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState("");

  const fetchData = async () => {
    fetch(
      `${process.env.REACT_APP_WIKI_API}${process.env.REACT_APP_ENDPOINTS}${text}`
    )
      .then((data) => data.json())
      .then((res) => setData(res));
  };

  return (
    <div className="main">
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder={text}
        type="text"
        className="text"
      />
      <p>{text}</p>
      <button onClick={fetchData}>Search</button>
      <p>
        {data === ""
          ? "Empty"
          : Object.values(data["query"]["pages"]).map( e=> <Card pageid={e['pageid']} text={e['title']}/>)}
        </p>
    </div>
  );
}

export default App;
