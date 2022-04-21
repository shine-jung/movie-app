import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    // Anonymous function
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      console.log("I run when 'keyword' changes.", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.", counter);
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword or counter changes.", keyword, counter);
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
