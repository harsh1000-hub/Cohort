import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";
function App() {
  // local state
  const [count, setCount] = useState(0); // intial state
  return (
    <>
      {/* Inside curly bracket we pass {count} this count is basically the count value that is in local state*/}
      <Button count={count} setCount={setCount}></Button>
      {/* here passing setCount function as props in below button Component and same for count*/}
    </>
  );
}
function Button(props) {
  // props is way to pass data from parent component to child component and vice-versa
  function onClickHandler() {
    props.setCount(props.count + 1); // here props.setCount => calling setCount method and here props.count+1 means we can access count value and update that value
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}

// validate props by using props library
Button.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};
export default App;
