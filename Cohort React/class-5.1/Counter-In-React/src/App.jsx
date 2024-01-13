import { useState } from "react";
import "./App.css";

function App() {
  // local state
  const [count, setCount] = useState(0); // intial state is 0
  return (
    <div>
      {/* Inside curly bracket we pass {count} this count is basically the count value that is in local state*/}
      <Button count={count} setCount={setCount}></Button>{" "}
      {/* here passing setCount function as props in below button Component and same for count*/}
    </div>
  );
}
function Button(props) {
  // props is way to pass data from parent component to child component and vice-versa
  function onButtonClick() {
    props.setCount(props.count + 1); // here props.setCount => calling setCount method and here props.count+1 means we can access count value and update that value
  }
  return <button onClick={onButtonClick}>Counter {props.count}</button>;
}
export default App;
