import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClickB = () => setShowing((prev) => !prev);
  useEffect(() =>{
    console.log("I run only once");
  }, [])
  useEffect(() => {
    if (keyword !== "") {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);
  useEffect(() =>{
    console.log("I run when 'counter' changes.");
  }, [counter])
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
        />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {showing ? <Hello /> : null}
      <button onClick={onClickB}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

