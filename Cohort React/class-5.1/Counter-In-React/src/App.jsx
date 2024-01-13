import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";
function App() {
  // This is the counter app in react ========================>>>>>>>>>
  //   // local state
  //   const [count, setCount] = useState(0); // intial state
  //   return (
  //     <>
  //       {/* Inside curly bracket we pass {count} this count is basically the count value that is in local state*/}
  //       <Button count={count} setCount={setCount}></Button>
  //       {/* here passing setCount function as props in below button Component and same for count*/}
  //     </>
  //   );
  // }
  // function Button(props) {
  //   // props is way to pass data from parent component to child component and vice-versa
  //   function onClickHandler() {
  //     props.setCount(props.count + 1); // here props.setCount => calling setCount method and here props.count+1 means we can access count value and update that value
  //   }
  //   return <button onClick={onClickHandler}>Counter {props.count}</button>;}

  // todo APP in react =-------------------------------------->>>>>>>>>

  // ----------------------------------------------------------------------------------------------

  // local state
  let globalId = 1; // pass globalId to key
  const [todos, setTodos] = useState([
    // intial state of todo
    {
      title: "Go to Gym",
      description: "Go to gym from 7-9",
      completed: "false",
    },
    {
      title: "Go to Cohort",
      description: "Learn about React",
      completed: "false",
    },
  ]);
  // add new todo
  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "New todo",
        description: "New Description",
        completed: "false",
      },
    ]);
  }
  return (
    <div>
      <button
        onClick={addTodo}
        style={{
          backgroundColor: "grey",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        Add a Todo
      </button>
      {todos.map(function (todo) {
        return (
          <Todo
            key={globalId++}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
          ></Todo>
        );
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.completed}</h3>
    </div>
  );
}
// validate props for Button Component by using props library
// Button.propTypes = {
//   count: PropTypes.number.isRequired,
//   setCount: PropTypes.func.isRequired,
// };

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
};
export default App;
